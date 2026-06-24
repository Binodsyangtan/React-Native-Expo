import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // headerStyle: { backgroundColor: "red" },
        // headerTintColor: "white",
        // animation: "slide_from_right"
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );

  //   return (
  //     <Tabs>
  //       <Tabs.Screen
  //         name="index"
  //         options={{
  //           title: "Home",
  //           tabBarIcon: ({ color }) => (
  //             <Ionicons name="home" size={24} color={color} />
  //           ),
  //         }}
  //       />

  //       <Tabs.Screen
  //         name="profile"
  //         options={{
  //           title: "Profile",
  //           tabBarIcon: ({ color }) => (
  //             <Ionicons name="person-outline" size={24} color={color} />
  //           ),
  //         }}
  //       />

  //       <Tabs.Screen
  //         name="settings"
  //         options={{
  //           title: "settings",
  //           tabBarIcon: ({ color }) => (
  //             <Ionicons name="settings-outline" size={24} color={color}
  //             />
  //           ),
  //         }}
  //       />

  //     </Tabs>
  //   );
}
