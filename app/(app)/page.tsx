import { TopBar } from "@/components/top-bar";
import { PaperDocument } from "@/components/paper-document";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />

      <main className="flex-1">
        <PaperDocument />
      </main>
    </div>
  );
}
