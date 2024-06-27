import IntroContent from "@/content/intro";

const Intro = () => {
	return (
		<section>
			<h3 className="text-4xl mb-4">hi 👋, I am {IntroContent.name}</h3>
			<p>{IntroContent.description}</p>
		</section>
	);
};

export default Intro;
