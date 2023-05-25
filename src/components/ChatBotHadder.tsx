import React from "react";

const ChatBotHadder = () => {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-col items-start text-sm">
        <p className="text-xs">Chat with</p>
        <div className="flex gap-1.5 items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          <p>BookBuddy Support</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBotHadder;
