import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수 onChangeText
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    //할 일 추가하기 후 입력 값 비우기
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="할 일을 입력하세요!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="할 일 추가하기" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    backgroundColor: "tomato",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
