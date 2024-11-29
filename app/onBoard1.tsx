import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export default function OnBoard1() {
  const [board, setBoard] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO</Text>
      <Text style={styles.brand}>NIKE</Text>

      <View style={styles.decoration}>
        <Image
          source={require("../assets/images/nike-shoe-1.png")}
          style={styles.shoeImage}
        />
      </View>

      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, board === 1 && styles.activeIndicator]}>
          <TouchableOpacity
            onPress={() => router.push("/onBoard1")}
          ></TouchableOpacity>
        </View>
        <View style={[styles.indicator, board === 2 && styles.activeIndicator]}>
          <TouchableOpacity
            onPress={() => router.push("/onBoard2")}
          ></TouchableOpacity>
        </View>
        <View style={[styles.indicator, board === 3 && styles.activeIndicator]}>
          <TouchableOpacity
            onPress={() => router.push("/onBoard3")}
          ></TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onBoard2")}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: width * 0.08,
    color: "white",
    fontWeight: "600",
    marginBottom: height * 0.01,
  },
  brand: {
    fontSize: width * 0.1,
    fontWeight: "bold",
    color: "white",
    marginBottom: height * 0.02,
  },
  decoration: {
    marginBottom: height * 0.03,
  },
  shoeImage: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: "contain",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.02,
  },
  indicator: {
    width: width * 0.05,
    height: height * 0.01,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#FFD700",
    width: width * 0.06,
  },
  button: {
    backgroundColor: "#fff",
    width: width * 0.8,
    paddingVertical: height * 0.02,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: height * 0.05,
  },
  buttonText: {
    color: "#007bff",
    fontWeight: "600",
    fontSize: width * 0.05,
  },
});
