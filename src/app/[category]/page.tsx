import { notFound } from "next/navigation";
import { LawsDisplay } from "~/components/laws-display";
import { PageLayout } from "~/components/layout/page-layout";
import { type LawCategory, lawsByCategory } from "~/data/laws";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(lawsByCategory)
    .filter((category) => category !== "working")
    .map((category) => ({
      category,
    }));
}

export default async function CategoryPage({
  params,
}: CategoryPageProps): Promise<JSX.Element> {
  const { category } = await params;
  const categoryLaws = lawsByCategory[category] as LawCategory | undefined;

  if (!categoryLaws) {
    notFound();
  }

  return (
    <PageLayout title={categoryLaws.title} footer={categoryLaws.footer}>
      <LawsDisplay laws={categoryLaws.laws} />
    </PageLayout>
  );
}
