"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { revalidatePath } from "next/cache";
import { User } from "next-auth";

const backend_url = process.env.BACKEND_URL;

export async function protectPage() {
  const session = await auth();
  if (session === null) {
    redirect("/api/auth/signin");
  }
}

export async function getAllPosts() {
  const res = await fetch(`${backend_url}/posts`);
  const posts = await res.json();
  console.log(posts);
  return posts;
}

export async function getPost(id: number) {
  const res = await fetch(`${backend_url}/get-post?id=${id}`);
  const post = await res.json();
  return post;
}

export async function getUser(email: String, password: String) {
  const res = await fetch(`${backend_url}/user-authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const user = await res.json();
  if (user.message === "User not authenticated") return null;

  return <User>{
    name: user.user.name,
    email: user.user.email,
    id: user.user.userId,
  };
}

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  console.log(email, password, name);
  console.log(backend_url);
  const response = await fetch(`${backend_url}/create-user`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: password, name: name }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    redirect("/api/auth/signin");
  } else {
    const error = await response.json();
    console.error(error);
  }
}

export async function createPost(formData: FormData) {
  const session = await auth();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  console.log(session);
  const authorId = session?.user?.id;
  if (authorId === undefined) {
    console.error("User not authenticated");
    redirect("/api/auth/signin");
  }
  const response = await fetch(`${backend_url}/create-post`, {
    method: "POST",
    body: JSON.stringify({ title: title, content: content }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    revalidatePath("/blogs");
    redirect("/posts");
  } else {
    const error = await response.json();
    console.error(error);
  }
}
