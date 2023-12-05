import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { Box, useTheme } from "native-base";

export const Routes = () => {
  const {
    colors: { gray },
  } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = gray[100];

  return (
    <Box flex={1} bg="gray.100">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  );
};
