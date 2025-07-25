import { AbsoluteCenter, Box, Button, Center, Flex, Heading, Image, Link, Text, VStack, chakra } from "@chakra-ui/react";
import { Cascadia_Mono } from "next/font/google";
import { useState } from "react";
import Questions from "@/jswtf.json";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';

const cascadiaMono = Cascadia_Mono({
  subsets: ["latin"]
});

export default function Home() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<number>();
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <>
      {questionNumber === 0 && (
        <AbsoluteCenter className={cascadiaMono.className}>
          <VStack>
            <Heading fontSize="6xl" position="relative" fontWeight="bold">
              <chakra.span color="array">{"[ ] "}</chakra.span>
              <chakra.span color="symbol">+</chakra.span>
              <chakra.span color="string">{" \"wtf\""}</chakra.span>

              <Box
                position="absolute"
                top="-5em"
                opacity={0}
                zIndex={-1}
                _hover={{ opacity: 1, transition: "all 60s linear" }}
              >
                <Image
                  alt="json"
                  src="https://cdn.discordapp.com/attachments/1166120048071557201/1398342688096518184/whNwkEQYWLFJA8ij0WyOOAD5xhQ.png?ex=6885039c&is=6883b21c&hm=3dfab4fc6aef1910435785b9988de3235fe00bfedd280b223ad12aa7b6bfacf8&"
                />
              </Box>
            </Heading>
            <Heading mt={8} fontSize="2xl" fontWeight="normal" fontStyle="italic" color="gray.400">{"How well do you know JavaScript's Operations?"}</Heading>

            <Button
              fontFamily="arial"
              fontWeight="bold"
              background="#e59f01"
              _hover={{
                background: "#cc8801"
              }}
              rounded="lg"
              fontSize="xl"
              mt={10}
              py={6}
              px={20}
              onClick={() => setQuestionNumber(1)}
            >
              Start Quiz
            </Button>
          </VStack>
        </AbsoluteCenter>
      )}

      {questionNumber > 0 && questionNumber <= Questions.length && (
        <Flex
          direction="column"
          alignItems="center"
          className={cascadiaMono.className}
          padding={5}
        >
          <Text fontSize="sm" color="gray.400">Question {questionNumber}/{Questions.length}</Text>

          <Center
            textAlign="center"
            marginTop={10}
            padding={2}
            border="3px solid"
            borderColor="gray.400"
            rounded="lg"
            width="30vw"
          >
            {/* <Text>{Questions[questionNumber - 1].question}</Text> */}
            <SyntaxHighlighter language="javascript" style={solarizedDarkAtom} customStyle={{
              background: "transparent",
              width: "max-content",
              fontSize: "16px"
            }}>
              {Questions[questionNumber - 1].question}
            </SyntaxHighlighter>
          </Center>

          {userAnswer !== undefined && (
            <Box minHeight="3em" width="30vw" p={5} my={10} background={userAnswer === Questions[questionNumber - 1].answer ? "#0d241e" : "#2c1a0c"} rounded="lg" border="2px solid" borderColor="gray.500">
              <Text fontSize="sm">
                {Questions[questionNumber - 1].explanation}
              </Text>
            </Box>
          )}


          <VStack width="30vw" gap={2} mt={5}>
            {Questions[questionNumber - 1].choices.map((choice, index) => (
              <Button
                key={index}
                width="100%"
                color="white"
                background={userAnswer === undefined ? "gray.800" : index === Questions[questionNumber - 1].answer ? "#0d241e" : index === userAnswer ? "#2c1a0c" : "gray.900"}
                border="2px solid"
                borderColor="gray.500"
                height="4em"
                onClick={() => {
                  if (userAnswer === undefined) {
                    setUserAnswer(index);
                  }
                }}
              >
                {choice}
              </Button>
            ))}

            {userAnswer !== undefined && (
              <Button
                fontFamily="arial"
                fontWeight="bold"
                background="#e59f01"
                _hover={{
                  background: "#cc8801"
                }}
                rounded="lg"
                fontSize="lg"
                mt={10}
                py={6}
                px={20}
                onClick={() => {
                  if (userAnswer === Questions[questionNumber - 1].answer) {
                    setCorrectAnswers(correctAnswers + 1);
                  }
                  setUserAnswer(undefined);
                  setQuestionNumber(questionNumber + 1);
                }}
              >
                Next Question
              </Button>
            )}
          </VStack>
        </Flex>
      )}

      {questionNumber > Questions.length && (
        <AbsoluteCenter className={cascadiaMono.className}>
          <VStack>
            <Heading fontSize="6xl" fontWeight="bold">
              <chakra.span color="array">{"[ ] "}</chakra.span>
              <chakra.span color="symbol">+</chakra.span>
              <chakra.span color="string">{" \"Quiz Completed!\""}</chakra.span>
            </Heading>
            <Text fontSize="2xl" color="gray.400" mt={4}>
              You answered {correctAnswers} out of {Questions.length} questions correctly!
            </Text>
          </VStack>
        </AbsoluteCenter>
      )}

      <Text position="absolute" bottom={2} left="50%" transform="translateX(-50%)" fontSize="sm">
        Inspired by <Link href="https://jsdate.wtf/" target="_blank" color="array">jsdate.wtf</Link> by <Link href="https://samwho.dev/" target="_blank" color="array">samwho</Link>. Created by <Link href="https://github.com/Nemika-Haj/" target="_blank" color="array">Nemika</Link> & <Link href="https://github.com/xZexiion/" target="_blank" color="array">xZexiion</Link>
      </Text>
    </>
  );
}
