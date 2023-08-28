import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Input } from "../input";
import { Selectable } from "../selectable";

interface ContactProps {
	contactRef: React.RefObject<HTMLDivElement>;
}
const Contact = ({ contactRef }: ContactProps) => {
	const [contactTypeSelectedOption, setContactTypeSelectedOption] =
		React.useState(-1);

	return (
		<section className="bg-green-700 max-lg:pt-16 lg:py-16" ref={contactRef}>
			<div className="flex items-center max-lg:flex-col wrapper-full">
				<div className="flex flex-col max-lg:flex">
					<h2 className="text-white max-lg:text-center">
						E você? Quer fazer parte do nosso projeto sustentável? Entre em
						contato
					</h2>
					<div className="mt-16 p-3 border-white rounded-md border lg:w-[330px]">
						<StaticImage
							alt="Ícone de email"
							src="../images/mail.svg"
							className="mr-2"
						/>
						<span className="text-white">lhmt@polobrasilzero.com</span>
					</div>
					<div className="mt-4 p-3 border-white rounded-md border lg:w-[330px] flex items-center">
						<StaticImage
							alt="Ícone de endereço"
							src="../images/map.svg"
							className="mr-4 shrink-0 h-[21px]"
						/>
						<span className="text-white block">
							Av. Ayrton Senna da Silva - KM 497 Jardim Industriario, CEP
							78099-499 / Cuiabá - MT
						</span>
					</div>
				</div>
				<div className="flex flex-col shrink-0 max-lg:w-screen lg:w-[600px] p-12 bg-white rounded-2xl lg:ml-20 max-lg:mt-10 max-lg:shadow-2xl">
					<Input name="name" placeholder="Seu nome" label="Nome:" />
					<Input
						name="email"
						placeholder="Seu melhor email"
						label="Email:"
						labelClasses="mt-6"
					/>
					<Input
						name="phone"
						placeholder="Seu telefone"
						label="Telefone:"
						labelClasses="mt-6"
					/>
					<Selectable
						label="Tipo de contato:"
						labelClasses="mt-6"
						name="contactType"
						placeholder="Selecione o motivo do contato"
						options={["Comprar um terreno", "Fazer parceria", "Outro motivo"]}
						handleSelectOption={(i: number) => {
							setContactTypeSelectedOption(i);
						}}
						selectedOption={contactTypeSelectedOption}
					/>
					<span className="block mx-auto mt-6 font-medium text-green-800">
						<input
							type="checkbox"
							name="isTermsReaded"
							id="isTermsReaded"
							className="text-green-800"
						/>{" "}
						Declaro que li os termos de uso.
					</span>
					<button
						type="button"
						className="bt bt-primary mx-auto mt-5 flex items-center justify-center"
					>
						<StaticImage
							alt="Ícone de enviar mensagem"
							src="../images/send.svg"
							className="bt-icon mr-3"
						/>
						Enviar
					</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
