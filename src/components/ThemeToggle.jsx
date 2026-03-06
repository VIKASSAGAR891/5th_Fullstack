import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "react-bootstrap";

function ThemeToggle() {
  const { toggleTheme } = useContext(AppContext);

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      Toggle Theme
    </Button>
  );
}

export default ThemeToggle;