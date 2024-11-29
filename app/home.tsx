import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Home() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          paddingHorizontal: 10, 
          paddingVertical : 10
        }}
      >
        {/* Menu Icon */}
        <MaterialIcons name="menu" size={24} color="black" />

        {/* Center Title */}
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nike</Text>

        {/* Shopping Bag Icon */}
        <MaterialIcons name="shopping-bag" size={24} color="black" />
      </View>
    </View>
  );
}
