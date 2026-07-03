import axios from "axios";

export async function GET(request: Request) {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return Response.json({
    data: res.data,
  });
}
