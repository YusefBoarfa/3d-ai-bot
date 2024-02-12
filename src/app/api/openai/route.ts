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
      model: "gpt-4",
    });
  return NextResponse.json(
    { message: `${chatCompletion.choices[0].message.content}` },
    { status: 200 }
  );
}
