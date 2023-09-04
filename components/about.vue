<template>
  <section className="lg:mb-16 mb-8 mt-16" ref="{aboutUsRef}">
    <div className="flex wrapper-full items-center max-lg:flex-col">
      <div className="flex flex-col max-lg:text-center max-lg:items-center">
        <h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center">
          SOBRE NÓS
        </h2>
        <h3 className="mt-7 max-lg:text-center text-green-800">
          Centro Sustentável Industrial, Tecnológico e Social
        </h3>
        <p
          className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800"
        >
          Nosso Modelo Sustentável de Negócio impulsiona a transformação
          industrial com foco socioambiental, com inovação total em gestão de
          resíduos líquidos, sólidos e gasosos, sendo o primeiro parque
          industrial zero emissões do Brasil. Buscamos equilibrar os aspectos
          econômicos, sociais e ambientais visando criar valor a longo prazo
          para as empresas, sociedade e o meio ambiente.
        </p>
        <button type="button" className="bt bt-outline-primary mt-4">
          Saiba mais
        </button>
      </div>
      <div
        className="w-full h-auto lg:w-[450px] lg:h-[340px] shrink-0 lg:ml-20 relative flex justify-center items-center cursor-pointer max-lg:mt-7 flex-col"
        @click="handleOpenVideo('https://www.youtube.com/embed/b6SDcbE3y98')"
      >
        <p className="text-green-800 font-bold mb-2 lg:mb-0">
          Apresentação do Projeto Total
        </p>
        <StaticImage
          className="rounded-3xl w-full border border-green-500 mt-2"
          alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
          src="../../images/pbz-render-video-banner-2.jpg"
          layout="fullWidth"
        />
        <StaticImage
          alt="Ícone de play"
          src="../../images/play.svg"
          className="!absolute"
        />
      </div>
    </div>

    <div className="flex wrapper-full lg:mt-24 items-center max-lg:flex-col">
      <StaticImage
        alt="Imagem que mostra o plano ESG. (ambiental, social, governança, econômico, tecnológico)"
        src="../../images/esg.png"
        className="shrink-0 max-lg:mt-12 w-[300px]"
      />
      <div className="lg:ml-10 max-lg:text-center">
        <h3 className="text-green-800 max-lg:mt-10">Visão de Liderança</h3>
        <p className="mt-2 text-green-800">
          Nosso Chamado para liderança em sustentabilidade é inspirar, motivar e
          promover uma mudança cultural, acreditamos que impactar industrias,
          pessoas e instituições, é crucial para a construção de uma economia
          regenerativa e a reformulação de um novo mercado com foco transversal
          em sustentabilidade.
        </p>
        <button
          type="button"
          className="bt bt-outline-primary mt-6 lg:mt-4 mb-2 lg:mb-0"
        >
          Saiba mais
        </button>
      </div>
      <div
        className="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center
						items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 lg:ml-10 flex-col"
        @click="handleOpenVideo('https://www.youtube.com/embed/fL2jcCSN2pc')"
      >
        <p className="text-green-800 font-bold mb-2 lg:mb-0">
          Chamado para Sustentabilidade
        </p>
        <StaticImage
          className="rounded-3xl !w-full border border-green-500 mt-2"
          alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
          src="../../images/pbz-render-video-banner-3.jpg"
          layout="fullWidth"
        />
        <StaticImage
          alt="Ícone de play"
          src="../../images/play.svg"
          className="!absolute"
        />
      </div>
    </div>

    <div
      className="wrapper-full flex max-lg:flex-col justify-center lg:justify-between lg:mt-24 mt-20"
      ref="{sustentabilityRef}"
    >
      <div className="max-lg:text-center ">
        <h2 className="text-green-800">Sustentabilidade</h2>
        <p className="mt-7 text-green-800">
          Descubra como a adoção de boas práticas e o foco na sustentabilidade
          podem revolucionar o futuro da indústria, das pessoas e do planeta.
        </p>
      </div>
      <StaticImage
        alt="Lista de todas as ODS's da ONU"
        src="../../images/odss.png"
        className="shrink-0 lg:ml-20 max-lg:mt-12 w-full lg:w-[531px]"
        objectFit="contain"
        layout="fullWidth"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
function handleOpenVideo(link: string) {
  //   isVideoOpen.value = true;
  //   selectedVideoShow.value = link;
}
</script>
