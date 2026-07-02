const DynamicPostIdPage = async ({
  params,
}: {
  params: Promise<{ postId: string; userId: string }>;
}) => {
  const { postId, userId } = await params;

  return (
    <div>
      DynamicUserIdPage : {userId}
      <br />
      DynamicPostIdPage : {postId}
    </div>
  );
};

export default DynamicPostIdPage;
