import Fastify, {
  type FastifyInstance,
  type RouteShorthandOptions,
} from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";
import type { Post, User } from "../types";
import {
  authenticateUser,
  createPost,
  createUser,
  deleteUser,
  getAllPosts,
  getAllUsers,
  getPostById,
  getPostsByAuthorId,
  hashPassword,
} from "../lib";

export default async function (server: FastifyInstance, opts: any) {
  server.get("/ping", async (request, reply) => {
    return { message: "pong" };
  });

  server.post("/create-post", async (req, res) => {
    const post: Post = req.body as Post;
    try {
      if (!post.authorId) {
        return { error: "Author id is required" };
      } else if (!post.title) {
        return { error: "Title is required" };
      } else if (!post.content) {
        return { error: "Content is required" };
      }

      const p = await createPost(post);
      return { message: "Post created", postId: p.id };
    } catch (e) {
      return { message: "Post could not be created", error: e };
    }
  });

  server.post("/get-post", async (req, res) => {
    const postId = (req.body as any).postId as number;
    const post = await getPostById(postId);
    if (post) {
      return { message: "Post found", post: post };
    } else {
      return { message: "Post not found" };
    }
  });

  server.get("/get-posts-by-author", async (req, res) => {
    const authorId = (req.query as any).authorId as number;
    console.log(typeof authorId);
    const posts = await getPostsByAuthorId(authorId);
    if (posts) {
      return { message: "Posts found", posts: posts };
    } else {
      return { message: "Posts not found" };
    }
  });

  server.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    return { message: "Posts found", posts: posts };
  });

  server.post("/create-user", async (req, res) => {
    const user: User = req.body as User;
    console.log(typeof user);
    console.log(user);

    user.password = await hashPassword(user.password);
    try {
      let usercreate = await createUser(user);
      return {
        message: "User created successfully",
        userId: usercreate.id,
      };
    } catch (error) {
      console.log(error);
      return { error: "error" };
    }
  });

  server.post("/user-authenticate", async (req, res) => {
    const user: User = req.body as User;
    console.log(typeof user);
    const a = await authenticateUser(user);
    if (a) {
      return { message: "User authenticated", userId: a.id };
    } else {
      return { message: "User not authenticated" };
    }
  });

  server.post("/delete-user", async (req, res) => {
    try {
      const userId = (req.body as any).userId as number;
      const d = await deleteUser(userId);
      return { message: "User deleted", d: d };
    } catch (e) {
      return { error: "User id could not be found" };
    }
  });

  //   const start = async () => {
  //     try {
  //       const PORT = (process.env.PORT as unknown as number) || 3000;
  //       await server.listen({ port: PORT });

  //       const address = server.server.address();
  //       const port = typeof address === "string" ? address : address?.port;
  //       console.log(`Server listening at ${port}`);
  //     } catch (err) {
  //       server.log.error(err);
  //       process.exit(1);
  //     }
  //   };

  //   // start();
}
