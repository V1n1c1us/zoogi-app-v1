import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

export const Button = ({ title, variant = "solid", ...rest }: Props) => {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg={variant === "outline" ? "transparent" : "orange.500"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="orange.500"
      rounded="sm"
      _pressed={{
        bg: "orange.400",
      }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "orange.500" : "white"}
        fontWeight="bold"
        fontSize="lg"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
