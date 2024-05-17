import Navbar from "@/components/navbar";
import Card from "@/components/postCard";
import Image from "next/image";
import { get } from "http";
import { getAllPosts } from "@/lib/actions";
import { Key } from "react";
import { Post } from "@/lib/types";

export default async function Home() {
  const posts = (await getAllPosts()).posts;
  console.log(posts);

  return <main className="">home page still under development</main>;
}
