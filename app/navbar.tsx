'use client'

import { useTheme } from 'next-themes'
import {usePathname, useRouter} from 'next/navigation'

export default function NavBar() {
    const router = useRouter();
    const currentRoute = usePathname();
    const {theme, setTheme} = useTheme()

    return (
        <div className={"flex justify-between items-center w-full max-w-screen-md px-4 mb-10 mx-auto text-2xl"}>
            <div className={"flex"}>
                <div className={"cursor-pointer font-bold pr-1"} onClick={() => router.push("/")}>{`Khoa Dinh `}</div>
                <div className={"font-light"}>{`— ${currentRoute}`}</div>
            </div>
            <div className={"font-light"}>
                <button className={"pr-2 cursor-pointer"} onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>toggle</button>
                <button className={"pr-2 cursor-pointer text-stone-400 hover:text-stone-950 dark:hover:text-white"} onClick={() => router.push("/projects")}>{"projects"}</button>
                <button className={"cursor-pointer text-stone-400 hover:text-stone-950 dark:hover:text-white"} onClick={() => router.push("/resume")}>{"resume"}</button>
            </div>
        </div>
    );
}
