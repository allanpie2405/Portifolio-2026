import PortifolioHeroImg from "../assets/PortifolioHeroImg.svg";

function Hero() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-deepPurple px-6 py-10 md:flex-row md:px-10">

            <div className="flex w-full items-center justify-center md:w-1/2">
                <img
                    className="w-[250px] rounded-4xl md:w-[350px]"
                    src={PortifolioHeroImg}
                    alt="Imagem do portfólio"
                />
            </div>

            <div className="flex w-full justify-center md:w-1/2">
                <div className="flex min-h-[400px] w-full max-w-xl items-center justify-center rounded-4xl bg-midPurple md:h-[65%]">
                    
                    <div className="flex flex-col items-center justify-center gap-5 px-6 py-10 text-center md:px-10">
                        
                        <h1 className="text-3xl font-bold text-white md:text-4xl">
                            Olá, eu sou Pierre
                        </h1>

                        <h2 className="text-xl text-purple-300 md:text-2xl">
                            Desenvolvedor Front-end
                        </h2>

                        <p className="max-w-xl text-base text-purple-100 md:text-lg">
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