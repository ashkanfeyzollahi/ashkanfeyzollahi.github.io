import {
    Accordion,
    Card,
    Center,
    Em,
    Highlight,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Span,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GoBook, GoPerson, GoProject } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";

interface Project {
    full_name: string;
    description: string;
    html_url: string;
}

export default function DetailsSection() {
    const projects: React.RefObject<Array<Project>> = useRef([]);
    const [isLoadingProjects, setIsLoadingProjects] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/ashkanfeyzollahi/repos")
            .then((response) => response.json())
            .then((json) => {
                projects.current = json;
                setIsLoadingProjects(false);
            });
    }, []);

    return (
        <Center width="100%" padding="10px" marginBottom="50px">
            <Accordion.Root width="lg" marginTop="40px" collapsible>
                <Accordion.Item key={0} value="a">
                    <Accordion.ItemTrigger>
                        <Span flex="1">
                            <HStack gap="15px">
                                <Icon>
                                    <GoPerson></GoPerson>
                                </Icon>
                                <Text>About Me</Text>
                            </HStack>
                        </Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Text>
                                I am a highly motivated and self-driven software
                                developer, currently 17 years old, who has
                                cultivated a strong passion for programming and
                                technology from an early age. Being entirely
                                self-taught, I have dedicated countless hours to
                                learning and mastering various programming
                                languages, with particular proficiency in C,
                                JavaScript, and Python. These languages have
                                served as the foundation for many personal
                                projects, allowing me to explore different
                                paradigms of software development, from
                                low-level system programming to dynamic web
                                applications.
                            </Text>
                            <br />
                            <Text>
                                My fascination with open-source software began
                                almost as soon as I started coding. I have been
                                deeply inspired by the collaborative and
                                transparent nature of open-source communities,
                                where individuals from around the world
                                contribute their skills and creativity to build
                                and improve software that is freely accessible
                                to all. This interest has driven me to actively
                                engage with open-source projects by studying
                                their codebases, contributing bug fixes, and
                                occasionally developing new features, which has
                                helped me grow both technically and
                                professionally.
                            </Text>
                            <br />
                            <Text>
                                Despite my young age, I am committed to
                                continuous learning and personal growth,
                                constantly seeking out new challenges and
                                opportunities to expand my knowledge and improve
                                my coding abilities. I enjoy problem-solving and
                                thrive in environments that push me to think
                                critically and creatively. My goal is to
                                leverage my skills not only to build efficient,
                                reliable, and scalable software but also to
                                contribute positively to the global tech
                                community by participating in open-source
                                initiatives.
                            </Text>
                            <br />
                            <Text>
                                Looking ahead, I am eager to further develop my
                                expertise through formal education and
                                real-world experience, aspiring to become a
                                software engineer who makes meaningful
                                contributions to technology and society. I am
                                passionate about using technology as a tool for
                                innovation, collaboration, and positive change,
                                and I am excited about the possibilities that
                                lie ahead in my coding journey.
                            </Text>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item key={2} value="b">
                    <Accordion.ItemTrigger>
                        <Span flex="1">
                            <HStack gap="15px">
                                <Icon>
                                    <GoBook></GoBook>
                                </Icon>
                                <Text>Education</Text>
                            </HStack>
                        </Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Card.Root>
                                <Card.Body>
                                    <Card.Title>
                                        Shahid Dr. Chamran Honarestan (Techincal
                                        School) — 2025 (Expected Graduation)
                                    </Card.Title>
                                    <Card.Description>
                                        <Em>
                                            <Highlight
                                                query='"network and software"'
                                                styles={{
                                                    px: "0.5",
                                                    bg: "teal.subtle",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Currently enrolled, specializing
                                                in "network and software"
                                            </Highlight>
                                        </Em>
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item key={3} value="c">
                    <Accordion.ItemTrigger>
                        <Span flex="1">
                            <HStack gap="15px">
                                <Icon>
                                    <GoProject></GoProject>
                                </Icon>
                                <Text>Projects</Text>
                            </HStack>
                        </Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            {!isLoadingProjects ? (
                                projects.current.map((project) => (
                                    <Card.Root marginY="20px">
                                        <Image
                                            src={
                                                "https://opengraph.githubassets.com/1/" +
                                                project.full_name
                                            }
                                        ></Image>
                                        <Card.Body>
                                            <Card.Title>
                                                <Link href={project.html_url}>
                                                    {project.full_name}
                                                </Link>
                                            </Card.Title>
                                            <Card.Description>
                                                {project.description}
                                            </Card.Description>
                                        </Card.Body>
                                    </Card.Root>
                                ))
                            ) : (
                                <Card.Root>
                                    <Skeleton height="250px" />
                                    <Card.Body>
                                        <Stack flex="1">
                                            <Skeleton height="20px" />
                                            <Skeleton
                                                height="20px"
                                                width="80%"
                                            />
                                        </Stack>
                                    </Card.Body>
                                </Card.Root>
                            )}
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
                <Accordion.Item key={4} value="d">
                    <Accordion.ItemTrigger>
                        <Span flex="1">
                            <HStack gap="15px">
                                <Icon>
                                    <GrContactInfo></GrContactInfo>
                                </Icon>
                                <Text>Contact Me</Text>
                            </HStack>
                        </Span>
                        <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                        <Accordion.ItemBody>
                            <Text>
                                Contact me via sending an email to &nbsp;
                                <Link href="mailto:ashkanfeyzollahi@gmail.com">
                                    <Highlight
                                        query="ashkanfeyzollahi@gmail.com"
                                        styles={{
                                            px: "0.5",
                                            bg: "teal.subtle",
                                        }}
                                    >
                                        ashkanfeyzollahi@gmail.com
                                    </Highlight>
                                </Link>
                            </Text>
                        </Accordion.ItemBody>
                    </Accordion.ItemContent>
                </Accordion.Item>
            </Accordion.Root>
        </Center>
    );
}
