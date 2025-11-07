import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeToggleButton() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!isMounted) {
    return (
      <Button variant={"outline"} size={"icon"} disabled>
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button variant={"outline"} size={"icon"} onClick={toggleTheme}>
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
