import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useCallback, useEffect, useState } from "react";
import { Category, Product } from "@/constants/interface";

const { width } = Dimensions.get("window");

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useState<string>("");
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(30);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [skip, limit, chosenCategory]);

  const getCategories = useCallback(async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const categories: Category[] = await response.json();
      setCategory(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      let url = chosenCategory
        ? `https://dummyjson.com/products/category/${chosenCategory}`
        : `https://dummyjson.com/products`;

      const response = await fetch(url);
      const productsData = await response.json();

      const { products, total }: { products: Product[]; total: number } =
        productsData;
      setProducts(products);
      setTotal(total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nike</Text>
        <MaterialIcons name="shopping-bag" size={24} color="black" />
      </View>

      {/* Search and Filter Section */}
      <View style={styles.searchContainer}>
        {/* Search Icon Inside Input */}
        <View style={styles.inputWithIcon}>
          <MaterialIcons
            name="search"
            size={20}
            color="black"
            style={styles.iconInsideInput}
          />
          <TextInput
            placeholder="Looking For Shoes..."
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        {/* Filter Icon Outside Input */}
        <View style={styles.inputIconContainer}>
          <MaterialIcons name="filter-list" size={20} color="white" />
        </View>
      </View>

      {/* Category Section */}
      <View>
        <Text style={{ marginHorizontal: 6, fontSize: 18, marginBottom: 16 }}>
          {" "}
          Select Category{" "}
        </Text>
      </View>

      {/* showing Category */}
      <View>
        <FlatList
          data={category}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.slug}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
          renderItem={({ item }) => {
            const isChosen = chosenCategory === item.slug;
            return (
              <TouchableOpacity
                style={[styles.chip, isChosen && { backgroundColor: "black" }]}
                onPress={() => setChosenCategory(item.slug)}
              >
                <Text style={{ color: isChosen ? "#fff" : "#000" }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Products FlatList */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="black"
            style={{ alignSelf: "center", marginVertical: 20 }}
          />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item: Product) => `${item.id}`}
            numColumns={2}
            ListHeaderComponent={
              <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
                Products
              </Text>
            }
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.thumbnail }}
                  style={styles.cardimg}
                />
                <View style={{ padding: 12 }}>
                  <Text style={{ fontWeight: "bold" }} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text numberOfLines={2}>{item.description}</Text>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F7F7F9",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 18,
    marginLeft: 10,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#0D6EFD",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  iconInsideInput: {
    marginHorizontal: 5,
  },
  inputIconContainer: {
    backgroundColor: "#0D6EFD",
    borderRadius: 50,
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
  },
  card: {
    flexDirection: "column",
    flex: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    margin: 10,
  },
  cardimg: {
    height: 120,
    resizeMode: "contain",
  },
});
