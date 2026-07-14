import { connectDB } from "@/lib/db";
import { Note } from "@/lib/models/note";
import { title } from "process";

export async function POST(req: Request) {
  await connectDB();
  const { title, content } = await req.json();
  const note = await Note.create({ title, content });
}
