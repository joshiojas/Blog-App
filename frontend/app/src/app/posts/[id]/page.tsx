import { Post } from "@/lib/types";
import { getPost } from "@/lib/actions";
import { remark } from "remark";
import html from "remark-html";

export default async function Page(id: any) {
  const postid = id.params.id as number;
  const post: Post = (await getPost(postid)).post;
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="m-24 h-full">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
