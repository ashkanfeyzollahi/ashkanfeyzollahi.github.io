import AboutMe from "@/components/ui/about-me";
import ContactMe from "@/components/ui/contact-me";
import Education from "@/components/ui/education";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import Portfolios from "@/components/ui/portfolios";

import { Box, Center } from "@chakra-ui/react";

function App() {
    return (
        <>
            <Header />
            <Center margin="20px">
                <Box maxWidth="lg">
                    <AboutMe />
                    <Education />
                    <Portfolios />
                    <ContactMe />
                </Box>
            </Center>
            <Footer />
        </>
    );
}

export default App;
