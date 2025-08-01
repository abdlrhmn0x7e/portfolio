import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";
import cliSpinners from "cli-spinners";

export function AiOutput({ prompt }: { prompt: string }) {
  const { messages, sendMessage, status, stop, setMessages } = useChat();
  const isPending = status !== "ready";

  // Generate a response when the component mounts
  useEffect(() => {
    void sendMessage({ text: prompt });

    return () => {
      void stop();
      setMessages([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isPending) {
    return (
      <p className="flex items-center gap-1">
        <AiOutputSpinner />
        Generating response...
      </p>
    );
  }

  return messages.map(
    (message) =>
      message.role !== "user" && (
        <div key={message.id}>
          {message.parts.map((part, index) =>
            part.type === "text" ? (
              <span key={`${message.id}-${index}`} className="text-chart-1">
                {part.text}
              </span>
            ) : null,
          )}
        </div>
      ),
  );
}

export function AiOutputSpinner() {
  const spinner = cliSpinners.star;
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % spinner.frames.length);
    }, spinner.interval + 50);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className="min-w-4">{spinner.frames[frame]}</span>;
}
