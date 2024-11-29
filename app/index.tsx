import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onBoard1");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/nike-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>NIKE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    fontSize: 60,
    fontWeight: "bold",
  },
});
