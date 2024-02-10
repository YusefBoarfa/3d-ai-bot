import { ChatBotCanvas } from "@/components/ChatBotCanvas/ChatBotCanvas";
import { TextToSpeech } from "@/components/TextToSpeech/TextToSpeech";
import { IsPlayingProvider } from "@/components/isPlayingContext";

export default function Home() {
  return (
    <main className="h-screen">
      <IsPlayingProvider>
        <TextToSpeech />
        <ChatBotCanvas />
      </IsPlayingProvider>
    </main>
  );
}
