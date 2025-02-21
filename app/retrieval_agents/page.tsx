import { ChatWindow } from "../../components/ChatWindow";
import { GuideInfoBox } from "@/components/guide/GuideInfoBox";

export default function AgentsPage() {
  const InfoCard = (
    <GuideInfoBox>
      <ul>
        <li className="text-l">
          🤖
          <span className="ml-2">
            Welcome to the 6502 Retrieval Agent! This system lets you upload
            your 6502 datasheets and query detailed information about the
            devices and vasm_oldstyle assembly language.
          </span>
        </li>
        <li className="text-l">
          📄
          <span className="ml-2">
            Use the uploader below to ingest your datasheets. Your files will be
            vectorized and stored for efficient retrieval.
          </span>
        </li>
        <li className="text-l">
          💬
          <span className="ml-2">
            Once uploaded, simply ask questions about the 6502, its datasheets,
            or vasm_oldstyle assembly—for example, &quot;How does the 6502
            handle interrupts?&quot; or &quot;What is the memory map for the
            6502?&quot;
          </span>
        </li>
        <li className="text-l">
          🚀
          <span className="ml-2">
            Start by uploading your files, then type your query in the chat
            window below!
          </span>
        </li>
      </ul>
    </GuideInfoBox>
  );

  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents" // This endpoint will be your retrieval & generate route.
      emptyStateComponent={InfoCard}
      showIngestForm={true} // Enables the file uploader that connects to your ingestion API route.
      showIntermediateStepsToggle={true}
      placeholder={
        "Beep boop! I'm your 6502 retrieval agent! Ask me anything about 6502 datasheets or vasm_oldstyle assembly."
      }
      emoji="🤖"
    />
  );
}
