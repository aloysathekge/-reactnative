import {
  Pressable,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Category } from "@/data/data";
import Chevron from "./Chevron";
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  value: Category;
};

const Accordion = ({ value }: Props) => {
  const open = useSharedValue(false);
  const listContentRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const progress = useDerivedValue(
    () => withTiming(open.value ? 1 : 0),
    [open]
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolation.CLAMP
    ),
  }));

  // ...

  useEffect(() => {
    runOnUI(() => {
      heightValue.value = measure(listContentRef)?.height!;
    });
  }, [listContentRef]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.titleContainer}
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              "worklet";
              heightValue.value = measure(listContentRef)?.height!;
            })();
          }
          open.value = !open.value;
        }}
      >
        <Text style={styles.textTitle}>{value.title}</Text>
        <Chevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listContentRef} style={styles.contentContainer}>
          {value.content.map((ticket, i) => {
            return (
              <TouchableOpacity key={i} style={styles.content}>
                <Text style={styles.contentText}>
                  Ticket Number: {ticket.ticketNumber}, Match Date:{" "}
                  {ticket.matchDate}, Match Details: {ticket.matchDetails}
                </Text>
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3EDFB",
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#0E56B3",
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  contentContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
  },
  content: {
    padding: 20,
    backgroundColor: "#D6E1F0",
    marginTop: 4,
  },
  contentText: {
    fontSize: 14,
    color: "black",
  },
});
