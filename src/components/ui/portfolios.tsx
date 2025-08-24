import {
    Box,
    Card,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GoProject } from "react-icons/go";

interface Project {
    full_name: string;
    description: string;
    html_url: string;
}

export default function Portfolios(): React.JSX.Element {
    const projects: React.RefObject<Array<Project>> = useRef([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/ashkanfeyzollahi/repos")
            .then((response) => response.json())
            .then((json) => {
                projects.current = json;
                setIsLoading(false);
            });
    }, []);

    return (
        <Box marginTop="80px" spaceY="20px">
            <Heading as="h2">
                <HStack gap="15px">
                    <Icon>
                        <GoProject></GoProject>
                    </Icon>
                    <Text>Portfolios</Text>
                </HStack>
            </Heading>
            {!isLoading ? (
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
                            <Skeleton height="20px" width="80%" />
                        </Stack>
                    </Card.Body>
                </Card.Root>
            )}
        </Box>
    );
}
