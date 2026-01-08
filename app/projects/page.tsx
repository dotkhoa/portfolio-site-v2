import ProjectCard from "@/components/project-card";
import projectsData from "@/projects.json";

import type { Metadata } from "next";
import { ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Khoa Dinh – Projects",
  description: "Khoa's Projects.",
};

export default function Page() {
  return (
    <ViewTransition>
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
    </ViewTransition>
  );
}
