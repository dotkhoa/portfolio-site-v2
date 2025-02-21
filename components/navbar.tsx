"use client";

import { usePathname, useRouter } from "next/navigation";
import HamburgerMenu from "./ui/hamburger-menu";

export default function NavBar() {
  const router = useRouter();
  const currentRoute = usePathname();

  return (
    <div
      className={
        "mx-auto mb-10 flex w-full max-w-screen-md items-center justify-between px-4 text-2xl"
      }
    >
      <div className={"flex"}>
        <p
          className={"cursor-pointer pr-1 font-bold"}
          onClick={() => router.push("/")}
        >
          Khoa Dinh{" "}
        </p>
        <div className={"font-light"}>{`— ${currentRoute}`}</div>
      </div>
      <div className={"font-light"}>
        <div className={"hidden sm:block"}>
          <button
            className={`${currentRoute === "/projects" ? "" : "text-stone-400"} cursor-pointer pr-2 hover:text-stone-950 dark:hover:text-white`}
            onClick={() => router.push("/projects")}
          >
            projects
          </button>
          <button
            className={`${currentRoute === "/resume" ? "" : "text-stone-400"} cursor-pointer hover:text-stone-950 dark:hover:text-white`}
            onClick={() => router.push("/resume")}
          >
            resume
          </button>
        </div>
        <div className={"block sm:hidden"}>
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}
