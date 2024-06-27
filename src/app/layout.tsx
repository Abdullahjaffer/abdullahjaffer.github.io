import Footer from "@/components/footer";
import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/themeProvider";
import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Abdullah Jaffer's Resume",
		template: "%s | Abdullah Jaffer's Resume",
	},
	description: "Senior full-stack Engineer with 5 years of experience.",
	openGraph: {
		title: "Abdullah Jaffer's Resume",
		description: "Senior full-stack Engineer with 5 years of experience.",
		url: baseUrl,
		siteName: "Abdullah Jaffer's Resume",
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
		<html lang="en" suppressHydrationWarning>
			<body className="text-slate-800 bg-white dark:text-slate-100 dark:bg-slate-950">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="antialiased max-w-2xl mx-auto flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
						<Navbar />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
