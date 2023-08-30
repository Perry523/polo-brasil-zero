import React, { FC } from 'react';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';

interface HeaderProps {
  openVideo: (link: string) => void;
}

interface SlideProps {
  title: string;
  description: string;
  videoSrc: string;
  openVideo: Function;
}

const Slide: FC<SlideProps> = ({ title, description, videoSrc, openVideo }) => (
  <div className="h-[540px] bg-no-repeat bg-cover bg-center relative">
    <video autoPlay muted loop className="absolute w-screen top-0 left-0 h-full -z-10 object-cover">
      <source src={videoSrc} type="video/mp4" />
    </video>
    <div className="bg-gradient-green h-[540px] w-[calc(100vw)]">
      <div className="wrapper-full">
        <h1 className="text-green-100 pt-40 lg:w-[400px]">{title}</h1>
        <p className="text-green-100 mt-2 lg:w-[580px]">{description}</p>
        <button
          type="button"
          className="bt bt-outline-primary mt-8 flex items-center"
          onClick={() => openVideo("https://www.youtube.com/embed/b6SDcbE3y98")}
        >
          <StaticImage alt="Ícone de baixar" src="../images/play-circle.png" className="bt-icon mr-3" /> Conheça o projeto
        </button>
      </div>
    </div>
  </div>
);

const Header: FC<HeaderProps> = ({ openVideo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const slidesData = [
	{
	  title: 'Centro Sustentável',
	  description: 'Uma iniciativa privada, onde a inovação se encontra com a responsabilidade socioambiental, alinhado com os objetivos de desenvolvimento sustentável da ONU.',
	  videoSrc: '/img/first-slidee.mp4',
	},
	{
	  title: 'Primeiro Parque industrial ZERO EMISSÕES do Brasil',
	  description: 'Com reciclagem total das emissões geradas: líquidas, sólidas e GEEs, seguindo padrões de economia circular e de baixo carbono.',
	  videoSrc: '/img/third-slide.mp4',
	},
	{
	  title: 'Aqui construímos um futuro sem EMISSÕES diretas',
	  description: 'Junte-se a nós, nessa transformação verde rumo a DESCARBONIZAÇÃO da indústria Brasileira com SUSTENTABILIDADE.',
	  videoSrc: '/img/second-slide.mp4',
	},
	{
	  title: 'EcoHub de Tecnologia',
	  description: 'Voltado para Agricultura regenerativa e de baixo carbono, Indústria 5.0 e Sociabilidade. Gerando o DESENVOLVIMENTO SUSTENTÁVEL do estado e das pessoas.',
	  videoSrc: '/img/fourth-slide.mp4',
	},
	{
	  title: 'Nossa missão',
	  description: 'Vai além como compromisso socioambiental, com projetos voltados para a TRANSFORMAÇÃO das PESSOAS e COMUNIDADE, com urbanismo social de verdade.',
	  videoSrc: '/img/fifth-slide.mp4',
	},
  ];
  
  return (
    <header>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <Slide key={index} {...slide} openVideo={openVideo}/>
        ))}
      </Slider>
    </header>
  );
};

export default Header;
