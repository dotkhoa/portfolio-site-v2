'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react"
import {Button} from "@/components/ui/button";

export default function Footer() {
    const {setTheme, resolvedTheme} = useTheme()

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return (
        <div className={"flex justify-between items-center w-full max-w-screen-md px-4 mx-auto text-2xl"}>
            <div className={"font-light"}>
                <Button variant={"outline"} size={"icon"} onClick={toggleTheme}>
                    {resolvedTheme === "dark" ? <Moon/> : <Sun/>}
                </Button>
            </div>
        </div>
    );
}
