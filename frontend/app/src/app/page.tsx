import { getAllPosts } from "@/lib/actions";
import Image from "next/image";
export default async function Home() {
  const posts = (await getAllPosts()).posts;
  console.log(posts);
  const randomImage = "https://source.unsplash.com/random";
  return (
    <main className="m-48 h-full">
      <div className="flex justify-center">
        <h1 className="text-4xl font-extralight">Brewed Words</h1>
      </div>
      <div className="grid grid-cols-2 gap-16 m-12 justify-items-center w-screen md:grid-cols-2 lg:grid-cols-3 border-gray-50">
        <p className="text-xl self-center">
          Welcome to Brewed Words! This is a blog site where you can read and
          write about anything you want. Feel free to explore the site and read
          some of the blogs that have been posted. If you would like to write a
          blog, you can sign in and create a new blog post. Enjoy!
        </p>
        <Image
          src={randomImage}
          alt="random Image"
          width={1200}
          height={1200}
          className="justify-self-end rounded-xl float-right"
        />
      </div>
    </main>
  );
}
