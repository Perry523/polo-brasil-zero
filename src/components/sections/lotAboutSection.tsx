import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface LotAboutSectionProps {
	ourGroundRef: React.RefObject<HTMLDivElement>;
	aboutUsRef: React.RefObject<HTMLDivElement>;
	openVideo: (link: string) => void;
}

const LotAboutSection = ({
	aboutUsRef,
	ourGroundRef,
	openVideo,
}: LotAboutSectionProps) => {
	const handleOpenVideo = (link: string) => {
		openVideo(link);
	};

	return (
		<section className="py-16 shrink-0 grow bg-leave" ref={ourGroundRef}>
			<div className="flex wrapper-full max-lg:justify-center max-lg:flex-col max-lg:items-center">
				<div className="flex flex-col justify-center max-lg:items-center">
					<h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center text">
						Lotes sustentáveis carbono neutro
					</h2>
					<p className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
						Todos os lotes já estão equipados com tubulações centrais de
						abastecimento e tratamento de água, rede de coleta dos efluentes
						industriais e sanitários interligados direto na ETAE.
					</p>
				</div>
				{/* <div className="flex flex-col items-center ">
				 */}
				<div
					className="lg:w-[450px] lg:h-[340px] shrink-0 relative flex justify-center
						items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col ml-20"
					onClick={(_) =>
						handleOpenVideo("https://www.youtube.com/embed/FuCpCoSmRBg")
					}
				>
					<p className="text-green-800 font-bold">Planta dos Lotes de Venda</p>
					<StaticImage
						className="rounded-3xl !w-full border border-green-500 mt-2"
						alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
						src="../../images/pbz-render-video-banner.webp"
						layout="fullWidth"
					/>
					<StaticImage
						alt="Ícone de play"
						src="../../images/play.svg"
						className="!absolute"
					/>
				</div>
				{/* </div> */}
			</div>
			<div className="wrapper-full">
				<StaticImage
					className="mx-auto block w-fit mt-16 max-lg:!hidden"
					alt="Planta do parque industrial"
					src="../../images/ground.svg"
				/>
				<StaticImage
					className="mx-auto block w-full mt-16 lg:!hidden"
					alt="Planta do parque industrial"
					src="../../images/map-responsive.png"
					layout="fullWidth"
				/>
				<button
					type="button"
					className="bt bt-outline-primary mx-auto mt-9 flex justify-center items-center max-lg:w-full"
					onClick={(_) => {
						aboutUsRef.current?.scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "nearest",
						});
					}}
				>
					<StaticImage
						alt="Ícone de baixar"
						src="../../images/download.svg"
						className="bt-icon"
					/>{" "}
					<span className="ml-3 text-green-700 font-bold text-lg">
						Baixar e-book
					</span>
				</button>
			</div>
		</section>
	);
};

export default LotAboutSection;
