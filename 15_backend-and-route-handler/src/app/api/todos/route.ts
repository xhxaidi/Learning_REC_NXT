export async function POST(request: Request) {
  // parse the data from the client
  const body = await request.json();
  const { title, completed } = body;

  //you can do the database logic here and after
  return Response.json({
    success: true,
    message: "todo created successfully",
    todo: {
      title,
      completed,
    },
  });
}

export async function PUT(request: Request, { params }) {
  const data = await request.json();

  const updatedTodo = { id: params.id, ...data };

  // assuming that we are updating the data into the database

  return Response.json({ todo: updatedTodo });
}

export async function PATCH(request: Request, { params }) {
  const data = await request.json();

  const updatedTodo = { id: params.id, ...data };

  // assuming that we are updating the data into the database

  return Response.json({ todo: updatedTodo });
}

export async function DELETE(request: Request, { params }) {
  const data = await request.json();

  const updatedTodo = { id: params.id, ...data };

  // assuming that we are updating the data into the database

  return Response.json({ todo: updatedTodo });
}
