import React from "react";
interface ScheduleEsgProps {
	esgRef: React.RefObject<HTMLDivElement>;
}

const ScheduleEsg = ({ esgRef }: ScheduleEsgProps) => {
	return (
		<section className="bg-green-100 py-16" ref={esgRef}>
			<div>
				<h2 className="wrapper-full text-green-800">Agenda ESG</h2>
				<div className="h-[240px] w-full flex justify-center items-center">
					<h3 className="text-green-800">Nenhum post no momento...</h3>
				</div>
				{/* <div className="mt-9 wrapper-full flex justify-between posts-box overflow-x-scroll invisible-scrollbar max-lg:px-8">
            <div className="w-[250px] cursor-pointer">
                <StaticImage
                    className="rounded-2xl"
                    alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
                    src="../images/placeholder-hand.png"
                    layout="fullWidth"
                />
                <h4 className="mt-6 text-green-800">
                    Centrais de abastecimento e tratamento de água
                </h4>
                <span className="mt-6 font-semibold block text-green-800">
                    12 julho 23 - Terrenos
                </span>
            </div>
            <div className="w-[250px] cursor-pointer">
                <StaticImage
                    layout="fullWidth"
                    className="rounded-2xl"
                    alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
                    src="../images/placeholder-hand.png"
                />
                <h4 className="mt-6 text-green-800">
                    Centrais de abastecimento e tratamento de água
                </h4>
                <span className="mt-6 font-semibold block text-green-800">
                    12 julho 23 - Terrenos
                </span>
            </div>
            <div className="w-[250px] cursor-pointer">
                <StaticImage
                    layout="fullWidth"
                    className="rounded-2xl"
                    alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
                    src="../images/placeholder-hand.png"
                />
                <h4 className="mt-6 text-green-800">
                    Centrais de abastecimento e tratamento de água
                </h4>
                <span className="mt-6 font-semibold block text-green-800">
                    12 julho 23 - Terrenos
                </span>
            </div>
            <div className="w-[250px] cursor-pointer">
                <StaticImage
                    layout="fullWidth"
                    className="rounded-2xl"
                    alt="Clique aqui para saber mais a respeito das centrais de abastecimento e tratamento de água."
                    src="../images/placeholder-hand.png"
                />
                <h4 className="mt-6 text-green-800">
                    Centrais de abastecimento e tratamento de água
                </h4>
                <span className="mt-6 font-semibold block text-green-800">
                    12 julho 23 - Terrenos
                </span>
            </div>
        </div> */}
			</div>
		</section>
	);
};

export default ScheduleEsg;
