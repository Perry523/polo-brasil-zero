import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const OurPrinciples = () => {
	return (
		<section className="bg-green-700 w-full lg:h-[362px] xl:h-[420px]">
			<div className="bg-green-800 h-full wrapper-full flex !px-0 max-lg:flex-col lg:justify-center">
				<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
					<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
					<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
					<StaticImage
						className="shrink-0 card-banner w-full max-lg:h-80"
						imgClassName="object-left-top"
						alt="Banner do vídeo"
						src="../../images/video-one.jpg"
						layout="fullWidth"
					/>
					<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
						<StaticImage
							className="w-6 ml-2"
							alt="Clique aqui para dar play"
							src="../../images/play-outline.svg"
						/>
					</a>
					<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
						<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
							Reciclagem Hídrica
						</h3>
						<p className="text-white w-10/12">
							Tratamento total dos efluentes sanitários e industriais
						</p>
					</div>
				</div>
				<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
					<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask ease-in-out transition-all duration-300"></div>
					<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
					<StaticImage
						className="shrink-0 card-banner w-full max-lg:h-80"
						imgClassName="object-left-top"
						layout="fullWidth"
						alt="Banner do vídeo"
						src="../../images/video-two.jpg"
					/>
					<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
						<StaticImage
							className="w-6 ml-2"
							alt="Clique aqui para dar play"
							src="../../images/play-outline.svg"
						/>
					</a>
					<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
						<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
							Reciclagem Sólidos
						</h3>
						<p className="text-white w-10/12">
							Coletas, troca interna e logística reversa dos recicláveis
						</p>
					</div>
				</div>
				<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
					<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
					<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
					<StaticImage
						className="shrink-0 card-banner w-full max-lg:h-80 justify-center items-center"
						imgClassName="object-left-top"
						layout="fullWidth"
						alt="Banner do vídeo"
						src="../../images/video-three.jpg"
					/>
					<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
						<StaticImage
							className="w-6 ml-2"
							alt="Clique aqui para dar play"
							src="../../images/play-outline.svg"
						/>
					</a>
					<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
						<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
							Neutralização GEE
						</h3>
						<p className="text-white w-10/12">
							Mitigar emissões diretas e neutralizar pegada de carbono
						</p>
					</div>
				</div>
				<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
					<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
					<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
					<StaticImage
						className="shrink-0 card-banner w-full max-lg:h-80"
						imgClassName="object-left-top"
						layout="fullWidth"
						alt="Banner do vídeo"
						src="../../images/video-four.png"
					/>
					<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
						<StaticImage
							className="w-6 ml-2"
							alt="Clique aqui para dar play"
							src="../../images/play-outline.svg"
						/>
					</a>
					<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
						<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
							Matriz Energética
						</h3>
						<p className="text-white w-10/12">
							Produção própria de energia limpa, renovável e acessível
						</p>
					</div>
				</div>
				<div className="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5">
					<div className="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"></div>
					<div className="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"></div>
					<StaticImage
						className="shrink-0 card-banner w-full max-lg:h-80"
						imgClassName="object-left-top"
						layout="fullWidth"
						alt="Banner do vídeo"
						src="../../images/video-five.jpg"
					/>
					<a className=" border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20">
						<StaticImage
							className="w-6 ml-2 bg-center object-center"
							alt="Clique aqui para dar play"
							src="../../images/play-outline.svg"
						/>
					</a>
					<div className="flex flex-col absolute w-10/12 bottom-4 z-[60]">
						<h3 className="text-white w-10/12 text-2xl font-bold mb-2">
							Urbanismo Social
						</h3>
						<p className="text-white w-10/12">
							Desenvolver a comunidade e as pessoas com equidade
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurPrinciples;
