import { Icon, Span } from "@chakra-ui/react";
import { animate, utils } from "animejs";
import { useEffect } from "react";
import {
    SiBootstrap,
    SiC,
    SiChakraui,
    SiCmake,
    SiCss3,
    SiDjango,
    SiElectron,
    SiEslint,
    SiFastapi,
    SiFlask,
    SiGit,
    SiGnubash,
    SiGunicorn,
    SiHtml5,
    SiJavascript,
    SiLinux,
    SiLua,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiNpm,
    SiPoetry,
    SiPrettier,
    SiPydantic,
    SiPytest,
    SiPython,
    SiReact,
    SiRuff,
    SiSass,
    SiSqlite,
    SiTailwindcss,
    SiTypescript,
    SiUv,
    SiVite,
    SiVuedotjs,
} from "react-icons/si";

export default function AnimatedBackgroundIcons(): React.JSX.Element {
    useEffect(() => {
        utils.set(".si", {
            left: () => utils.random(7.5, 90, 2) + "vw",
            top: () => utils.random(7.5, 90, 2) + "%",
            opacity: () => utils.random(0, 0.1, 2),
            scale: () => utils.random(0, 4, 2),
            rotate: () => utils.random(-30, 30, 2),
        });

        function animeIcons() {
            animate(".si", {
                left: () => utils.random(10, 90, 2) + "vw",
                top: () => utils.random(10, 90, 2) + "%",
                opacity: () => utils.random(0, 0.1, 2),
                scale: () => utils.random(0, 4, 2),
                rotate: () => utils.random(-30, 30, 2),
                duration: 10000,
                ease: "inOutSine",
                onComplete: () => animeIcons(),
            });
        }

        animeIcons();
    }, []);

    return (
        <>
            {[
                <SiBootstrap />,
                <SiC />,
                <SiChakraui />,
                <SiCmake />,
                <SiCss3 />,
                <SiDjango />,
                <SiElectron />,
                <SiEslint />,
                <SiFastapi />,
                <SiFlask />,
                <SiGit />,
                <SiGnubash />,
                <SiGunicorn />,
                <SiHtml5 />,
                <SiJavascript />,
                <SiLinux />,
                <SiLua />,
                <SiMongodb />,
                <SiMysql />,
                <SiNodedotjs />,
                <SiNpm />,
                <SiPoetry />,
                <SiPrettier />,
                <SiPydantic />,
                <SiPytest />,
                <SiPython />,
                <SiReact />,
                <SiRuff />,
                <SiSass />,
                <SiSqlite />,
                <SiTailwindcss />,
                <SiTypescript />,
                <SiUv />,
                <SiVite />,
                <SiVuedotjs />,
            ].map((icon) => (
                <Span className="si" position="absolute">
                    <Icon>{icon}</Icon>
                </Span>
            ))}
        </>
    );
}
