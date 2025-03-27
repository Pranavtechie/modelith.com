import { createFileRoute } from "@tanstack/react-router";
import banner from "/modelith-wordart.png";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center">
			<header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
				<img
					src={banner}
					className="h-[40vmin] pointer-events-none"
					alt="logo"
				/>

				<p className="mt-10">
					<p className="text-3xl font-semibold">
						Evaluate your Students' Codes
					</p>
					<div className="font-mono text-xl mt-5">
						<p>Find Similarities</p>
						<p>Identify Sources</p>
						<p>Grade Assignments</p>
					</div>
				</p>
			</header>
		</div>
	);
}
