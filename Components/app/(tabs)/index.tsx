import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import data from "@/data/data";
import Accordion from "@/app/Accordion/Components/Accordion";
import AccordionScreen from "../Accordion/AccordionScreen";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AccordionScreen />
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
