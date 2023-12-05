import { Input as NativeBaseInput, IInputProps } from "native-base";

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      size="2xl"
      h={12}
      px={4}
      rounded={10}
      fontSize="md"
      mb={4}
      _focus={{
        bg: "white",
        borderWidth: 1,
        borderColor: "gray.200",
      }}
      {...rest}
    />
  );
};
