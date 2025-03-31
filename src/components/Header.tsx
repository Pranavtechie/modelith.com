export default function Header() {
	return (
		<header className="h-12 p-2 flex gap-2 bg-gray-700 text-gray-100 justify-between">
			<nav className="flex flex-row items-center gap-4">
				<div>
					<a
						className="px-2 font-bold hover:underline"
						href="https://github.com/Pranavtechie/modelith-cli"
						target="_blank"
					>
						GitHub
					</a>

					<a
						className="px-2 font-bold hover:underline"
						href="https://pypi.org/project/modelith/"
						target="_blank"
					>
						PyPi
					</a>
				</div>
			</nav>
		</header>
	);
}
