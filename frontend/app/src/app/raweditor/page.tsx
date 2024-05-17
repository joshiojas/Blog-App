"use client";

import { Button } from "@mui/material";
import styles from "@/app/editor/actualPage.module.css";
import { createPost } from "@/lib/actions";
export default function Page() {
  return (
    <>
      <div className="flext m-32 justify-center ">
        <div className=" place-content-center justify-end">
          <form action={createPost}>
            <input
              type="text"
              name="title"
              placeholder="title"
              className={styles.title}
            />
            <textarea name="content" className={styles.raweditor} />

            <Button type="submit" className="m-8 float-left">
              Create with raw markdown
            </Button>
            <Button className="m-8 float-right" href="/editor">
              Create with rich text editor
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
