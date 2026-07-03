export async function POST(request: Request) {
  // parse the data from the client
  const body = await request.json();
  const { title, complete } = body;

  //you can do the database logic here and after
  return Response.json({
    success: true,
    message: "todo created successfully",
    todos: {
      title,
      complete,
    },
  });
}
