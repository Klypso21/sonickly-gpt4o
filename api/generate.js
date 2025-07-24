import { generateSession } from '../utils/openai.js';

export default async function handler(req, res) {
  const { prompt } = req.query;

  if (!prompt) {
    return res.status(400).json({ error: "Missing prompt" });
  }

  try {
    const response = await generateSession(prompt);
    res.status(200).json({ session: response });
  } catch (err) {
    res.status(500).json({ error: "Failed to generate session", detail: err.message });
  }
}
