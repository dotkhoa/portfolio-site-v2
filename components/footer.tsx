"use client";

import Link from "next/link";
import { ThemeToggleButton } from "./theme-toggle-button";

export default function Footer() {
  return (
    <div
      className={
        "mx-auto mt-10 flex w-full max-w-screen-md items-center justify-between px-4"
      }
    >
      {<ThemeToggleButton />}
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
