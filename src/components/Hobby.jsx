import {
    Code2,
    Rocket,
    Database,
    Brain,
    BookOpen,
    Languages,
    Layout,
    Terminal
} from "lucide-react";



function Hobby() {
    const hobbys = [
        { title: "estudar programação", icon: <Code2 /> },
        { title: "criar projetos", icon: <Rocket /> },
        { title: "explorar tecnologias", icon: <Terminal /> },
        { title: "aprender sobre bancos de dados", icon: <Database /> },
        { title: "resolver problemas", icon: <Brain /> },
        { title: "aprender continuamente", icon: <BookOpen /> },
        { title: "desenvolvimento web", icon: <Layout /> },
        { title: "aprender idiomas", icon: <Languages /> }
    ];

    return (
        <div className="bg-midPurple min-h-screen">
            <h2 className="pt-6 text-center text-4xl font-bold text-white">
                Hobbies
            </h2>

            <div className="mx-auto grid justify-center max-w-[900px] grid-cols-1 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-4">
                {hobbys.map((hobby) => (
                    <div
                        key={hobby.title}
                        className="
                    flex h-[160px] flex-col
                    items-center justify-center
                    rounded-xl bg-purple-100
                    p-5 text-center text-purple-950
                    transition duration-300
                    hover:-translate-y-2
                    hover:scale-105
                    hover:shadow-xl
                "
                    >
                        <div className="mb-4">
                            {hobby.icon}
                        </div>

                        <p className="font-medium">
                            {hobby.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hobby;