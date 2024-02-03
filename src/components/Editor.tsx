import Drawer from "./Drawer";

interface EditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

export default function Editor({ markdown, setMarkdown }: EditorProps) {

  return (
    <Drawer name="Editor">
      <textarea
        style={{
          margin: 0,
          border: "0px",
          padding: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
          outlineStyle: "none",
          width: "100%",
          resize: "vertical",
          color: "#000000",
          backgroundColor: "#ffffff",
        }}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        id="editor"
      />
    </Drawer>
  );
}
