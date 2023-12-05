import {
  Container,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  VStack,
  View,
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import ParallaxScrollView from "../components/ParallaxScrollView";
import { StyleSheet, Dimensions, Animated } from "react-native";
import { useRef } from "react";
import img from "../assets/logo.svg";
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const H_MAX = 250;
const H_MIN = 150;
const H_SCROLL_DISTANCE = H_MAX - H_MIN;

export const Petshop = () => {
  const { params } = useRoute();

  console.log(params);

  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerSrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX, H_MIN],
    extrapolate: "clamp",
  });

  const data = [
    { id: "1", title: "string" },
    { id: "2", title: "string" },
  ];

  return (
    <View flex={1}>
      <StatusBar barStyle={"light-content"} translucent={false} />

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
          width: "100%",
          height: headerSrollHeight,
          padding: 10,
          backgroundColor: "gray",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Text>Meu Header</Text>
        <Image
          source={require("../assets/logo.svg")}
          style={{
            height: 60,
            width: 60,
          }}
          resizeMode="contain"
        />
      </Animated.View>

      <FlatList
        style={{ paddingTop: H_MAX }}
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ height: 500 }}>
            <Text>{item.title}</Text>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  paddingForHeader: {
    height: 136,
  },
  scrollViewContent: {
    height: WINDOW_WIDTH * 2,
    backgroundColor: "white",
  },
});
