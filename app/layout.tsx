import "./globals.css";
import { Public_Sans } from "next/font/google";
import { ActiveLink } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Flame } from "lucide-react";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>KernelSmith --6502 MP</title>
        {/* <link rel="shortcut icon" href="/images/favicon.ico" /> */}
        {/* <meta
          name="description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        /> */}
        <meta property="og:title" content="KernelSmith -- 6502 mp" />
        {/* <meta
          property="og:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain + Next.js Template" />
        <meta
          name="twitter:description"
          content="Starter template showing how to use LangChain in Next.js projects. See source code and deploy your own at https://github.com/langchain-ai/langchain-nextjs-template!"
        />
        <meta name="twitter:image" content="/images/og-image.png" /> */}
      </head>
      <body className={publicSans.className}>
        <div className="bg-secondary grid grid-rows-[auto,1fr] h-[100dvh]">
          <div className="grid grid-cols-[1fr,auto] gap-2 p-4">
                <div className="flex items-center space-x-3">
                  <Flame className="h-8 w-8 text-amber-500" />
                  <span className="text-2xl font-bold text-amber-500 font-mono">
                    <ActiveLink href="https://www.kernelsmith.dev/">
                      KernelSmith
                    </ActiveLink>
                  </span>
                </div>
            <div className="flex gap-4 flex-col md:flex-row md:items-center">
              <a
                href="https://kernelsmith.dev"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                <h1>KernelSmith-6502MP</h1>
              </a>
              <nav className="flex gap-1 flex-col md:flex-row">
                {/* <ActiveLink href="/">🏴‍☠️ Chat</ActiveLink>
                <ActiveLink href="/structured_output">
                  🧱 Structured Output
                </ActiveLink>
                <ActiveLink href="/agents">🦜 Agents</ActiveLink>
                <ActiveLink href="/retrieval">🐶 Retrieval</ActiveLink> */}
                <ActiveLink href="/6502_retrieval_agent_demo">
                  🤖 6502 Retrieval Agent Demo
                </ActiveLink>
                {/* <ActiveLink href="/ai_sdk">
                  🌊 LangChain x AI SDK RSC
                </ActiveLink> */}
              </nav>
            </div>

            <div className="flex justify-center"></div>
          </div>
          <div className="bg-background mx-4 relative grid rounded-t-2xl border border-input border-b-0">
            <div className="absolute inset-0">{children}</div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
