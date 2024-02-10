import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export async function POST(request: Request) {
  const { userText } = await request.json();
  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create({
      messages: [{ role: "user", content: userText }],
      model: "gpt-3.5-turbo",
    });
  return NextResponse.json(
    { message: `You said: ${userText}` },
    { status: 200 }
  );
}
