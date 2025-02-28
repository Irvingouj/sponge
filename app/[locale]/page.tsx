// import About from "@/components/About";
import AboutServer from "@/components/AboutServer";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import { isMobileDevice } from "@/lib/utils";
// import Contact from "@/components/Contact"

export const metadata = {
	title: "Yuqi | Personal Portfolio",
	description:
		"Yuqi is a developer who enjoys exploring full stack development and AI innovation.",
};

export default async function Home({ params }: { params: { locale: string } }) {
	const isMobile = await isMobileDevice();

	return (
		<main className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
			<Intro />
			<SectionDivider />
			<AboutServer locale={params.locale} />
			<Projects />
			<Skills />
			<Experience isMobile={isMobile} />
			{/* <Contact /> */}
		</main>
	);
}
