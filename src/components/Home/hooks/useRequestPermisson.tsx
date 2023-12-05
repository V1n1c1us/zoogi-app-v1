import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useState } from "react";

export const useRequestPermisson = () => {
  const [location, setLocation] = useState<LocationObject>();

  const requestLocationPermisson = async () => {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  };

  return {
    location,
    setLocation,
    requestLocationPermisson,
  };
};
