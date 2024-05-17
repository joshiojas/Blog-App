"use client";
import Card from "@/components/postCard";
import Searchbar from "@/components/searchbar";
import { Post } from "@/lib/types";
import { useState } from "react";

export default function Posts(props: any) {
  const [posts, setPosts] = useState(props.posts);

  function updatePosts(e: any) {
    console.log("updating posts");
    console.log(e.target.value);
    const filteredPosts = props.posts.filter((post: Post) => {
      return post.title.includes(e.target.value);
    });
    setPosts(filteredPosts);
  }

  return (
    <>
      <div className=" flex justify-center">
        <Searchbar onchange={updatePosts} />
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
    </>
  );
}
