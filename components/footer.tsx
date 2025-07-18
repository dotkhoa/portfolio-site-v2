"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={
        "mx-auto mt-10 flex w-full max-w-screen-md items-center justify-between px-4"
      }
    >
      <Button variant={"outline"} size={"icon"} onClick={toggleTheme}>
        {resolvedTheme === "dark" ? <Moon /> : <Sun />}
      </Button>
      <div className={"grid justify-items-end"}>
        <div className={"flex"}>
          <div className={"pr-1"}>Email –</div>
          <Link
            className={
              "text-stone-400 underline underline-offset-2 hover:text-stone-950 dark:hover:text-white"
            }
            href={"mailto:khoadinh2k@gmail.com"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            khoadinh2k@gmail.com
          </Link>
        </div>
        <div className={"flex"}>
          <div className={"pr-1"}>GitHub –</div>
          <Link
            className={
              "text-stone-400 underline underline-offset-2 hover:text-stone-950 dark:hover:text-white"
            }
            href={"https://github.com/dotkhoa"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            @dotkhoa
          </Link>
        </div>
      </div>
    </div>
  );
}
