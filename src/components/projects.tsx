import { useState, useEffect } from "react";

function Project({ src }: { src: any }) {
    return (
        <div className="bg-react-darkblue p-5 m-2 rounded-lg border border-react-lightgray-border">
            <a className="text-react-blue" href={src.html_url}>
                {src.full_name}
            </a>
            <p className="text-slate-300 mt-2">{src.description}</p>
        </div>
    );
}

export default function Projects() {
    const [projects, setProjects] = useState<any>([]);

    useEffect(() => {
        fetch("https://api.github.com/users/ashkanfeyzollahi/repos")
            .then((response) => {
                return response.json();
            })
            .then((data) => setProjects(data));
    }, []);

    return (
        <div
            id="projects"
            className="border-y border-react-lightgray-border bg-react-lightgray flex justify-center w-full h-[100vh] max-h-[100vh]"
        >
            <div className="flex flex-col justify-center">
                <div className="flex flex-col py-20 overflow-auto">
                    {projects?.map((project: any) => (
                        <Project src={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
