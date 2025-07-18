export const runtime = "edge";

import ProjectCard from "@/components/project-card";
import projectsData from "@/projects.json";

import * as motion from "motion/react-client";
import type { Metadata } from "next";

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
          {Object.entries(projectsData.projects).map(([key, project]) => (
            <ProjectCard
              key={key}
              name={project.name}
              github_link={project.github_link}
              project_link={project.project_link}
              badges={project.badges}
              description={project.description}
              bullet_points={project.bullet_points}
            />
          ))}
        </main>
      </motion.div>
    </div>
  );
}
