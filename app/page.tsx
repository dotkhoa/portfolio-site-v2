export const runtime = "edge";

import Image from "next/image";
import * as motion from "motion/react-client"

export default function MainPage() {
   return (
      <div>
         <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
         >
            <div className="flex justify-between items-center w-full max-w-screen-md px-4 mx-auto flex-col gap-8 row-start-2 text-xl">
                <div className={"self-start"}>
                    {`Hello. 👋 I am a Software Developer.
                I enjoy learning and building things. I take pleasure in learning about new technologies.`}
                </div>
                <div className={"self-start"}>
                    {`My current interest is in building applications that are useful and intuitive to use.`}
                </div>
                <Image
                    src={"/ProfilePic.png"}
                    alt={"Profile Picture"}
                    width={300}
                    height={300}
                    className={""}
                />
            </div>
        </motion.div>
     </div>
  );
}
