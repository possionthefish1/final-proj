// import './Navbar.css';

function Navbar() {
	return (
		<div className='container mx-auto'>
			<nav className='flex justify-between'>
				<div className='flex'>Logo</div>
				<div className='flex'>
					<ul>
						<li>
							<a
								href='#'
								className='font-bold text-7xl'
							>
								Hello
							</a>
						</li>
						<li>
							<a href='#'>World</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
