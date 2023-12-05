import { View, StyleSheet, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

const stars = [0, 0, 0, 0, 0];
const notas = 3.5;
const startsTeste = {
  0: "star-outline",
  1: "star-half",
  2: "star-rate",
};

export const Stars = () => {
  const floor = Math.floor(notas);
  const left = notas - floor;

  for (var i = 0; i < floor; i++) {
    stars[i] = 2;
  }

  if (left > 0) {
    stars[i] = 1;
  }

  console.log(left);
  return (
    <View style={styles.container}>
      {stars.map((i, k) => (
        <View>
          <Icon name={startsTeste[i]} size={30} color={"gold"} />
        </View>
      ))}
      <Text>{notas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
