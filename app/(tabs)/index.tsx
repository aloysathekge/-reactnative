import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import AccordionScreen from "../Accordion/AccordionScreen";
import AuthScreen from "../Supabase/Components/AuthScreen";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <AccordionScreen /> */}
      <AuthScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
