// pages/api/convert.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { convert } from 'openapi-to-postmanv2';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { content } = req.body;

  if (!content || typeof content !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid content' });
  }

  convert({ type: 'string', data: content }, {}, (err, result) => {
    if (err || !result?.result) {
      return res.status(500).json({ error: 'Conversion failed', detail: err });
    }

    return res.status(200).json(result.output[0].data);
  });
}
