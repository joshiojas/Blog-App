"use server";
import { getAllPosts } from "@/lib/actions";
import Posts from "./clientPage";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const posts = (await getAllPosts()).posts;
  
  return (
    <main className="">
      <Posts posts={posts} />
    </main>
  );
}
