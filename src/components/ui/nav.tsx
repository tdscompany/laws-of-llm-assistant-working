"use client";
import { Button } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Coding", path: "/" },
  { name: "Working", path: "/working" },
  { name: "Design", path: "/design" },
  { name: "Education", path: "/education" },
  { name: "Healthcare", path: "/healthcare" },
  { name: "Legal", path: "/legal" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <Button
          key={category.path}
          variant={pathname === category.path ? "default" : "outline"}
          asChild
        >
          <Link href={category.path}>{category.name}</Link>
        </Button>
      ))}
    </nav>
  );
}
