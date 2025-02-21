export const runtime = "edge";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Link from "next/link";

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
        <main className={"mx-auto w-full max-w-screen-md px-4"}>
          <h2 className={"mb-4 text-xl font-semibold"}>Work Experience</h2>
          <div>
            <h3 className={"text-lg"}>
              Frontend Software Developer at{" "}
              <a
                className={
                  "underline decoration-stone-400 underline-offset-2 hover:decoration-stone-950"
                }
                href={"https://staffwisellc.com"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                StaffWiseLLC
              </a>
            </h3>
            <p className={"text-base font-light"}>
              July 2022 – December 2023{" "}
              <span className={"px-0.5 text-stone-400"}>•</span> Remote
            </p>
            <div className={"mt-2"}>
              {" "}
              <ul className={"list-disc pl-4 marker:text-stone-400"}>
                <li>
                  Collaborated with engineers in a fast-paced environment to
                  guarantee continuous integration and deployment.
                </li>
                <li>
                  Optimized application performance by refining webpack
                  configurations, leading to a reduced bundle size.
                </li>
                <li>
                  Conceptualized and designed user interfaces in Figma,
                  subsequently translating those concepts into live designs.
                </li>
                <li>
                  Implemented user interfaces utilizing the React framework and
                  its associated tools.
                </li>
                <li>
                  Oversaw and maintain both the primary landing site and the
                  core application, ensuring seamless user experiences.
                </li>
                <li>
                  Configured and managed resources within Azure to enhance
                  application infrastructure.
                </li>
              </ul>
            </div>
          </div>
          <div className={"mt-8"}>
            <h3 className={"text-lg"}>
              Research Assistant at{" "}
              <a
                className={
                  "underline decoration-stone-400 underline-offset-2 hover:decoration-stone-950"
                }
                href={"https://www.wichita.edu/industry_and_defense/NIAR/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                NIAR
              </a>
            </h3>
            <p className={"text-base font-light"}>
              February 2021 – November 2021{" "}
              <span className={"px-0.5 text-stone-400"}>•</span> Wichita, KS
            </p>
            <ul className={"list-disc pl-4 marker:text-stone-400"}>
              <li>
                Researched additive manufacturing, focusing on the cold spray
                process.
              </li>
              <li>
                Managed and enhanced FANUC robot operations by introducing new
                features such as varied spray patterns.
              </li>
              <li>
                Developed robotic software using TP Programming and leveraged
                RoboGuide for simulation and debugging purposes.
              </li>
            </ul>
          </div>
          <div>
            <h2 className={"mt-10 mb-4 text-xl font-semibold"}>Education</h2>
            <div className={"flex justify-between"}>
              <p>Wichita State Univeristy</p>
              <p className={"text-stone-500 dark:text-stone-300"}>
                2019 – 2023
              </p>
            </div>
            <p
              className={
                "byline text-sm text-stone-600 italic dark:text-stone-300"
              }
            >
              B.S. in Computer Science
            </p>
          </div>
          <div className={"mt-10 flex justify-center"}>
            <Button asChild>
              <Link
                href={"Khoa_Dinh_Resume.pdf"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                Resume
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </main>
      </motion.div>
    </div>
  );
}
