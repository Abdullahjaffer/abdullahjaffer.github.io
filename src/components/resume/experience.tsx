import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import ExperienceContent from "@/content/experience";

const Experience = () => {
	return (
		<section>
			<h3 className="text-2xl underline">Experience</h3>
			<Accordion type="single" collapsible className="w-full">
				{ExperienceContent.map((experience) => (
					<AccordionItem
						value={experience.companyName}
						key={experience.companyName}
					>
						<AccordionTrigger>
							<div className="text-left">
								<p className="text-xs text-slate-700 dark:text-slate-400 capitalize">
									{experience.startDate.toLowerCase()} -{" "}
									{experience.endDate.toLowerCase()}
								</p>
								<h4 className="font-medium">
									{experience.position},{" "}
									<span className="text-sm text-slate-700 dark:text-slate-400">
										{experience.companyName}
									</span>
								</h4>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul className="text-sm">
								{experience.work.map((work) => (
									<li key={work}>{work}</li>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default Experience;
