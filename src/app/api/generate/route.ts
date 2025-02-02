import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const GEMINI_KEY = process.env.GEMINI_API_KEY || "";

    if (!GEMINI_KEY) {
      return NextResponse.json({ error: "API key is missing" });
    }
    const genAI = new GoogleGenerativeAI(GEMINI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const data = await req.json();
    const prompt = data.body;

    const result = await model.generateContent(prompt);
    const output = result.response.text();

    return NextResponse.json({ output });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "Something wrong with AI model, try again later" },
      { status: 500 }
    );
  }
}
