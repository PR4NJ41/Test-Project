import Link from "next/link";

const Navbar = () => {
	return (
		<ul className="navbar">
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/register">Register</Link>
			</li>
			<li>
				<Link href="/login">Login</Link>
			</li>
		</ul>
	);
};

export default Navbar;
