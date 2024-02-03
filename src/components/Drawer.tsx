import { useState } from "react";

interface DrawerProps {
  children: React.ReactNode;
  name: string;
}

export default function Drawer({ children, name }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    padding: "0.5rem",
    color: "#ffffff",
    backgroundColor: "#000000",
    cursor: "pointer",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    borderBottomLeftRadius: !isOpen ? "0.5rem" : "",
    borderBottomRightRadius: !isOpen ? "0.5rem" : "",
  };

  return (
    <details open={isOpen} onToggle={() => setIsOpen(!isOpen)}>
      <summary
        style={styles}
        
      >
        {name}
      </summary>
      {children}
    </details>
  );
}
