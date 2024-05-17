"use client";
import Card from "@/components/postCard";
import Searchbar from "@/components/searchbar";
import { Post } from "@/lib/types";
import { useState } from "react";

export default function Posts(props: any) {
  const [posts, setPosts] = useState(props.posts);

  function updatePosts(e: any) {
    const filteredPosts = props.posts.filter((post: Post) => {
      return post.title.includes(e.target.value);
    });
    setPosts(filteredPosts);
  }

  return (
    <>
      <div className="flex justify-center w-screen">
        <Searchbar updatePosts={updatePosts} />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <div className="m-8" key={post.id}>
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
      </div>
    </>
  );
}
