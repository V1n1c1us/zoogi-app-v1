import { View, Text } from "native-base";
import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet } from "react-native";
import { LocationObject } from "expo-location";
import { useCallback, useRef } from "react";
import { MapMaker } from "./MapMaker";
import { PETSHOPS } from "../../../mocks";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { CustomBottomSheetModal } from "../../CustomBottomSheetModal";

type Props = {
  locationObject: LocationObject;
};

export const MapViewContainer = ({ locationObject }: Props) => {
  const mapRef = useRef<any>();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback((item) => {
    bottomSheetModalRef.current?.present();
    // Alert.alert(item);
    console.log(item);
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -27.586167,
          longitude: -48.523536,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation
        showsMyLocationButton
        ref={mapRef}
      >
        {/* <MapMaker petshops={PETSHOPS} />
         */}
        {PETSHOPS.map((item, index) => (
          <>
            <Marker
              key={index + 1}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              onPress={() => handlePresentModalPress(item.id)}
              // onPress={() => handleClickPetshop(item.id, item.avatar)}
            ></Marker>
            <CustomBottomSheetModal ref={bottomSheetModalRef} props={item} />
          </>
        ))}
      </MapView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
  },
});
