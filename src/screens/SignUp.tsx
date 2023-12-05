import { Center, Heading, Text, VStack, ScrollView, Link } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/logo.svg";

export const SignUp = () => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Center my={10}>
          <Logo width={200} height={200} />
        </Center>

        <Center>
          <Heading mb={2}>Criar uma conta!</Heading>
          <Text mb={5}>Insira seus dados de acesso para começar.</Text>

          <Input placeholder="Nome" />

          <Input placeholder="CPF" />

          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Center mt={10}>
          <Button title="Login" variant="outline" onPress={handleGoBack} />

          <Text fontSize="sm" mb={3} fontFamily="body">
            Ao criar uma conta você está concordando com os
          </Text>
          <Link _text={{ color: "blue.500" }}>Termos de Uso e Serviço</Link>
        </Center>
      </VStack>
    </ScrollView>
  );
};
