import {
    Box,
    Heading,
    Highlight,
    HStack,
    Icon,
    Link,
    Text,
} from "@chakra-ui/react";
import { GrContactInfo } from "react-icons/gr";

export default function ContactMe(): React.JSX.Element {
    return (
        <Box marginTop="80px" spaceY="20px">
            <Heading as="h2">
                <HStack gap="15px">
                    <Icon>
                        <GrContactInfo></GrContactInfo>
                    </Icon>
                    <Text>Contact Me</Text>
                </HStack>
            </Heading>
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
        </Box>
    );
}
