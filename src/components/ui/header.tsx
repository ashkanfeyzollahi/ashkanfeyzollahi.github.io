import AnimatedBackgroundIcons from "./animated-background-icons";
import { ColorModeButton } from "./color-mode";
import {
    Avatar,
    Box,
    Center,
    HStack,
    Icon,
    Link,
    Text,
} from "@chakra-ui/react";
import { createDraggable, createScope, createSpring, Scope } from "animejs";
import { useEffect, useRef } from "react";
import { LuExternalLink } from "react-icons/lu";
import { PiArrowDown } from "react-icons/pi";
import { SiChakraui, SiReact, SiTypescript, SiVite } from "react-icons/si";

export default function Header(): React.JSX.Element {
    const root = useRef(null);
    const scope = useRef(new Scope());

    useEffect(() => {
        scope.current = createScope({ root }).add(() => {
            createDraggable("#si-chakraui", {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 500 }),
            });

            createDraggable("#si-react", {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 500 }),
            });

            createDraggable("#si-typescript", {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 500 }),
            });

            createDraggable("#si-vite", {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 500 }),
            });
        });

        return () => scope.current.revert();
    }, []);

    return (
        <>
            <AnimatedBackgroundIcons />
            <ColorModeButton position="fixed" top="10px" right="10px" />
            <Box ref={root}>
                <Center height="100vh" spaceY="15px" justifyItems="center">
                    <Box spaceY="15px">
                        <Center>
                            <HStack>
                                A portfolio webpage for
                                <Avatar.Root height="30px" width="30px">
                                    <Avatar.Fallback name="Ashkan Feyzollahi" />
                                    <Avatar.Image src="https://avatars.githubusercontent.com/u/136630721?v=4" />
                                </Avatar.Root>
                                made using:
                            </HStack>
                        </Center>
                        <Center>
                            <HStack>
                                <Icon id="si-chakraui" size="2xl">
                                    <SiChakraui></SiChakraui>
                                </Icon>
                                <Text>+</Text>
                                <Icon id="si-react" size="2xl">
                                    <SiReact></SiReact>
                                </Icon>
                                <Text>+</Text>
                                <Icon id="si-typescript" size="2xl">
                                    <SiTypescript></SiTypescript>
                                </Icon>
                                <Text>+</Text>
                                <Icon id="si-vite" size="2xl">
                                    <SiVite></SiVite>
                                </Icon>
                            </HStack>
                        </Center>
                        <Center>
                            <Box marginTop="10px">
                                <Link href="https://github.com/ashkanfeyzollahi/ashkanfeyzollahi.github.io">
                                    View on GitHub <LuExternalLink />
                                </Link>
                                &nbsp; &sdot; &nbsp;
                                <Link href="mailto:ashkanfeyzollahi@gmail.com">
                                    Contact me <LuExternalLink />
                                </Link>
                            </Box>
                        </Center>
                        <Center
                            left="0"
                            position="absolute"
                            top="90vh"
                            width="100vw"
                        >
                            <Icon size="lg">
                                <PiArrowDown />
                            </Icon>
                        </Center>
                    </Box>
                </Center>
            </Box>
        </>
    );
}
