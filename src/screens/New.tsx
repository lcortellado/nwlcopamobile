import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";

import Logo from "../assets/logo.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {
  return (
    <VStack flex={1} bg='gray.900'>
      <Header title='Crear nuevo balon' />
      <VStack mt={8} mx={5} alignItems='center'>
        <Logo />
        <Heading
          fontFamily='heading'
          color='white'
          fontSize='xl'
          my={8}
          textAlign='center'>
          Cree su propio balon de copa y comparti entre amigos!
        </Heading>

        <Input mb={2} placeholder='Cual es el nombre del balon?' />
        <Button title='CREAR MI BALON' />

        <Text color='gray.300' fontSize='sm' textAlign='center' px={10} mt={4}>
          Despues de crear su balon, usted recibirá un codigo único que podra
          usar para invitar a otras personas.
        </Text>
      </VStack>
    </VStack>
  );
}
