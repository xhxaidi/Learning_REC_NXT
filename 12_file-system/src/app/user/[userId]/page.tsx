"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { userId } = useParams<{ userId: string }>();
  return <p>User: {userId}</p>;
}
