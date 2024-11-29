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
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function SignupForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <FontAwesome6 name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Register Account</Text>
      <Text style={styles.subHeader}>
        Fill Your Details Or Continue With Social Media
      </Text>

      {/* Name Input */}
      <TextInput style={styles.input} placeholder="Your Name" />

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

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => router.push("/(tabs)")}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign Up With Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Sign Up With Google</Text>
      </TouchableOpacity>

      {/* Log In Link */}
      <Text style={styles.logIn} onPress={() => router.back()}>
        Already Have Account? <Text style={styles.logInLink}>Log In</Text>
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
    marginTop: 10,
    left: width * 0.05,
  },
  backArrow: {
    fontSize: width * 0.07,
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
  signUpButton: {
    backgroundColor: "#007bff",
    paddingVertical: height * 0.015,
    borderRadius: 8,
    marginTop: height * 0.04,
    alignItems: "center",
  },
  signUpButtonText: {
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
  logIn: {
    textAlign: "center",
    marginTop: height * 0.03,
    fontSize: width * 0.04,
  },
  logInLink: {
    color: "#007bff",
    fontWeight: "600",
  },
});
