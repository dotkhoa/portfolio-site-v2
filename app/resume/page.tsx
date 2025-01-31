export const runtime = "edge";

import * as motion from "motion/react-client"
import NavBar from "../navbar"

export default function Resume() {
    return (
        <div>
            <NavBar/>
            <motion.div
                className="box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <main className="flex justify-between items-center w-full max-w-screen-md px-4 mx-auto flex-col gap-8 row-start-2 text-xl">
                    <div>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</div>
                </main>
            </motion.div>
        </div>
    );
}
