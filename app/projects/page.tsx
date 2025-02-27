export const runtime = "edge";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";
import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Khoa Dinh – Projects",
  description: "Khoa's Projects.",
};

export default function Page() {
  return (
    <div>
      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <main className="mx-auto w-full max-w-screen-md px-4">
          <Card>
            <CardHeader>
              {" "}
              <div className="flex justify-between">
                <CardTitle>Portfolio</CardTitle>
                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/dotkhoa/portfolio-site-v2"
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    <Github className="caret-amber-300" />
                  </Link>
                </Button>
              </div>
              <CardDescription>
                <Badge className="mr-1">React</Badge>
                <Badge className="mr-1">Next</Badge>
                <Badge className="mr-1">TypeScript</Badge>
                <Badge className="mr-1">TailwindCSS</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                A personal portfolio website designed to showcase my projects,
                skills, and professional work.
              </div>
            </CardContent>
          </Card>
          <Card className="mt-2">
            <CardHeader>
              <CardTitle>GymArc</CardTitle>
              <CardDescription className="mt-4">
                <Badge className="mr-1">React Native</Badge>
                <Badge className="mr-1">TypeScript</Badge>
                <Badge className="mr-1">WatermelonDB</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                A cross-platform mobile app designed for users to track their
                gym workouts, review past sessions, create workout templates and
                plans, and monitor their progress.
              </div>
            </CardContent>
          </Card>
        </main>
      </motion.div>
    </div>
  );
}
