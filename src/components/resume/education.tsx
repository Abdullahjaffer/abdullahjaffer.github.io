import EducationContent from "@/content/education";

const Education = () => {
	return (
		<section>
			<h3 className="text-2xl underline mb-2">Education</h3>
			{EducationContent.map((education) => (
				<>
					<div className="text-left">
						<p className="text-xs text-slate-700 dark:text-slate-400 capitalize">
							{education.startDate.toLowerCase()} -{" "}
							{education.endDate.toLowerCase()}
						</p>
						<h4 className="font-medium">{education.title}</h4>
					</div>
					<span className="text-sm text-slate-700 dark:text-slate-400">
						{education.institute}
					</span>
				</>
			))}
		</section>
	);
};

export default Education;
