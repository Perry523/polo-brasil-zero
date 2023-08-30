import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { navigate } from "gatsby";

type NavbarProps = {
	ourGroundReference?: React.RefObject<HTMLDivElement>;
	aboutUsReference?: React.RefObject<HTMLDivElement>;
	sustentabilityReference?: React.RefObject<HTMLDivElement>;
	netzeroReference?: React.RefObject<HTMLDivElement>;
	partinersReference?: React.RefObject<HTMLDivElement>;
	esgReference?: React.RefObject<HTMLDivElement>;
	contactReference?: React.RefObject<HTMLDivElement>;
};

export const Navbar: React.FC<NavbarProps> = ({
	ourGroundReference,
	aboutUsReference,
	sustentabilityReference,
	netzeroReference,
	partinersReference,
	esgReference,
	contactReference,
}) => {
	const [scrollDown, setScrollDown] = React.useState(false);
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			const isScrollDown = window.scrollY > 0;
			setScrollDown(isScrollDown);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleGoToAnchor = (ref?: React.RefObject<HTMLDivElement>) => {
		if (!ref) {
			navigate("/");
			return;
		}
		const section = ref.current;
		if (section) {
			const y = section.getBoundingClientRect().top + window.scrollY - 121;

			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	const handleGoToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const arrayForNav = [
		{
			name: "Lotes",
			reference: ourGroundReference,
		},
		{
			name: "Sobre nós",
			reference: aboutUsReference,
		},
		{
			name: "Sustentabilidade",
			reference: sustentabilityReference,
		},
		{
			name: "Netzero",
			reference: netzeroReference,
		}
		,
		{
			name: "Parceiros",
			reference: partinersReference,
		},
		{
			name: "ESG",
			reference: esgReference,
		},
		{
			name: "Contato",
			reference: contactReference,
		},
	]
	return (
		<nav
			className={`z-[99] py-6 transition-all duration-200 fixed top-0 w-full ${
				scrollDown && "glass-effect"
			}`}
		>
			<div className="wrapper-full flex justify-between items-center">
				<a href="#" className="shrink-0 w-[250px]">
					<StaticImage
						loading="lazy"
						src="../images/logo-white.svg"
						alt="Logo da empresa Polo Brasil Zero."
					/>
				</a>
				<a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<StaticImage
						alt="Menu hamburger"
						src="../images/menu-hamburger.svg"
						className="2xl:!hidden cursor-pointer"
					/>
				</a>
				{isMenuOpen && (
					<div
						className="bg-black/60 absolute top-0 left-0 w-screen h-screen"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					></div>
				)}
				<ul className={`nav-menu ${isMenuOpen && "nav-menu-open"}`}>
					<li className="absolute left-3 top-3 !mt-0">
						<a href="#" onClick={() => setIsMenuOpen(!isMenuOpen)}>
							<StaticImage
								alt="Fechar menu hamburger"
								src="../images/close.svg"
								className="2xl:!hidden cursor-pointer"
							/>
						</a>
					</li>
					{/* <li>
						<a onClick={(_) => handleGoToTop()}>Homepage</a>
					</li> */}
					{arrayForNav.map((item, index) => (
						<li key={index}>
							<a onClick={(_) => handleGoToAnchor(item.reference)}>
								{item.name}
							</a>
						</li>
					))}
					<li>
						<button type="button" className="bt bt-primary shrink-0">
							<StaticImage
								alt="Ícone de baixar"
								src="../images/send.svg"
								className="bt-icon mr-3"
							/>{" "}
							Entrar em contato
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};
