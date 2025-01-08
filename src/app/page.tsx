import { LawsDisplay } from "~/components/laws-display";
import { PageLayout } from "~/components/layout/page-layout";
import { type LawCategory, lawsByCategory } from "~/data/laws";

export default function HomePage() {
  const codingLaws = lawsByCategory.coding!;

  return (
    <PageLayout title={codingLaws.title} footer={codingLaws.footer}>
      <LawsDisplay laws={codingLaws.laws} />
    </PageLayout>
  );
}
