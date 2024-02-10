import { ChatBotCanvas } from "@/components/ChatBotCanvas";
import { TextToSpeech } from "@/components/TextToSpeech";
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
