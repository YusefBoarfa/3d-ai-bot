import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export async function POST(request: Request) {
  const { userText } = await request.json();
  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Tienes que responder como si fueras un bot en una página web, creada por Yusef, el cual es un desarrollador front-end, muy guapo ademas, el usuario ha puesto esto, responde en el idoma de su mensaje: ${userText}`,
        },
      ],
      model: "gpt-4",
    });
  console.log(chatCompletion.choices[0].message.content);
  return NextResponse.json(
    { message: `${chatCompletion.choices[0].message.content}` },
    { status: 200 }
  );
}
