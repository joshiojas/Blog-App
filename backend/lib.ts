import type { Post, User } from "./types";
import { createHash } from "crypto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (user: User) => {
  return await prisma.user.create({
    data: user,
  });
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return { message: "User deleted successfully" };
  } catch (error) {
    console.log(error);
    return { error: "User couldn't be deleted" };
  }
};

export const createPost = async (post: Post) => {
  return await prisma.post.create({
    data: post,
  });
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
};

export const getPostsByAuthorId = async (authorId: number) => {
  return await prisma.post.findMany({
    where: {
      authorId: Number(authorId),
    },
  });
};

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const hashPassword = async (password: string) => {
  return createHash("sha256").update(password).digest("hex");
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  const d = await hashPassword(password);
  console.log(d);
  console.log(hashedPassword);
  if (d === hashedPassword) {
    return true;
  }
  return false;
};

export const authenticateUser = async (user: User) => {
  const userFromDb = await getUserByEmail(user.email);
  if (!userFromDb) {
    return false;
  }
  userFromDb.password = userFromDb.password || "";
  if (await verifyPassword(user.password, userFromDb.password)) {
    return userFromDb;
  }
  return false;
};
