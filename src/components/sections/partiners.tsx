import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface PartinersProps {
	partinersRef: React.RefObject<HTMLDivElement>;
}

const Partiners = ({ partinersRef }: PartinersProps) => {
	return (
		<div className="px-10 pb-10 bg-gray-200 lg:w-full">
			<h2
				className="pt-12 mb-5 lg:mb-0 text-green-800  max-lg:text-center"
				ref={partinersRef}
			>
				Parceiros estratégicos
			</h2>
			<div className="flex justify-between w-full max-lg:flex-col items-center">
				<a href="https://www.pactoglobal.org.br/" target="_blank">
					<StaticImage
						alt="Imagem de um parceiro estratégico"
						src="../../images/partner-one.png"
						layout="fixed"
					/>
				</a>
				<a href="https://www.pactoglobal.org.br/pg/hub-ods/" target="_blank">
					<StaticImage
						className="max-lg:mt-10"
						alt="Imagem de um parceiro estratégico"
						src="../../images/partner-three.png"
						layout="fixed"
					/>
				</a>
				<a
					href="https://eaesp.fgv.br/centros/centro-estudos-sustentabilidade/projetos/programa-brasileiro-ghg-protocol"
					target="_blank"
				>
					<StaticImage
						className="max-lg:mt-10"
						alt="Imagem de um parceiro estratégico"
						src="../../images/partner-two.png"
						layout="fixed"
					/>
				</a>
				<a href="https://www.globalreporting.org/" target="_blank">
					<StaticImage
						className="max-lg:mt-10"
						alt="Imagem de um parceiro estratégico"
						src="../../images/partner-four.png"
						layout="fixed"
					/>
				</a>
				<a href="https://sasb.org/" target="_blank">
					<StaticImage
						className="max-lg:mt-10"
						alt="Imagem de um parceiro estratégico"
						src="../../images/partner-five.png"
						layout="fixed"
					/>
				</a>
				<a href="https://www.ibgc.org.br/" target="_blank">
					<StaticImage
						className="max-lg:mt-10 w-20"
						alt="Imagem de um parceiro estratégico"
						src="../../images/partner-six.png"
						layout="fixed"
					/>
				</a>
			</div>
		</div>
	);
};

export default Partiners;
