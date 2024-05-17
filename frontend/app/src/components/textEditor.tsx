"use client";
import React, { useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Showdown from "showdown";
import styles from "./textEditor.module.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const converter = new Showdown.Converter();

interface RichTextEditorProps {
  onChange: (markdown: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange }) => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        ["link", "image"],
        ["clean"],
      ],
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "background",
    "align",
  ];

  const handleChange = useCallback(
    (content: string) => {
      setValue(content);
      const markdown = converter.makeMarkdown(content);
      onChange(markdown);
    },
    [onChange]
  );

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      theme="snow"
      className={styles.editor}
    />
  );
};

export default RichTextEditor;
