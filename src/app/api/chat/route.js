import { createOllama } from 'ollama-ai-provider'

const ollama = createOllama();

export async function POST(req) {
    const { messages } = await req.json();
}