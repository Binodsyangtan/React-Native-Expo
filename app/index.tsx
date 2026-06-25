// app/index.tsx
import { Redirect } from "expo-router";
import { useRootNavigationState } from "expo-router";

export default function Index() {
  const isAuth = false;
  const navigationState = useRootNavigationState();

  // Don't render anything until navigator is mounted
  if (!navigationState?.key) return null;

  return <Redirect href={isAuth ? "/(tabs)" : "/(auth)/login"} />;
}