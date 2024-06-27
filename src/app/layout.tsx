import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Next.js Portfolio Starter",
		template: "%s | Next.js Portfolio Starter",
	},
	description: "This is my portfolio.",
	openGraph: {
		title: "My Portfolio",
		description: "This is my portfolio.",
		url: baseUrl,
		siteName: "My Portfolio",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={""}>
			<body className="text-slate-800 bg-white dark:text-slate-100 dark:bg-slate-950">
				<main className="antialiased max-w-2xl mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
