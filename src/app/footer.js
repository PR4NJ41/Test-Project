import Link from "next/link";

const Footer = () => {
	return (
		<ul className="footer">
			<li>
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/">About Us</Link>
			</li>
		</ul>
	);
};

export default Footer;
