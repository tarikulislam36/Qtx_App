import { Redirect } from "expo-router";

const isAuthenticated = true;

export default function Index() {
  if (isAuthenticated) {
    return <Redirect href="/dashboard" />;
  }

  return <Redirect href="/home" />;
}
