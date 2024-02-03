import Drawer from "./Drawer";
import Markdown from "react-markdown";

interface PreviewProps {
  preview: string;
}

export default function Preview({ preview }: PreviewProps) {
  const styles = {
    padding: " 1rem",
    borderBottomRightRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
    width: "100%",
    color: "#000000",
    backgroundColor: "#ffffff",
  };

  return (
    <Drawer name="Preview">
      <div style={styles} id="preview">
        <Markdown children={preview} />
      </div>
    </Drawer>
  );
}
