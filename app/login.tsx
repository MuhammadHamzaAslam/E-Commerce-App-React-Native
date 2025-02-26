import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const { width, height } = Dimensions.get("window");

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backArrow}>
          <FontAwesome6 name="arrow-left" size={20} color="black" />
        </Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Hello Again!</Text>
      <Text style={styles.subHeader}>
        Fill Your Details Or Continue With Social Media
      </Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>
            {passwordVisible ? (
              <FontAwesome6 name="eye" size={16} color="black" />
            ) : (
              <FontAwesome6 name="eye-slash" size={16} color="black" />
            )}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Recovery Password */}
      <Text style={styles.recovery}>Recovery Password</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign In With Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Sign In With Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signUp} onPress={() => router.push("/signup")}>
        New User? <Text style={styles.signUpLink}>Create Account</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.05,
  },
  backArrow: {
    fontSize: width * 0.07,
    marginTop: 10,
  },
  header: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  subHeader: {
    fontSize: width * 0.04,
    textAlign: "center",
    color: "#7d7d7d",
    marginBottom: height * 0.04,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f8f8f8",
    padding: width * 0.04,
    borderRadius: 8,
    fontSize: width * 0.045,
    marginBottom: height * 0.02,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f8f8f8",
    paddingHorizontal: width * 0.03,
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: width * 0.03,
    fontSize: width * 0.045,
  },
  eyeIcon: {
    fontSize: width * 0.05,
    marginRight: width * 0.02,
  },
  recovery: {
    textAlign: "right",
    marginTop: height * 0.01,
    fontSize: width * 0.035,
    color: "#007bff",
  },
  signInButton: {
    backgroundColor: "#007bff",
    paddingVertical: height * 0.015,
    borderRadius: 8,
    marginTop: height * 0.04,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: width * 0.045,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    paddingVertical: height * 0.015,
    borderRadius: 8,
    marginTop: height * 0.02,
    justifyContent: "center",
  },
  googleIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginRight: width * 0.03,
  },
  googleButtonText: {
    fontSize: width * 0.045,
    color: "#333",
  },
  signUp: {
    textAlign: "center",
    marginTop: height * 0.03,
    fontSize: width * 0.04,
  },
  signUpLink: {
    color: "#007bff",
    fontWeight: "600",
  },
});
