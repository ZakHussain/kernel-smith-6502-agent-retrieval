import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://www.kernelsmith.dev/");
}

// "use client";

// import { useState } from "react";

// const documents = [
//   {
//     id: "1",
//     pageContent: "The powerhouse of the cell is the mitochondria",
//     metadata: { source: "https://example.com" },
//   },
//   {
//     id: "2",
//     pageContent: "Buildings are made out of brick",
//     metadata: { source: "https://example.com" },
//   },
//   {
//     id: "3",
//     pageContent: "Mitochondria are made out of lipids",
//     metadata: { source: "https://example.com" },
//   },
//   {
//     id: "4",
//     pageContent: "The 2024 Olympics are in Paris",
//     metadata: { source: "https://example.com" },
//   },
// ];

// export default function Home() {
//   const [status, setStatus] = useState<Record<string, "idle" | "loading" | "added">>(
//     {}
//   );

//   const handleAction = async (id: string, document: any, action: "add" | "delete") => {
//     setStatus((prev) => ({ ...prev, [id]: "loading" }));

//     const response = await fetch("/api/vectorstore", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ document, id, action }),
//     });

//     const result = await response.json();

//     if (result.success) {
//       setStatus((prev) => ({
//         ...prev,
//         [id]: action === "add" ? "added" : "idle",
//       }));
//     } else {
//       console.error("Error:", result.error);
//       setStatus((prev) => ({ ...prev, [id]: "idle" }));
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
//       {documents.map((doc) => (
//         <button
//           key={doc.id}
//           className={`px-4 py-2 text-white font-bold rounded-lg ${
//             status[doc.id] === "added"
//               ? "bg-red-500 hover:bg-red-600"
//               : "bg-blue-500 hover:bg-blue-600"
//           } disabled:bg-gray-400`}
//           onClick={() => handleAction(doc.id, doc, status[doc.id] === "added" ? "delete" : "add")}
//           disabled={status[doc.id] === "loading"}
//         >
//           {status[doc.id] === "added" ? "Delete Document" : "Add Document"}
//         </button>
//       ))}
//     </div>
//   );
// }
