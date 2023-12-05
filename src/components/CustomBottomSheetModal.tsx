import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Button, Text, View } from "native-base";
import { forwardRef, useCallback, useEffect, useMemo } from "react";
export type Ref = BottomSheetModal;

export const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
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

  console.log(props);
  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackDrop}
    >
      <View>
        <Text>{props.props.name}</Text>
        <Button onPress={() => dismiss()}>
          <Text>Fechar</Text>
        </Button>
      </View>
    </BottomSheetModal>
  );
});
