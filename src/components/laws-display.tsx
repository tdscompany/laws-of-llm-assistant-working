import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { type Law } from "~/data/laws";

interface LawsDisplayProps {
  laws: Law[];
}

export function LawsDisplay({ laws }: LawsDisplayProps) {
  return (
    <>
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
    </>
  );
}
