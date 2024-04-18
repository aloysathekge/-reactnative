import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Accordion from "./Components/Accordion";
import data from "@/data/data";
export default function AccordionScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data.map((value, index) => {
        return <Accordion value={value} key={index} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
