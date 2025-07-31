format:
	python3 -m black .

check:
	python3 -m ruff check .

lock:
	python3 -m pigar generate

bundle:
	pyinstaller --onefile --clean --strip --name ytt main.py
