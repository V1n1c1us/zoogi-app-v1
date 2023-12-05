import { Callout, Marker } from "react-native-maps";
import { PetShopType } from "../../../mocks";
import {
  View,
  Text,
  Image,
  Avatar,
  Flex,
  HStack,
  Box,
  Button,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useRef, useMemo, useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomBottomSheetModal } from "../../CustomBottomSheetModal";

type MakerProps = {
  petshops: Array<PetShopType>;
};

export const MapMaker = ({ petshops }: MakerProps) => {
  const { navigate } = useNavigation();
  const handleClickPetshop = (petshopId: string, image: string) => {
    navigate("petshop", {
      id: petshopId,
      image: image,
    });
    console.log(petshopId);
  };
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handle = () => {
    bottomSheetRef.current?.present();
  };

  const snapPoints = useMemo(() => ["25%"], []);
  const { dismiss } = useBottomSheetModal();
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  return (
    <>
      <GestureHandlerRootView>
        {petshops.map((item, index) => (
          <>
            <Marker
              key={index + 1}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              // onPress={() => handleClickPetshop(item.id, item.avatar)}
              onPress={handle}
            />
          </>
        ))}

        {/* <CustomBottomSheetModal ref={bottomSheetRef} props={petshops} /> */}
      </GestureHandlerRootView>
    </>
  );
};

// <Callout>
// <View
//   justifyContent="center"
//   alignItems="center"
//   style={{
//     width: 200,
//     height: 80,
//   }}
// >
//   <Flex flexDir="row">
//     <Box>
//       <Avatar
//         bg="indigo.500"
//         source={{
//           uri: item.avatar,
//         }}
//         size="lg"
//       />
//     </Box>
//     <Box padding={1} ml={3}>
//       <Text>{item.name}</Text>
//       <Text>{item.address}</Text>
//       <Text>{item.address}</Text>
//       <Button
//         onPress={() => handleClickPetshop(item.id, item.avatar)}
//       >
//         Visitar
//       </Button>
//     </Box>
//   </Flex>
//  <Image
//   source={{
//     uri: "https://marketplace.canva.com/EAFobYQvZZM/1/0/1600w/canva-post-instagram-pet-shop-banho-azul-XhIi6Z46Drc.jpg",
//   }}
//   style={{
//     height: 80,
//     width: 80,
//   }}
// />
// </View>
// </Callout>
