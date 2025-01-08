import { Nav } from "~/components/ui/nav";
import { Separator } from "~/components/ui/separator";

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
        className="hover:underline"
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
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            {title}
          </h1>
          <div className="mb-2 text-xl font-medium text-muted-foreground">
            {subtitle}
          </div>
          <div className="text-md text-muted-foreground/80">{date}</div>
        </div>

        <Nav />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
          <div className="contents [&>*:nth-last-child(-n+2)]:lg:translate-x-[50%] [&>*:nth-last-child(1)]:lg:col-[2] [&>*:nth-last-child(2)]:lg:col-[1]">
            {children}
          </div>
        </div>

        <Separator className="my-16 bg-border" />

        <div className="prose prose-invert mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground">
            {footer ??
              "These laws provide a framework for integrating LLMs while maintaining high standards of quality and ethics. They encourage the use of AI as a powerful tool while emphasizing the critical role of human expertise and oversight in the process."}
          </p>
        </div>
      </div>
    </main>
  );
}
