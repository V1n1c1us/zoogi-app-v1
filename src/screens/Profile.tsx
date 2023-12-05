import BottomSheet from "@gorhom/bottom-sheet";
import { Center, Text, View } from "native-base";
import { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Profile = () => {
  const snapPOints = useMemo(() => ["15%", "50%", "70%"], []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Center flex={1}>
        <Text>Profile</Text>
        <BottomSheet snapPoints={snapPOints}>
          <View>
            <Text>This is awsome!</Text>
          </View>
        </BottomSheet>
      </Center>
    </GestureHandlerRootView>
  );
};
