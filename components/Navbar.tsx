import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='space-x-4'>
			<Link href='/create-a-plan'>Create A Plan</Link>
			<Link href='/products'>Products</Link>
			<Link href='/checkout'>Checkout</Link>
		</nav>
	);
}
