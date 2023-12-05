import { Center, Heading, Text, VStack, ScrollView } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorAuthProps } from "../routes/auth.routes";
import Logo from "../assets/logo.svg";

export const SignIn = () => {
  const { navigate } = useNavigation<AuthNavigatorAuthProps>();

  const handleNewAccount = () => {
    navigate("signUp");
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
          <Heading mb={2}>Bem-vindo de volta!</Heading>
          <Text mb={5}>Entre com o seu e-mail para começar.</Text>

          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />

          <Button title="Entrar" />
        </Center>

        <Center mt={24}>
          <Text fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
};
