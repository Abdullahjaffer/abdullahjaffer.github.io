import Education from "@/components/resume/education";
import Experience from "@/components/resume/experience";
import Intro from "@/components/resume/intro";
import TechStacks from "@/components/resume/techStacks";
import { Separator } from "@/components/ui/separator";

import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Intro />
			<Separator className="my-4" />
			<Alert>
				<RocketIcon className="h-4 w-4" />
				<AlertTitle>Looking for projects?</AlertTitle>
				<AlertDescription>
					Checkout my awesome projects{" "}
					<Link
						href={"/projects"}
						className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
					>
						here
					</Link>
					.
				</AlertDescription>
			</Alert>
			<Separator className="my-4" />
			<TechStacks />
			<Separator className="my-4" />

			<Experience />
			<br />
			<Education />
		</>
	);
}
