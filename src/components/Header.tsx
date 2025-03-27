export default function Header() {
	return (
		<header className="h-12 p-2 flex gap-2 bg-gray-700 text-gray-100 justify-between">
			<nav className="flex flex-row items-center">
				<div className="px-2 font-bold hover:underline">
					<a
						href="https://github.com/Pranavtechie/modelith.com"
						target="_blank"
					>
						GitHub
					</a>
				</div>
			</nav>
		</header>
	);
}
