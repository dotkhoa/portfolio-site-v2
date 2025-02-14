'use client'

import {usePathname, useRouter} from 'next/navigation'

export default function NavBar() {
    const router = useRouter();
    const currentRoute = usePathname();

    return (
        <div className={"flex justify-between items-center w-full max-w-screen-md px-4 mb-10 mx-auto text-2xl"}>
            <div className={"flex"}>
                <div className={"cursor-pointer font-bold pr-1"} onClick={() => router.push("/")}>{`Khoa Dinh `}</div>
                <div className={"font-light"}>{`— ${currentRoute}`}</div>
            </div>
            <div className={"font-light"}>
                <button className={`${currentRoute === "/projects" ? "" : "text-stone-400"} pr-2 cursor-pointer hover:text-stone-950 dark:hover:text-white`} onClick={() => router.push("/projects")}>{"projects"}</button>
                <button className={`${currentRoute === "/resume" ? "" : "text-stone-400"} cursor-pointer hover:text-stone-950 dark:hover:text-white`} onClick={() => router.push("/resume")}>{"resume"}</button>
            </div>
        </div>
    );
}
