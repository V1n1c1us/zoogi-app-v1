import {
  Center,
  Flex,
  VStack,
  View,
  Text,
  ScrollView,
  Box,
  Button,
  HStack,
  Slider,
  FlatList,
} from "native-base";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Input } from "../components/Input";
import { StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { Fab } from "native-base";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { MapViewContainer } from "../components/Home/Maps/MapView";
import { useRequestPermisson } from "../components/Home/hooks/useRequestPermisson";
import { BottomSheetContainer } from "../components/Home/BottomSheet";

import IconPetTrimmer from "../assets/pet-trimmer.svg";
import IconPetBath from "../assets/pets-bath.svg";
import IconSyringe from "../assets/syringe.svg";
import Test from "../assets/pet-first-aid.svg";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export const MOCK_SERVICES = [
  {
    id: 2,
    icon: <IconPetBath />,
    label: "Banho",
  },
  {
    id: 3,
    icon: <Test />,
    label: "Banho e Tosa",
  },
  {
    id: 4,
    icon: <IconPetTrimmer />,
    label: "Tosa",
  },
  {
    id: 5,
    icon: <IconSyringe />,
    label: "Vacinas",
  },
];

export const Home = () => {
  const { location, requestLocationPermisson } = useRequestPermisson();

  useEffect(() => {
    requestLocationPermisson();
  }, []);

  console.log({
    LAT: location?.coords.latitude,
    LONG: location?.coords.longitude,
  });

  // const mapRef = useRef<any>();

  // const focusMap = () => {
  //   mapRef.current.animateToRegion({
  //     latitude: location?.coords.latitude,
  //     longitude: location?.coords.longitude,
  //     latitudeDelta: 0.005,
  //     longitudeDelta: 0.005,
  //   });
  // };
  // console.log(location?.coords.latitude, location?.coords.longitude);

  console.log(location);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <BottomSheetModalProvider> */}
      {/* <VStack flex={1}> */}
      <MapViewContainer locationObject={location} />
      <View position="absolute" width="90%" mt={12} ml={"5%"} mr={"5%"}>
        <FlatList
          data={MOCK_SERVICES}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 15 }}
          scrollEnabled
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.services}>
              <Button
                variant={"solid"}
                w="90"
                height={20}
                bg={"orange.400"}
                borderColor="orange.500"
                borderWidth={2}
                rounded="lg"
                p={2}
                _pressed={{
                  backgroundColor: "orange.300",
                }}
              >
                <Text>{item.label}</Text>
              </Button>
            </View>
          )}
        />
        {/* <Flex>
          <Center>
            <Input
              mt={5}
              variant={"filled"}
              borderColor={"orange.500"}
              borderWidth={3}
              InputRightElement={<Icon name="search" size={30} mr="5" />}
              placeholder="Buscar"
            />
          </Center>
        </Flex> */}
      </View>
      {/* <Fab
        onPress={focusMap}
        renderInPortal={false}
        shadow={6}
        size="sm"
        backgroundColor="orange.400"
        icon={<Icon color="white" name="my-location" size={15} />}
      /> */}
      {/* </VStack> */}

      {/* <BottomSheetContainer /> */}
      {/* </BottomSheetModalProvider> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
  },
  services: {
    right: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
