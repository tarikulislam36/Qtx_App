import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ title: "Home" }} />

      <Tabs.Screen name="lead" options={{ title: "Leads" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
    </Tabs>
  );
}
