import BottomSheet from "@gorhom/bottom-sheet";
import {
  View,
  Text,
  ScrollView,
  VStack,
  Flex,
  Button,
  Skeleton,
  HStack,
} from "native-base";
import { useCallback, useMemo } from "react";

import IconPetTrimmer from "../../../assets/pet-trimmer.svg";
import IconPetBath from "../../../assets/pets-bath.svg";
import IconSyringe from "../../../assets/syringe.svg";
import Test from "../../../assets/pet-first-aid.svg";

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

export const BottomSheetContainer = () => {
  const snapPoints = useMemo(() => ["8%", "25%"], []);

  return (
    <>
      <BottomSheet
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "orange" }}
        overDragResistanceFactor={0}
      >
        <View px={5}>
          <Text fontSize="2xl" fontWeight="semibold">
            Serviços
          </Text>

          <ScrollView
            size="full"
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            key={1}
          >
            {MOCK_SERVICES.map((item, index) => (
              <Flex justifyItems="center" alignItems="center" p={1} mt={2}>
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
                  <Flex alignItems="center">{item.icon}</Flex>
                </Button>

                <Text fontSize={"lg"} mt={"2"}>
                  {item.label}
                </Text>
              </Flex>
            ))}
          </ScrollView>
        </View>
      </BottomSheet>
    </>
  );
};
