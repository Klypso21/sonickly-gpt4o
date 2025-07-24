import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateSession(promptText) {
  const chat = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You are an audio engineer that generates intense, psychedelic, hallucinogenic sound therapy sessions.",
      },
      {
        role: "user",
        content: promptText,
      }
    ],
    temperature: 1.0,
    max_tokens: 1000
  });

  return chat.choices[0].message.content;
}
