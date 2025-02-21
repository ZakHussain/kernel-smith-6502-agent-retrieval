import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { OpenAIEmbeddings } from "@langchain/openai";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";

const supabaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PRIVATE_KEY!
);

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
});

const vectorStore = new SupabaseVectorStore(embeddings, {
  client: supabaseClient,
  tableName: "documents",
  queryName: "match_documents",
});

export async function POST(req: Request) {
  try {
    const { document, id, action } = await req.json();

    if (action === "add") {
      await vectorStore.addDocuments([document], { ids: [id] });
      return NextResponse.json({ success: true, message: "Document added" });
    } else if (action === "delete") {
      await vectorStore.delete({ ids: [id] });
      return NextResponse.json({ success: true, message: "Document deleted" });
    }

    return NextResponse.json({ success: false, message: "Invalid action" });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
}
