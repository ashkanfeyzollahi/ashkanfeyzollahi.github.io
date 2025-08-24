import {
    Box,
    Card,
    Em,
    Heading,
    Highlight,
    HStack,
    Icon,
    Text,
} from "@chakra-ui/react";
import { GoBook } from "react-icons/go";

export default function Education(): React.JSX.Element {
    return (
        <Box marginTop="80px" spaceY="20px">
            <Heading as="h2">
                <HStack gap="15px">
                    <Icon>
                        <GoBook></GoBook>
                    </Icon>
                    <Text>Education</Text>
                </HStack>
            </Heading>
            <Card.Root>
                <Card.Body>
                    <Card.Title>
                        Shahid Dr. Chamran Honarestan (Techincal School) — 2025
                        (Expected Graduation)
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
                                Currently enrolled, specializing in "network and
                                software"
                            </Highlight>
                        </Em>
                    </Card.Description>
                </Card.Body>
            </Card.Root>
        </Box>
    );
}
