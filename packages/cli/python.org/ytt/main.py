import click
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import urlparse, parse_qs
from yaspin import yaspin
import json


def extract_video_id(url):
    """
    Extract the video ID from a YouTube URL or return the input if it's already an ID.
    Supports:
    - https://www.youtube.com/watch?v=VIDEO_ID
    - https://youtu.be/VIDEO_ID
    """
    parsed = urlparse(url)
    if parsed.hostname in ("www.youtube.com", "youtube.com"):
        return parse_qs(parsed.query).get("v", [None])[0]
    if parsed.hostname == "youtu.be":
        return parsed.path.lstrip("/")
    return url  # assume already a video ID


@click.command()
@click.option(
    "--output",
    "-o",
    type=click.Path(),
    help="Save transcript to file instead of printing",
)
def cli(output):
    """
    Fetch and print (or save) YouTube transcript.
    Prompts user for URL and format interactively.
    """
    # Prompt user for URL
    video_url = input("Enter YouTube URL: ").strip()

    if not video_url:
        click.echo("No URL provided. Exiting.")
        return

    # Prompt user for format
    format_input = (
        input("Choose format (text/json/srt) [default: text]: ").strip().lower()
    )
    if format_input not in ["text", "json", "srt", ""]:
        click.echo("Invalid format. Defaulting to text.")
        format_input = "text"
    elif format_input == "":
        format_input = "text"

    video_id = extract_video_id(video_url)

    # Show loading spinner while fetching transcript
    with yaspin(text="Fetching transcript...", color="cyan") as spinner:
        try:
            transcript = YouTubeTranscriptApi.get_transcript(video_id)
            spinner.ok("✔")
        except Exception as e:
            spinner.fail("✖")
            click.echo(f"Error fetching transcript: {e}", err=True)
            return

    # Format transcript based on chosen format
    content = format_transcript(transcript, format_input)

    # Output to file or console
    if output:
        with open(output, "w", encoding="utf-8") as f:
            f.write(content)
        click.echo(f"Transcript saved to {output}")
    else:
        click.echo(content)


def format_transcript(transcript, fmt):
    """Format transcript to text, json, or srt"""
    if fmt == "json":
        return json.dumps(transcript, indent=2, ensure_ascii=False)
    elif fmt == "srt":
        lines = []
        for i, entry in enumerate(transcript, start=1):
            start = entry["start"]
            end = start + entry.get("duration", 0)
            lines.append(
                f"{i}\n{format_time(start)} --> {format_time(end)}\n{entry['text']}\n"
            )
        return "\n".join(lines)
    else:  # default: text
        return "\n".join(
            f"{entry['start']:.2f}s: {entry['text']}" for entry in transcript
        )


def format_time(seconds):
    """
    Convert seconds to SRT timestamp format: HH:MM:SS,mmm
    """
    hrs = int(seconds // 3600)
    mins = int((seconds % 3600) // 60)
    secs = int(seconds % 60)
    ms = int((seconds - int(seconds)) * 1000)
    return f"{hrs:02}:{mins:02}:{secs:02},{ms:03}"


if __name__ == "__main__":
    cli()
