import { createOllama } from 'ollama-ai-provider';
import { StreamingTextResponse, streamText, StreamData } from "ai";

const ollama = createOllama();

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const result = await streamText({
            model: ollama("llama3"),
            messages,
        });

        return new StreamingTextResponse(result.toAIStream());
    } catch (error) {
        console.error("Error in POST function:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}