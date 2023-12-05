import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useNavigation, useRoute } from "@react-navigation/native";

import { View, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import IconPetTrimmer from "../assets/pet-trimmer.svg";
import IconPetBath from "../assets/pets-bath.svg";
import IconSyringe from "../assets/syringe.svg";
import Test from "../assets/pet-first-aid.svg";
import { Button, Text, useTheme } from "native-base";
import { Stars } from "../components/Starts";

export const MOCK_SERVICES = [
  {
    id: "2",
    icon: <IconPetBath />,
    label: "Banho",
    price: "R$ 50,00",
  },
  {
    id: "3",
    icon: <Test />,
    label: "Banho e Tosa",
    price: "R$ 50,00",
  },
  {
    id: "4",
    icon: <IconPetTrimmer />,
    label: "Tosa",
    price: "R$ 50,00",
  },
  {
    id: "5",
    icon: <IconSyringe />,
    label: "Vacinas",
    price: "R$ 50,00",
  },
];

export const Petshop = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: "https://marketplace.canva.com/EAFobYQvZZM/1/0/1600w/canva-post-instagram-pet-shop-banho-azul-XhIi6Z46Drc.jpg",
          }}
          style={{
            width: "100%",
            height: 300,
            borderBottomRightRadius: 30,
          }}
        />
        <TouchableOpacity style={styles.backToBtn} onPress={() => goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={styles.title}>adasdasdas</Text>
          <Stars />
        </View>

        <Text style={styles.small}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod
          iure laboriosam odit adipisci excepturi, cum repellendus, omnis culpa
          doloremque voluptatibus atque.
        </Text>

        {MOCK_SERVICES.map((item) => (
          <View style={styles.tags}>
            <View>
              <Text>{item.label}</Text>
              <Text>{item.price}</Text>
            </View>
            <Button
              bg="orange.500"
              fontWeight="bold"
              _pressed={{
                bg: "orange.400",
              }}
            >
              <Text color="white" fontWeight="semibold">
                Agendar
              </Text>
            </Button>
          </View>
        ))}
        {/* <FlatList
          data={MOCK_SERVICES}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 15 }}
          scrollEnabled
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tags}>
              <Text>{item.label}</Text>
            </View>
          )}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tags: {
    marginTop: 20,
    right: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontFamily: "medium",
  },
  small: {
    fontSize: 13,
    fontFamily: "regular",
    color: "gray",
    textAlign: "justify",
  },
  backToBtn: {
    marginLeft: 12,
    alignItems: "center",
    zIndex: 999,
    top: 50,
    position: "absolute",
    backgroundColor: "orange",
    padding: 5,
    borderRadius: 50,
  },
  container: {
    marginHorizontal: 12,
  },
});

// import { Box, FlatList, ScrollView, StatusBar, Text, View } from "native-base";
// import { useRoute } from "@react-navigation/native";
// import { Animated, Dimensions, SafeAreaView, StyleSheet } from "react-native";
// import { useRef } from "react";
// import { H_SCROLL_DISTANCE, H_MAX, H_MIN } from "./Petshop";

// const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

// export const Petshop = () => {
//   const { params } = useRoute();

//   console.log(params);

//   const scrollOffsetY = useRef(new Animated.Value(0)).current;
//   const headerSrollHeight = scrollOffsetY.interpolate({
//     inputRange: [0, H_SCROLL_DISTANCE],
//     outputRange: [H_MAX, H_MIN],
//     extrapolate: "clamp",
//   });

//   const imageScale = scrollOffsetY.interpolate({
//     inputRange: [0, H_MAX],
//     outputRange: [260, 160],
//     extrapolate: "clamp",
//   });

//   const data = [
//     { id: "1", title: "string" },
//     { id: "2", title: "string" },
//     { id: "2", title: "string" },
//   ];

//   return (
//     <View flex={1}>
//       <StatusBar barStyle={"light-content"} translucent={false} />
//       <SafeAreaView>
//         <View style={styles.upperHeaderPlaceholder}></View>
//       </SafeAreaView>

//       <SafeAreaView style={styles.header}>
//         <View style={styles.upperHeader}></View>
//         <View style={styles.lowerHeader}></View>
//       </SafeAreaView>

//       <ScrollView>
//         <View style={styles.paddingForHeader}></View>
//         <View style={styles.scrollViewContent}></View>
//       </ScrollView>
//     </View>
//     // <View flex={1}>
//     //   <StatusBar barStyle={"light-content"} translucent={false} />

//     //   <Animated.View
//     //     style={{
//     //       position: "absolute",
//     //       top: 0,
//     //       left: 0,
//     //       right: 0,
//     //       zIndex: 99,
//     //       width: "100%",
//     //       height: headerSrollHeight,
//     //       backgroundColor: imageScale ? "red" : "green",
//     //       alignItems: "center",
//     //       justifyContent: "center",
//     //       overflow: "hidden",
//     //     }}
//     //   >
//     //     <Animated.Image
//     //       source={{
//     //         uri: "https://marketplace.canva.com/EAFobYQvZZM/1/0/1600w/canva-post-instagram-pet-shop-banho-azul-XhIi6Z46Drc.jpg",
//     //       }}
//     //       style={{
//     //         marginTop: 10,
//     //         height: imageScale,
//     //         width: "100%",
//     //       }}
//     //     />
//     //   </Animated.View>

//     //   <FlatList
//     //     style={{ paddingTop: H_MAX }}
//     //     data={data}
//     //     keyExtractor={(item) => item.id}
//     //     showsVerticalScrollIndicator={false}
//     //     renderItem={({ item }) => (
//     //       <View style={{ height: 500 }}>
//     //         <Text>{item.title}</Text>
//     //       </View>
//     //     )}
//     //     onScroll={Animated.event(
//     //       [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
//     //       { useNativeDriver: false }
//     //     )}
//     //     scrollEventThrottle={16}
//     //   />
//     // </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     position: "absolute",
//     width: "100%",
//     height: 136,
//     backgroundColor: "orange",
//   },
//   upperHeaderPlaceholder: {
//     height: 40,
//   },
//   upperHeader: {
//     height: 50,
//   },
//   lowerHeader: {
//     height: 40,
//   },
//   paddingForHeader: {
//     height: 96,
//   },
//   scrollViewContent: {
//     height: WINDOW_WIDTH * 2,
//     backgroundColor: "white",
//   },
// });
