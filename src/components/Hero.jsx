import PortifolioHeroImg from "../assets/PortifolioHeroImg.svg";

function Hero() {
    return (
        <div className="flex h-screen items-center justify-center gap-10 bg-deepPurple px-10">
            <div className="w-1/2 flex justify-center items-center">
                <img className="w-[350px] rounded-4xl" src={PortifolioHeroImg} alt="Imagem do portfólio" />
            </div>

            <div className="w-1/2 flex h-[65%] justify-center items-center">
                <div className="w-full h-full rounded-4xl bg-midPurple">
                    <div className="flex flex-col justify-center items-center text-center gap-5 h-full px-10 pb-2 pt-2">
                        <h1 className="text-4xl font-bold text-white">
                            Olá, eu sou Pierre
                        </h1>

                        <h2 className="text-2xl text-purple-300">
                            Desenvolvedor Front-end
                        </h2>

                        <p className="text-lg max-w-xl text-purple-100">
                            Sou estudante de Engenharia de Software apaixonado por tecnologia
                            e desenvolvimento web. Atualmente, estou aprimorando meus
                            conhecimentos em JavaScript, React e Tailwind CSS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;