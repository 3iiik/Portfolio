import WorkPage from "@/components/WorkPage";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return [
    { slug: "le-jardin" },
    { slug: "atlas-fitness" },
    { slug: "smilecare" },
    { slug: "wilaya" },
    { slug: "forca" },
  ];
}

export default async function WorkSlugPage({ params }: Props) {
  const { slug } = await params;
  return <WorkPage slug={slug} />;
}