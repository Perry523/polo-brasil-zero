import * as React from "react";
import type { PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { NewsLetter } from "../components/news-letter";

import LotAboutSection from "../components/sections/lotAboutSection";
import GetOwnLot from "../components/sections/getOwnLot";
import AboutUs from "../components/sections/aboutUs";
import OurPrinciples from "../components/sections/ourPrinciples";
import NetZero from "../components/sections/netZero";
import Partiners from "../components/sections/partiners";
import ScheduleEsg from "../components/sections/scheduleEsg";
import Contact from "../components/sections/contact";
import Header from "../components/header";
import VideoModal from "../components/videoModal";

const IndexPage: React.FC<PageProps> = () => {
	const [activedSlide, setActivedSlide] = React.useState(0);
	const [isVideoOpen, setIsVideoOpen] = React.useState(false);
	const [selectedVideoShow, setSelectedVideoShow] = React.useState("");
	const ourGroundRef = React.useRef<HTMLDivElement>(null);
	const aboutUsRef = React.useRef<HTMLDivElement>(null);
	const sustentabilityRef = React.useRef<HTMLDivElement>(null);
	const netzeroRef = React.useRef<HTMLDivElement>(null);
	const partinersRef = React.useRef<HTMLDivElement>(null);
	const esgRef = React.useRef<HTMLDivElement>(null);
	const contactRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const myVideo1 = document.getElementById("myVideo1");
		myVideo1?.play();

		const myVideo2 = document.getElementById("myVideo2");
		myVideo2?.play();

		const myVideo3 = document.getElementById("myVideo3");
		myVideo3?.play();

		const myVideo4 = document.getElementById("myVideo4");
		myVideo4?.play();

		const myVideo5 = document.getElementById("myVideo5");
		myVideo5?.play();
	}, []);

	const handleCloseVideoClick = () => {
		setIsVideoOpen(false);
		setSelectedVideoShow("");
	};

	const handleOpenVideo = (link: string) => {
		setSelectedVideoShow(link);
		setIsVideoOpen(true);
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			setActivedSlide((prevSlide) => (prevSlide + 1) % 5);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Helmet>
				<title>Polo Brasil Zero - Distrito Industrial 100% sustentável.</title>
			</Helmet>
			<Navbar
				ourGroundReference={ourGroundRef}
				aboutUsReference={aboutUsRef}
				sustentabilityReference={sustentabilityRef}
				netzeroReference={netzeroRef}
				partinersReference={partinersRef}
				esgReference={esgRef}
				contactReference={contactRef}
			/>
			{isVideoOpen && (
				// video modal
				<VideoModal
					handleCloseVideo={handleCloseVideoClick}
					selectedVideoShow={selectedVideoShow}
				/>
			)}
			{/* header with carousel */}
			<Header openVideo={handleOpenVideo} />
			{/* section about lotes */}
			<LotAboutSection
				aboutUsRef={aboutUsRef}
				ourGroundRef={ourGroundRef}
				openVideo={handleOpenVideo}
			/>
			{/* section to get own lote */}
			<GetOwnLot />
			{/* section about */}
			<AboutUs
				aboutUsRef={aboutUsRef}
				contactRef={contactRef}
				sustentabilityRef={sustentabilityRef}
				openVideo={handleOpenVideo}
			/>
			{/* section our principles */}
			<OurPrinciples />
			{/* section NetZero */}
			<NetZero netzeroRef={netzeroRef} />
			{/* partiners */}
			<Partiners partinersRef={partinersRef} />
			{/* schedule ESG */}
			<ScheduleEsg esgRef={esgRef} />
			{/* contact */}
			<Contact contactRef={contactRef} />
			{/* wpp btn fixed */}
			<a
				href="https://wa.me/5511971657007?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+projeto+Polo+Brasil+Zero."
				className="fixed bottom-10 right-10 w-14 h-14 z-50"
			>
				<StaticImage
					alt="Ícone de enviar mensagem pelo whatsapp"
					src="../images/whatsapp-icon.png"
					className=""
				/>
			</a>
			<NewsLetter />
			<Footer
				ourGroundReference={ourGroundRef}
				aboutUsReference={aboutUsRef}
				sustentabilityReference={sustentabilityRef}
				netzeroReference={netzeroRef}
				partinersReference={partinersRef}
				esgReference={esgRef}
				contactReference={contactRef}
			/>
		</>
	);
};

export default IndexPage;
