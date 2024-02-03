import { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { DEFAULT } from "../utils/defaultPreview";

export default function Display() {
  const [text, setText] = useState(DEFAULT);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Editor markdown={text} setMarkdown={setText} />
      <Preview preview={text} />
    </div>
  );
}
