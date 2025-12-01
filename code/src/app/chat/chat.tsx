"use client";
import Footer from "../components/core/footer";
import { useChat } from "../hooks/useChat";
import { marked } from "marked"; 

export default function Chat() {
  const {
    chatBoxText,
    messages,
    input,
    isClient,
    isBotProcessing,
    sendMessage,
    setInput,
  } = useChat();

  return (
    <div className="flex flex-col px-2 relative min-h-screen" >
      <h2 className="text-start">Meet Our AI Agent</h2>
      <p className="text-start">
        Talk to our smart assistant to explore services
      </p>

      <div
        ref={chatBoxText}
        className="flex flex-col overflow-y-auto space-y-3 "
        style={{
          flexGrow: 1,
          maxHeight: "calc(110vh - 200px)",
        }}

      >
        <Footer />
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-3 py-[1%] rounded-lg ${msg.sender === "You"
              ? "bg-brown self-end text-cream shadow-lg"
              : "bg-seashell-pink self-start text-seashell-pink shadow-lg "
              }`}
          >
            {msg.sender === "You" ? (
              msg.text
            ) : (
              <div
                className="text-sm text-brown font-semibold"
                dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
              />
            )}
          </div>
        ))}
        {/* Typing Indicator */}
        {isBotProcessing && (
          <div className="bg-seashell-pink self-start text-brown font-semibold px-3 py-[1%] rounded-lg flex space-x-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
          </div>
        )}
      </div>
      {isClient && (
        <form
          onSubmit={sendMessage}
          className="mt-1"
        >
          <div className="flex items-center bg-expresso rounded-xl border border-black px-3 py-2 shadow-md">
            <input
              type="text"
              className="flex-1 text-cream placeholder-cream bg-transparent outline-none font-semibold"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-cream font-semibold ml-2 hover:text-cinereous transition"
              disabled={isBotProcessing}
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
