"use client";
import React, { useState } from "react";
import RichTextEditor from "@/components/textEditor";
import { createPost } from "@/lib/actions";
import styles from "./actualPage.module.css";
import { Button } from "@mui/material";

const Home: React.FC = () => {
  const [markdown, setMarkdown] = useState("");

  const handleEditorChange = (md: string) => {
    setMarkdown(md);
  };

  return (
    <div className=" place-content-center justify-end">
      <form action={createPost}>
        <input
          type="text"
          name="title"
          placeholder="title"
          className={styles.title}
        />
        <RichTextEditor onChange={handleEditorChange} />
        <input type="hidden" name="content" value={markdown} />
        <Button type="submit" className="m-8 float-left">
          Create Post
        </Button>
        <Button className="m-8 float-right" href="/raweditor">
          Paste raw markdown
        </Button>
      </form>
    </div>
  );
};

export default Home;
