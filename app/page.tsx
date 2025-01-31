export const runtime = "edge";

import * as motion from "motion/react-client"
import NavBar from "./navbar"

export default function MainPage() {
   return (
      <div>
         <NavBar/>
         <motion.div
            className="box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
         >
            <div className="flex justify-between items-center w-full max-w-screen-md px-4 mx-auto flex-col gap-8 row-start-2 text-xl">
                <div>
                    {`Hello. 👋 I am a Software Engineer.
                My interest in software development started back in 2019 when I was a freshman in college.
                I enjoy creating things that live on the internet. I take pleasure in learning about new technologies and building things.`}
                </div>
                <div>
                    {` I\'ve had the amazing opportunity to work at a start-up, StaffWise, where I was able to work on a web application that allows hospitals 
                    to manage their employees and schedules.`}
                </div>
            </div>
        </motion.div>
     </div>
  );
}
