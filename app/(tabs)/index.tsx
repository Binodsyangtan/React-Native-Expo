import { Link } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "@/constants";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);

  // Text
  const renderText = () => {
    return <Text>Hello world, this is my first project</Text>;
  };

  // Pressable
  const renderPressable = () => {
    return (
      <Pressable
        onPress={() => alert("Button pressed")}
        style={{
          backgroundColor: "gray",
          padding: 15,
          borderRadius: 8,
          margin: 24,
          alignItems: "center",
          justifyContent: "center",
          width: 150,
        }}
      >
        <Text style={{ color: "red" }}>Press</Text>
      </Pressable>
    );
  };

  // Native Button
  const renderButton = () => {
    return (
      <Button
        title="Login"
        onPress={() => alert("Button pressed")}
      />
    );
  };

  // Activity Indicator
  const renderActivityIndicator = () => {
    return <ActivityIndicator size="large" />;
  };

  // Switch
  const renderSwitch = () => {
    return (
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
      />
    );
  };

  // Link
  const renderLink = () => {
    return (
      <Link href="/profile">
        <Text>Go to Profile</Text>
      </Link>
    );
  };

  // FlatList
  const renderFlatList = () => {
    return (
      <FlatList
        data={["React", "Next.js", "React Native"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text
            style={{
              fontSize: 24,
              marginBottom: 10,
            }}
          >
            {item}
          </Text>
        )}
        contentContainerStyle={{
          padding: 20,
        }}
      />
    );
  };

  // ScrollView
  const renderScrollView = () => {
    return (
      <ScrollView>
        {data.map((item, index) => (
          <View key={index}>
            <Text
              style={{
                marginTop: 25,
                padding: 16,
              }}
            >
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderScrollView()}

      {/* Uncomment to test components */}

      {/* {renderText()} */}
      {/* {renderPressable()} */}
      {/* {renderButton()} */}
      {/* {renderActivityIndicator()} */}
      {/* {renderSwitch()} */}
      {/* {renderLink()} */}
      {/* {renderFlatList()} */}
    </SafeAreaView>
  );
}