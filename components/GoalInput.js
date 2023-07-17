import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="할 일 추가하기"
              onPress={addGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="취소" onPress={props.onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    backgroundColor: "tomato",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    padding: 16,
    borderColor: "blue",
    backgroundColor: "lightgray",
    color: "#120438",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
