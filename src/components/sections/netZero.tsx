import React from "react";
import netzeroGif from "../../images/netzero.gif";
interface NetZeroProps {
	netzeroRef: React.RefObject<HTMLDivElement>;
}

const NetZero = ({ netzeroRef }: NetZeroProps) => {
	return (
		<section className="pt-20 pb-12" ref={netzeroRef}>
			<div className="wrapper-full flex flex-col items-center">
				<div className="flex items-center max-lg:flex-col">
					<div className="flex flex-col max-lg:text-center">
						<h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center">
							NETZERO
						</h2>
						<h3 className="mt-7 max-lg:text-center text-green-800">
							Ambição Net-Zero 2024
						</h3>
						<p className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
							A transição para um futuro sustentável exige que as indústrias e
							instituições assumam um compromisso firme em alcançar a
							neutralidade de carbono, conhecida como Net Zero. Essa meta é
							fundamental para mitigar as mudanças climáticas e garantir a
							preservação do nosso planeta para as gerações futuras.
							<br />
							<br />
							Para atingir essa meta é necessário adotar uma abordagem
							abrangente, considerando os três escopos de emissões definidos
							pelo Protocolo de Gases de Efeito Estufa (GHG).
							<br />
							<br />
							<b className="text-green-800 inline">Escopo 1: </b>Refere-se às
							emissões diretas provenientes das atividades próprias da
							indústria.
							<div className="my-3 text-green-800">
								<b className="text-green-800 inline">Escopo 2: </b>Abrange as
								emissões associadas à energia elétrica adquirida.
							</div>
							<b className="text-green-800 inline">Escopo 3: </b>Inclui as
							emissões indiretas de atividades da cadeia de suprimentos e uso
							dos produtos.
							<br />
							<br />O Polo Brasil Zero foi projetado para atender todos os
							escopos, possibilitando um protocolo industrial de Emissões
							Líquidas Zero a partir de 2024.
						</p>
					</div>
					<div
						className="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center
							items-center  max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col"
					>
						<span className="text-green-800 mt-4 font-bold">
							Projeção de emissões de GEE na atmosfera
						</span>
						<img src={netzeroGif} alt="" className="rounded-3xl mt-4" />
						<span className="text-green-800 mt-2">
							Fonte: NASA Scientific Visualization Studio
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NetZero;
