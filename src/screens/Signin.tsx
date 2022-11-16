import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { AppState } from "react-native";
import { useEffect, useRef, useState } from "react";

export function Signin() {
  const { signIn, user } = useAuth();

  return (
    <Center flex={1} bg='gray.900' p={7}>
      <Logo width={212} height={40} />
      <Button
        type='SECONDARY'
        title='Entrar con google'
        leftIcon={<Icon as={Fontisto} name='google' color='white' size='md' />}
        mt={12}
        onPress={signIn}
      />
      <Text color='white' textAlign='center' mt={4}>
        No utilizamos ningun información de su {"\n"} email para creacion de su
        cuenta.
      </Text>
    </Center>
  );
}
