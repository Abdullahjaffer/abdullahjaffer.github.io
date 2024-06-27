import TechStackContent from "@/content/tech-stack";

const TechStacks = () => {
	return (
		<section>
			<h3 className="text-2xl underline mb-2">Tech Stacks</h3>
			<ul>
				{Object.keys(TechStackContent).map((name) => (
					<li key={name}>
						<span className="font-medium capitalize">{name}: </span>
						{(TechStackContent as any)[name].join(", ").toLowerCase()}
					</li>
				))}
			</ul>
		</section>
	);
};

export default TechStacks;