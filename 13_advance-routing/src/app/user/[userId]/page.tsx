const DynamicUserIdPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  return <div>DynamicUserIdPage : {userId}</div>;
};

export default DynamicUserIdPage;
