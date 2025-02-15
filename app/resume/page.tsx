export const runtime = "edge";

import * as motion from "motion/react-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khoa Dinh – Resume",
  description: "Khoa's Resume.",
};

export default function Resume() {
  return (
    <div>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <main className="row-start-2 mx-auto flex w-full max-w-screen-md flex-col items-center justify-between gap-8 px-4 text-xl">
          <div>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          </div>
        </main>
      </motion.div>
    </div>
  );
}
