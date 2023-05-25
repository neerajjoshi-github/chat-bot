"use client";
import React from "react";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import ChatBotHadder from "./ChatBotHadder";
import ChatBotInput from "./ChatBotInput";

const ChatBot = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow-md"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow-hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="text-black px-6 border-b border-zinc-300">
              <ChatBotHadder />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">user messages</div>
              <ChatBotInput className="px-4" />
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ChatBot;
