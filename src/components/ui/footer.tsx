import { Box, Center, Separator, Text } from "@chakra-ui/react";

export default function Footer(): React.JSX.Element {
    return (
        <Box marginTop="60px" padding="20px">
            <Separator marginBottom="20px" />
            <Center>
                <Text>&copy; All rights are reserved</Text>
            </Center>
        </Box>
    );
}
