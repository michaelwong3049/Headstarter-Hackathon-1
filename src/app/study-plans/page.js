"use client";

import { useChat } from "ai/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Markdown from 'react-markdown';

export default function Chat() {
  const router = useRouter();
  const [studyPlanId, setStudyPlanId] = useState('');
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleRouting = (e) => {
    e.preventDefault(e)
    const path = router.pathname;
    if (path.startsWith('/study-plans')) {
      router.push({
        pathname: '/study-plans/studyPlan1',
        query: { studyPlanId, messages: JSON.stringify(messages) },
      });
    }
  };

  return (
    <div className="flex flex-col w-full mx-2 stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          <Markdown>{m.content}</Markdown>
        </div>
      ))}

      <div className="fixed bottom-0 w-full flex justify-center items-end mb-8 space-x-2">
        <form onSubmit={(e) => {handleRouting(e)}}>
          <input
            className="w-48 p-2 border border-gray-300 rounded shadow-xl text-black"
            placeholder="Enter Study Plan Name"
            onChange={(e) => setStudyPlanId(e.target.value)}
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
            Go to Study Plan
          </button>
        </form>

        <form onSubmit={handleSubmit} className="w-3/4 max-w-md flex items-center">
          <input
            className="w-full p-2 border border-gray-300 rounded shadow-xl text-black"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
          <button type="submit" className="ml-2 p-2 bg-green-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
