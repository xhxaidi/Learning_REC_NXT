const DocsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log(slug);

  return <div>DocsPage {slug}</div>;
};
export default DocsPage;
