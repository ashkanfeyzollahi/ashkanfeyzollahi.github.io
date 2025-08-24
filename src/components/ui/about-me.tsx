import { Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { GoPerson } from "react-icons/go";

export default function AboutMe(): React.JSX.Element {
    return (
        <Box marginTop="40px" spaceY="20px">
            <Heading as="h2">
                <HStack>
                    <Icon>
                        <GoPerson></GoPerson>
                    </Icon>
                    <Text>About Me</Text>
                </HStack>
            </Heading>
            <Text>
                I am a highly motivated and self-driven software developer,
                currently 17 years old, who has cultivated a strong passion for
                programming and technology from an early age. Being entirely
                self-taught, I have dedicated countless hours to learning and
                mastering various programming languages, with particular
                proficiency in C, JavaScript, and Python. These languages have
                served as the foundation for many personal projects, allowing me
                to explore different paradigms of software development, from
                low-level system programming to dynamic web applications.
            </Text>
            <Text>
                My fascination with open-source software began almost as soon as
                I started coding. I have been deeply inspired by the
                collaborative and transparent nature of open-source communities,
                where individuals from around the world contribute their skills
                and creativity to build and improve software that is freely
                accessible to all. This interest has driven me to actively
                engage with open-source projects by studying their codebases,
                contributing bug fixes, and occasionally developing new
                features, which has helped me grow both technically and
                professionally.
            </Text>
            <Text>
                Despite my young age, I am committed to continuous learning and
                personal growth, constantly seeking out new challenges and
                opportunities to expand my knowledge and improve my coding
                abilities. I enjoy problem-solving and thrive in environments
                that push me to think critically and creatively. My goal is to
                leverage my skills not only to build efficient, reliable, and
                scalable software but also to contribute positively to the
                global tech community by participating in open-source
                initiatives.
            </Text>
            <Text>
                Looking ahead, I am eager to further develop my expertise
                through formal education and real-world experience, aspiring to
                become a software engineer who makes meaningful contributions to
                technology and society. I am passionate about using technology
                as a tool for innovation, collaboration, and positive change,
                and I am excited about the possibilities that lie ahead in my
                coding journey.
            </Text>
        </Box>
    );
}
