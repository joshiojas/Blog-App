import Navbar from "@/components/navbar";
import Card from "@/components/postCard";
import Image from "next/image";
import { get } from "http";
import { getAllPosts } from "@/lib/utils";
import { Key } from "react";
import { Post } from "@/lib/types";

export default async function Home() {
  const posts = (await getAllPosts()).posts;
  console.log(posts);

  return (
    <main className="">
      <div className="mb-36">
        <Navbar />
      </div>
      <div className="flex">
        {posts.map((post: Post) => (
          <div className="m-5" key={post.id}>
            <Card
              id={post.id}
              title={post.title}
              content={post.content}
              authorId={post.authorId}
              url={post.url}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
