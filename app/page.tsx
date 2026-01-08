import Image from "next/image";
import { ViewTransition } from "react";

export default function MainPage() {
  return (
    <ViewTransition>
      <div className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-between gap-8 px-4 text-xl">
        <div className={"self-start"}>
          Hello. 👋 I am a Software Developer. I enjoy learning and building
          things. I take pleasure in learning about new technologies.
        </div>
        <div className={"self-start"}>
          My current interest is in building applications that are useful and
          intuitive to use.
        </div>
        <Image
          src={"/ProfilePic.png"}
          alt={"Profile Picture"}
          width={300}
          height={300}
          priority={true}
          className={""}
        />
      </div>
    </ViewTransition>
  );
}
