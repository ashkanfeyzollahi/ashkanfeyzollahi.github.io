import { Github } from "lucide-react";

export default function Footer() {
    return (
        <div className="py-10 bg-react-darkblue text-slate-400 flex flex-row justify-center gap-5">
            <p>Copyright © 2025 Ashkan Feyzollahi. All rights reserved.</p>
            <a href="https://github.com/ashkanfeyzollahi/ashkanfeyzollahi.github.io">
                <Github />
            </a>
        </div>
    );
}
