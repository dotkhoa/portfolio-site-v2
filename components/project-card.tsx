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
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  github_link: string;
  project_link: string;
  badges: string[];
  description: string;
  bullet_points: string[];
}

export default function ProjectCard({
  name,
  github_link,
  project_link,
  badges,
  description,
  bullet_points,
}: ProjectCardProps) {
  return (
    <Card className="mb-2">
      <CardHeader>
        {github_link.length > 1 ? (
          <div className="flex justify-between">
            <CardTitle>
              {project_link.length > 1 ? (
                <Link
                  className="flex items-center underline"
                  href={project_link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  {name}
                  <ExternalLink className="ml-1" size={18} />
                </Link>
              ) : (
                <>{name}</>
              )}
            </CardTitle>
            <Button asChild variant="outline">
              <Link
                href={github_link}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <Github className="caret-amber-300" />
              </Link>
            </Button>
          </div>
        ) : project_link.length > 1 ? (
          <CardTitle className="mb-4">
            {
              <Link
                href={project_link}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {name}
              </Link>
            }
          </CardTitle>
        ) : (
          <CardTitle className="mb-4">{name}</CardTitle>
        )}
        <CardDescription>
          {badges.map((badge) => (
            <Badge key={badge} className="mr-1 mb-1">
              {badge}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>{description}</div>
        {bullet_points.length > 1 && (
          <ul className="mt-2 list-disc">
            {bullet_points.map((point) => (
              <li className="ml-4 marker:text-stone-400" key={point}>
                {point}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
