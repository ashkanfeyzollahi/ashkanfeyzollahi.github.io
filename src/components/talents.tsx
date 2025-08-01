import { Badge } from "./badges";

export default function Talents() {
    return (
        <div
            id="talents"
            className="bg-react-darkblue pb-20 h-[100vh] flex flex-col justify-center"
        >
            <div className="flex justify-center p-5 pb-0 pt-20">
                <Badge>Modern problems require modern solutions</Badge>
            </div>
            <div className="flex justify-center p-5 pt-0">
                <h2 className="text-white text-[30px]">
                    Making apps with modern technologies
                </h2>
            </div>
            <div className="flex justify-center">
                <img
                    alt="talents"
                    src="https://skillicons.dev/icons?i=c,cs,cpp,css,html,js,lua,python,ts,bash,django,fastapi,flask,nodejs,react,sass,tailwindcss,vite,git,mysql,sqlite&perline=8"
                />
            </div>
        </div>
    );
}
