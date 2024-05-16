import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const backend_url = process.env.BACKEND_URL;

const regex = {
  title: /^#\s+.+/,
  heading: /^#+\s+.+/,
  custom: /\$\$\s*\w+/,
  ol: /\d+\.\s+.*/,
  ul: /\*\s+.*/,
  task: /\*\s+\[.]\s+.*/,
  blockQuote: /\>.*/,
  table: /\|.*/,
  image: /\!\[.+\]\(.+\).*/,
  url: /\[.+\]\(.+\).*/,
  codeBlock: /\`{3}\w+.*/,
};

const isTitle = (str: string) => regex.title.test(str);
const isHeading = (str: string) => regex.heading.test(str);
const isCustom = (str: string) => regex.custom.test(str);
const isOl = (str: string) => regex.ol.test(str);
const isUl = (str: string) => regex.ul.test(str);
const isTask = (str: string) => regex.task.test(str);
const isBlockQuote = (str: string) => regex.blockQuote.test(str);
const isImage = (str: string) => regex.image.test(str);
const isUrl = (str: string) => regex.url.test(str);
const isCodeBlock = (str: string) => regex.codeBlock.test(str);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMdDescription(md: string) {
  if (!md) return "";
  let tokens = md.split("\n");
  for (let i = 0; i < tokens.length; i++) {
    if (
      isHeading(tokens[i]) ||
      isCustom(tokens[i]) ||
      isOl(tokens[i]) ||
      isUl(tokens[i]) ||
      isTask(tokens[i]) ||
      isBlockQuote(tokens[i]) ||
      isImage(tokens[i]) ||
      isUrl(tokens[i]) ||
      isCodeBlock(tokens[i])
    )
      continue;

    return tokens[i];
  }
  return "";
}

export async function getAllPosts() {
  const res = await fetch(`${backend_url}/posts`);
  const posts = await res.json();
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
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const user = await res.json();
  if (user.message === "User not authenticated") return null;
  return user.user;
}
