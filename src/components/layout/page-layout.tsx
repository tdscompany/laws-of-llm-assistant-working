import { Nav } from "~/components/ui/nav";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";
import tdsLogo from "~/assets/tds_company_white.png";

interface PageLayoutProps {
  title: string;
  subtitle?: React.ReactNode;
  date?: string;
  children: React.ReactNode;
  footer?: string;
}

export function PageLayout({
  title,
  subtitle = (
    <>
      Team{" "}
      <a
        href="https://tds.company"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        TDS.company
      </a>
    </>
  ),
  date = "V0.10, 06/01/2025",
  children,
  footer,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            {title}
          </h1>
          <div className="mb-2 text-xl font-medium text-muted-foreground">
            {subtitle}
          </div>
          <div className="text-md text-muted-foreground/80">{date}</div>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground">
            {footer ??
              "These laws provide a framework for integrating LLMs while maintaining high standards of quality and ethics. They encourage the use of AI as a powerful tool while emphasizing the critical role of human expertise and oversight in the process."}
          </p>
        </div>

        <Nav />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
          <div className="contents [&>*:nth-last-child(-n+2)]:lg:translate-x-[50%] [&>*:nth-last-child(1)]:lg:col-[2] [&>*:nth-last-child(2)]:lg:col-[1]">
            {children}
          </div>
        </div>

        <Separator className="my-16 bg-border" />

        <div className="prose prose-invert mx-auto max-w-3xl">
          {title === "The 5 Laws of LLM-Assisted Coding" && (
            <div className="mb-4 mt-12 text-center">
              <a
                href="https://github.com/tdscompany/laws-of-llm-assistant-working"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground/80 transition-colors hover:text-muted-foreground"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Contribute to these laws
              </a>
            </div>
          )}
          <div className="mt-16 text-center">
            <a
              href="https://tds.company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-opacity hover:opacity-80"
              title="Visit TDS Company website"
            >
              <Image
                src={tdsLogo}
                alt="TDS Company"
                className="h-8 w-auto"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
