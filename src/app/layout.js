// ←←← PUT THIS AT THE VERY TOP, BEFORE ANY OTHER IMPORTS
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);   // Cloudflare + Google DNS

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata = {
	title: "The Dragon News",
	description: "Bast News Portal in Bangladesh",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className={`${poppins.className} min-h-full flex flex-col bg-[#F3F3F3]`}>
				<main>{children}</main>
			</body>
		</html >
	);
}
