import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const GetOwnLot = () => {
	const [activedPreSalesImage, setActivedPreSalesImage] = React.useState(0);

	const handleClickGoToPreviousPreSaleImage = () => {
		if (activedPreSalesImage === 0) {
			setActivedPreSalesImage(2);
			return;
		}
		setActivedPreSalesImage((activedPreSalesImage - 1) % 3);
	};

	const handleClickGoToNextPreSaleImage = () => {
		setActivedPreSalesImage((activedPreSalesImage + 1) % 3);
	};

	const handleClickPreSaleImage = (preSaleImage: number) => {
		setActivedPreSalesImage(preSaleImage);
	};

	return (
		<section className="bg-colorful lg:py-8 py-4 wrapper-full bg-no-repeat bg-center bg-cover">
			<div className="flex flex-col lg:flex-row justify-between max-lg:p-2 bg-white rounded-3xl lg:!p-7 items-center lg:w-full w-[93vw] -ml-7 lg:ml-0">
				<div className="max-lg:w-full col-span-5">
					<div className="relative flex justify-center items-center">
						{activedPreSalesImage === 0 && (
							<StaticImage
								className="rounded-2xl max-lg:w-full lg:w-[658px] lg:h-[367px]"
								alt="Imagem aerea do projeto. Renderizada"
								src="../../images/pre-sales-one.jpg"
								layout="fullWidth"
							/>
						)}
						{activedPreSalesImage === 1 && (
							<StaticImage
								className="rounded-2xl w-[658px] h-[367px]"
								alt="Imagem aerea do projeto. Renderizada"
								src="../../images/pre-sales-two.jpg"
							/>
						)}
						{activedPreSalesImage === 2 && (
							<StaticImage
								className="rounded-2xl w-[658px] h-[367px]"
								alt="Imagem aerea do projeto. Renderizada"
								src="../../images/pre-sales-three.jpg"
							/>
						)}
						<div className="absolute flex justify-between w-full max-lg:px-6 lg:px-7">
							<a
								href="#"
								className="cursor-pointer"
								onClick={(e) => {
									e.preventDefault();
									handleClickGoToPreviousPreSaleImage();
								}}
							>
								<StaticImage
									className="cursor-pointer"
									alt="Voltar uma foto"
									src="../../images/chevron-left.svg"
								/>
							</a>
							<a
								href="#"
								className="cursor-pointer"
								onClick={(e) => {
									e.preventDefault();
									handleClickGoToNextPreSaleImage();
								}}
							>
								<StaticImage
									alt="Ir para a próxima foto"
									src="../../images/chevron-right.svg"
								/>
							</a>
						</div>
					</div>
					<div className="flex pt-7 overflow-x-scroll invisible-scrollbar justify-between">
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								handleClickPreSaleImage(0);
							}}
						>
							<StaticImage
								onClick={() => handleClickPreSaleImage(0)}
								className={`max-lg:w-[140px] lg:w-[203px] rounded-2xl ${
									activedPreSalesImage === 0 &&
									"border-[6px] border-green-700 bg-green-700"
								}`}
								alt="Imagem aerea do projeto. Renderizada"
								src="../../images/pre-sales-one.jpg"
							/>
						</a>
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								handleClickPreSaleImage(1);
							}}
						>
							<StaticImage
								onClick={() => handleClickPreSaleImage(1)}
								className={`max-lg:ml-5 max-lg:w-[140px] lg:w-[203px] rounded-2xl ${
									activedPreSalesImage === 1 &&
									"border-[6px] border-green-700 bg-green-700"
								}`}
								alt="Imagem aerea do projeto. Renderizada"
								src="../../images/pre-sales-two.jpg"
							/>
						</a>
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								handleClickPreSaleImage(2);
							}}
						>
							<StaticImage
								onClick={() => handleClickPreSaleImage(2)}
								className={`max-lg:ml-5 max-lg:w-[140px] lg:w-[203px] rounded-2xl ${
									activedPreSalesImage === 2 &&
									"border-[6px] border-green-700 bg-green-700"
								}`}
								alt="Imagem aerea do projeto. Renderizada"
								src="../../images/pre-sales-three.jpg"
							/>
						</a>
					</div>
				</div>
				<div className="w-full">
					<div className="lg:flex flex-col items-center m-auto max-lg:mt-12">
						<h2 className="text-green-700 text-center">
							Pré lançamento <br /> de vendas
						</h2>
						<h3 className="mt-2 text-green-700 font-semibold text-center">
							Investimento em Real Estate
						</h3>
						<p className="text-center mt-10 text-green-800 lg:w-80">
							Todos os lotes são carbono neutro já equipados com tubulações
							centrais de abastecimento e tratamento de água, rede de coleta dos
							efluentes Industriais e sanitários ligado na ETE.
						</p>
						<h3 className="mt-10 text-green-700 font-bold">Garanta seu lote</h3>
						<span className="text-green-700 mt-1">
							Entrega finalizada em 2024
						</span>
						<button
							type="button"
							className="bt bt-primary mt-10 flex justify-center items-center max-lg:w-full"
						>
							<StaticImage
								alt="Ícone de baixar"
								src="../../images/send.svg"
								className="bt-icon mr-3"
							/>{" "}
							Entrar em contato
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetOwnLot;
