import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ProjectContent from "@/content/projects";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	return (
		<>
			{ProjectContent.map((project) => (
				<Card key={project.projectName} className="mb-4">
					<CardContent>
						<div className="flex pt-4 gap-4">
							<div>
								<div
									className="relative h-full"
									style={{
										width: 200,
										minHeight: 150,
									}}
								>
									<Image
										src={`/images/${project.cover}`}
										alt="Image"
										layout="fill"
										objectFit="contain"
									/>
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold">
									{project.projectName}{" "}
									<Link href={project.link} target="_blank">
										<ExternalLinkIcon className="inline-block text-right" />
									</Link>
								</h3>
								<p className="text-sm">{project.description}</p>
								<div className="flex flex-wrap gap-1 mt-2">
									{project.technologies.map((t) => (
										<Badge variant="outline" key={t}>
											{t}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
}
