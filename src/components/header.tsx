import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";

interface HeaderProps {
	openVideo: (link: string) => void;
}

const header = ({ openVideo }: HeaderProps) => {
	const sliderRef = React.useRef(null);

	const handleOpenVideo = (link: string) => {
		openVideo(link);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<header>
			<Slider
				ref={sliderRef}
				{...settings}
				beforeChange={(currentSlide, nextSlide) => {
					// console.log("nextSlide", nextSlide);
					// if (nextSlide === 4) {
					// 	handleGoToFirstSlide();
					// }
				}}
			>
				<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
					<video
						muted
						loop
						id="myVideo1"
						className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
					>
						<source src="/img/first-slidee.mp4" type="video/mp4" />
					</video>
					<div className="bg-gradient-green h-[540px] w-[calc(100vw)]">
						<div className="wrapper-full">
							<h1 className="text-green-100 pt-40 lg:w-[400px]">
								Centro Sustentável
								<br />
								POLO BRASIL ZERO
							</h1>
							<p className="text-green-100 mt-2 lg:w-[580px]">
								Uma iniciativa privada, onde a inovação se encontra com a
								responsabilidade socioambiental, alinhado com os objetivos de
								desenvolvimento sustentável da ONU.
							</p>
							<button
								type="button"
								className="bt bt-outline-primary mt-8 flex items-center"
								onClick={(_) => {
									handleOpenVideo("https://www.youtube.com/embed/b6SDcbE3y98");
								}}
							>
								<StaticImage
									alt="Ícone de baixar"
									src="../images/play-circle.png"
									className="bt-icon mr-3"
								/>{" "}
								Conheça o projeto
							</button>
						</div>
					</div>
				</div>

				<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
					<video
						muted
						loop
						id="myVideo3"
						className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
					>
						<source src="/img/third-slide.mp4" type="video/mp4" />
					</video>
					<div className="bg-gradient-green h-[540px] w-[calc(100vw)]">
						<div className="wrapper-full">
							<h1 className="text-green-100 pt-40 lg:w-[400px]">
								Primeiro Parque industrial ZERO EMISSÕES do Brasil
							</h1>
							<p className="text-green-100 mt-2 lg:w-[580px]">
								Com reciclagem total das emissões geradas: líquidas, sólidas e
								GEEs, seguindo padrões de economia circular e de baixo carbono.
							</p>
							<button
								type="button"
								className="bt bt-outline-primary mt-8 flex items-center"
								onClick={(_) => {
									handleOpenVideo("https://www.youtube.com/embed/b6SDcbE3y98");
								}}
							>
								<StaticImage
									alt="Ícone de baixar"
									src="../images/play-circle.png"
									className="bt-icon mr-3"
								/>{" "}
								Conheça o projeto
							</button>
						</div>
					</div>
				</div>
				<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
					<video
						muted
						loop
						id="myVideo2"
						className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
					>
						<source src="/img/second-slide.mp4" type="video/mp4" />
					</video>
					<div className="bg-gradient-green h-[540px] w-[calc(100vw)]">
						<div className="wrapper-full">
							<h1 className="text-green-100 pt-40 lg:w-[400px]">
								Aqui construímos um futuro sem EMISSÕES diretas
							</h1>
							<p className="text-green-100 mt-2 lg:w-[580px]">
								Junte-se a nós, nessa transformação verde rumo a DESCARBONIZAÇÃO
								da indústria Brasileira com SUSTENTABILIDADE.
							</p>

							<button
								type="button"
								className="bt bt-outline-primary mt-8 flex items-center"
								onClick={(_) => {
									handleOpenVideo("https://www.youtube.com/embed/b6SDcbE3y98");
								}}
							>
								<StaticImage
									alt="Ícone de baixar"
									src="../images/play-circle.png"
									className="bt-icon mr-3"
								/>{" "}
								Conheça o projeto
							</button>
						</div>
					</div>
				</div>
				<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
					<video
						muted
						loop
						id="myVideo4"
						className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
					>
						<source src="/img/fourth-slide.mp4" type="video/mp4" />
					</video>

					<div className="bg-gradient-green h-[540px] w-[calc(100vw)]">
						<div className="wrapper-full">
							<h1 className="text-green-100 pt-40 lg:w-[400px]">
								EcoHub de Tecnologia
							</h1>
							<p className="text-green-100 mt-2 lg:w-[580px]">
								Voltado para Agricultura regenerativa e de baixo carbono,
								Indústria 5.0 e Sociabilidade. Gerando o DESENVOLVIMENTO
								SUSTENTÁVEL do estado e das pessoas.
							</p>
							<button
								type="button"
								className="bt bt-outline-primary mt-8 flex items-center"
								onClick={(_) => {
									handleOpenVideo("https://www.youtube.com/embed/b6SDcbE3y98");
								}}
							>
								<StaticImage
									alt="Ícone de baixar"
									src="../images/play-circle.png"
									className="bt-icon mr-3"
								/>{" "}
								Conheça o projeto
							</button>
						</div>
					</div>
				</div>

				<div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
					<video
						muted
						loop
						id="myVideo5"
						className="absolute w-screen top-0 left-0 h-full -z-10 object-cover"
					>
						<source src="/img/fifth-slide.mp4" type="video/mp4" />
					</video>

					<div className="bg-gradient-green h-[540px] w-[calc(100vw)]">
						<div className="wrapper-full">
							<h1 className="text-green-100 pt-40 lg:w-[400px]">
								Nossa missão
							</h1>
							<p className="text-green-100 mt-2 lg:w-[580px]">
								Vai além como compromisso socioambiental, com projetos voltados
								para a TRANSFORMAÇÃO das PESSOAS e COMUNIDADE, com urbanismo
								social de verdade.
							</p>
							<button
								type="button"
								className="bt bt-outline-primary mt-8 flex items-center"
								onClick={(_) => {
									handleOpenVideo("https://www.youtube.com/embed/b6SDcbE3y98");
								}}
							>
								<StaticImage
									alt="Ícone de baixar"
									src="../images/play-circle.png"
									className="bt-icon mr-3"
								/>{" "}
								Conheça o projeto
							</button>
						</div>
					</div>
				</div>
				{/* <div
						id="lastSlide"
						style={{
							display: "none",
						}}
					></div> */}
			</Slider>
		</header>
	);
};

export default header;
