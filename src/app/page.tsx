import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";

export default function HomePage() {
  const laws = [
    {
      title: "1. Freedom of LLM Choice",
      content:
        "Developers are free to use any large language model of their choice for code generation. This allows for flexibility and leverages individual preferences and strengths of different LLMs.",
    },
    {
      title: "2. Comprehension Mandate",
      content:
        "All code generated with the assistance of an LLM must be thoroughly understood and validated by the developer (tester, architect, etc.). Developers are encouraged to document their understanding to ensure traceability and accountability. Simply copying and pasting without comprehension is strictly prohibited.",
    },
    {
      title: "3. Human-AI Collaboration in Review",
      content:
        "Final code review and publication must involve human oversight, complemented by automated tools for quality and security analysis. Reviewers may use LLMs to assist in the review process, but the ultimate decision and responsibility lie with the human reviewer.",
    },
    {
      title: "4. Continuous Learning and Improvement",
      content:
        "Developers and reviewers must actively contribute to improving the LLM-assisted coding process by providing feedback, identifying areas for improvement, and sharing best practices.",
    },
    {
      title: "5. Ethical and Secure Coding Standards",
      content:
        "All code, whether LLM-generated or not, must adhere to the organization's ethical guidelines and security standards. LLMs should be used to enhance, not compromise, code quality and security.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            The 5 Laws of LLM-Assisted Coding
          </h1>
          <div className="mb-2 text-xl font-medium text-muted-foreground">
            Team TDS.company
          </div>
          <div className="text-md text-muted-foreground/80">
            V0.10, 06/01/2025
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
          <div className="contents [&>*:nth-last-child(-n+2)]:lg:translate-x-[50%] [&>*:nth-last-child(1)]:lg:col-[2] [&>*:nth-last-child(2)]:lg:col-[1]">
            {laws.map((law, index) => (
              <Card key={index} className="border-border bg-card/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    {law.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{law.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16 bg-border" />

        <div className="prose prose-invert mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground">
            These laws provide a framework for integrating LLMs into your coding
            workflow while maintaining high standards of code quality, security,
            and developer understanding. They encourage the use of AI as a
            powerful tool while emphasizing the critical role of human expertise
            and oversight in the software development process.
          </p>
        </div>
      </div>
    </main>
  );
}
