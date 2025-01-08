import { LawsDisplay } from "~/components/laws-display";
import { PageLayout } from "~/components/layout/page-layout";
import { type LawCategory, lawsByCategory } from "~/data/laws";

export default function HomePage() {
  const workingLaws = lawsByCategory.working!;

  return (
    <PageLayout title={workingLaws.title} footer={workingLaws.footer}>
      <LawsDisplay laws={workingLaws.laws} />
    </PageLayout>
  );
}
