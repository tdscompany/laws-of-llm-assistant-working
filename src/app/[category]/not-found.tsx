import { Button } from "~/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          404 - Category Not Found
        </h1>
        <p className="text-lg text-muted-foreground">
          The requested category does not exist.
        </p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
