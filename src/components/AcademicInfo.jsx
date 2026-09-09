function AcademicInfo() {

    const formacoes = [
        {
            title: "Engenharia de Software",
            institution: "Universidade Federal do Ceará",
            period: "2025 - Atualmente",
            description: "Graduação em Engenharia de Software."
        },
        {
            title: "Curso Técnico em Redes de Computadores",
            institution: "E.E.E.P Francisca Rocha Silva",
            period: "2022 - 2025",
            description: "Formação técnica em Redes de Computadores."
        },
        {
            title: "Curso de Front-End",
            institution: "Alura",
            period: "Em andamento",
            description: "Estudos voltados para desenvolvimento Front-End."
        },
        {
            title: "Curso de Back-End (Node.js)",
            institution: "Alura",
            period: "Em andamento",
            description: "Estudos voltados para desenvolvimento Back-End."
        }
    ];

    return (
        <div className="min-h-screen bg-deepPurple px-4 py-16 sm:px-8">

            <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
                Formação Acadêmica
            </h2>

            <div className="mx-auto max-w-[900px]">
                {formacoes.map((formacao) => (
                    <div
                        key={formacao.title}
                        className="mb-6 rounded-xl bg-purple-100 p-5 text-purple-950 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                    >

                        <h3 className="text-xl font-bold sm:text-2xl">
                            {formacao.title}
                        </h3>

                        <p className="mt-1 font-medium">
                            {formacao.institution}
                        </p>

                        <p className="mt-1 text-sm text-purple-700">
                            {formacao.period}
                        </p>

                        <p className="mt-2">
                            {formacao.description}
                        </p>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default AcademicInfo;