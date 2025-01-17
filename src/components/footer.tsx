import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "./ui/separator";

function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Footer() {
	return (
		<>
			<Separator className="my-4" />
			<footer className="mb-16 flex justify-between items-center">
				{/* <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="/rss"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">rss</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/vercel/next.js"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">github</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://vercel.com/templates/next.js/portfolio-starter-kit"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">view source</p>
					</a>
				</li>
			</ul> */}
				<div className=" text-neutral-600 dark:text-neutral-300">
					Built with{" "}
					<Link
						className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://vercel.com/templates/next.js/portfolio-starter-kit"
					>
						<ArrowIcon />
						<p className="ml-2">Next.js</p>
					</Link>{" "}
					and{" "}
					<Link
						className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
						rel="noopener noreferrer"
						target="_blank"
						href="https://ui.shadcn.com/"
					>
						<ArrowIcon />
						<p className="ml-2">shadcn/ui</p>
					</Link>{" "}
				</div>
				<div>
					<div className="py-1 px-2 m-1 flex gap-2 items-center">
						<Link href={"https://github.com/abdullahjaffer"} target="_blank">
							<GitHubLogoIcon width={24} height={24} />
						</Link>
						<Link
							href={"https://www.linkedin.com/in/abdullahjaffer/"}
							target="_blank"
						>
							<LinkedInLogoIcon width={24} height={24} />
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
