import { Platform } from "react-native";
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Pets } from "../screens/Pets";
import { useTheme } from "native-base";
import { Petshop } from "../screens/Petshop";

type AuthRoutes = {
  home: undefined;
  profile: undefined;
  pets: undefined;
  petshop: undefined;
};

export type AuthNavigatorAuthProps = BottomTabNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AuthRoutes>();

export const AppRoutes = () => {
  const { colors, sizes } = useTheme();
  const iconSize = sizes[6];

  const isAndroidDevice = Platform.OS === "android";

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orange[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          // backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: isAndroidDevice ? "auto" : 86,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="map" size={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="pets"
        component={Pets}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pets" size={iconSize} color={color} />
          ),
        }}
      />

      <Screen
        name="petshop"
        component={Petshop}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="pets" size={iconSize} color={color} />
          ),
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  );
};
