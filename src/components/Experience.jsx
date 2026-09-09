function Projects() {

    const projects = [
        {
            title: "To-Do List",
            description: "Aplicação para gerenciamento de tarefas.",
            technologies: ["React", "JavaScript", "Tailwind CSS"],
            link: "https://github.com/allanpie2405/To-do-list.git"
        },
        {
            title: "Sistema de Hotel",
            description: "Sistema para gerenciamento de hóspedes, quartos e reservas.",
            technologies: ["Java", "POO", "Swing"],
            link: "https://github.com/allanpie2405/sistema-hotel-poo"
        },
    ];

    return (
        <section className="min-h-screen bg-midPurple px-4 py-16 sm:px-8">

            <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
                Projetos
            </h2>

            <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-2">

                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="
                            rounded-xl
                            bg-purple-100
                            p-6
                            text-purple-950
                            transition duration-300
                            hover:-translate-y-2
                            hover:shadow-xl
                        "
                    >

                        <h3 className="mb-3 text-2xl font-bold">
                            {project.title}
                        </h3>

                        <p className="mb-5">
                            {project.description}
                        </p>

                        <div className="mb-5 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-full bg-purple-200 px-3 py-1 text-sm"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-block
                                rounded-lg
                                bg-purple-800
                                px-4
                                py-2
                                font-semibold
                                text-white
                                transition
                                hover:bg-purple-900
                            "
                        >
                            Ver projeto
                        </a>

                    </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;