import { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Health check or basic status endpoint
 *     description: Returns a simple status object to verify that the API is working.
 *     tags:
 *       - Status
 *     responses:
 *       200:
 *         description: API is up and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *       405:
 *         description: Method Not Allowed
 */
const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  if (method !== 'GET') {
    response.setHeader('Allow', ['GET']);
    return response.status(405).end(`Method ${method} Not Allowed`);
  }
  return response.status(200).json({ status: 'ok' });
};

export default handler;
