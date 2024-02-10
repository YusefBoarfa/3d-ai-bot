"use client";
import { sendTextToOpenAI } from "@/logic/sendTextToOpenAi";
import { FormEvent, useContext, useState } from "react";
import { AppContext } from "../isPlayingContext";

export const TextToSpeech = () => {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setIsPlaying } = useContext(AppContext);
  const synth = typeof window !== "undefined" ? window.speechSynthesis : null;
  const voices = synth?.getVoices();
  console.log(voices);
  const seletedVoice = voices?.find(
    (voice) => voice.name === "Google UK English Female"
  ); // Other voice that sounds good Karen, Tessa, Trinoids

  const speak = (text: string) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.voice = seletedVoice || null;
    utterThis.rate = 0.8;
    synth?.speak(utterThis);
    setIsPlaying(true);
    utterThis.onend = () => {
      setIsPlaying(false);
    };
  };
  const handleUserText = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // const message = await sendTextToOpenAI(userText);
    const message = userText;
    setIsLoading(false);
    if (!message) return;
    speak(message);
  };
  return (
    <div className="relative top-0 z-50">
      <form
        onSubmit={handleUserText}
        className="absolute top-[800px] left-[30px] space-x-2 pt-2"
      >
        <input
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          type="text"
          className="bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f] p-2 text-[#b00c3f]"
          placeholder="Ask me anything..."
        />
        <button
          disabled={isLoading}
          className="text-[#b00c3f] p-2 border border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500 hover:scale-110 hover:text-black hover:bg-[#b00c3f] duration-300 transition-all"
        >
          {isLoading ? "Speaking..." : "Speak"}
        </button>
      </form>
    </div>
  );
};
