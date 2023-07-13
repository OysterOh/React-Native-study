import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [todoGoals, setTodoGoals] = useState([]);

  //사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수 onChangeText
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  //버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = () => {
    // console.log(enteredGoalText);

    //setTodoGoals([...todoGoals, enteredGoalText]); //([...기존에, 추가])

    //useState로 관리하는 상태 변수의 setter 안에 콜백 함수를 작성하면,
    //그 콜백 함수의 매개값은 항상 해당 상태 변수의 최신 값이 전달된다.
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    console.log(todoGoals);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="할 일을 입력하세요!"
          onChangeText={goalInputHandler}
        />
        <Button title="할 일 추가하기" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* ScrollView는 전체 화면이 렌더링 될 때 안의 항목들을 전부 렌더링한다.
          이로 인해 성능의 저하가 발생할 수 있다.
          (보이지 않는 영역까지 렌더링을 진행하기 때문에 목록이 많다면 로딩이 길어진다.) 
          FlatList는 보이는 영역만 일단 렌더링을 진행하고, 
          나머지 항목들은 스크롤 움직임이 발생하면 렌더링을 진행한다.*/}
        <FlatList
          data={todoGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
    backgroundColor: "skyblue",
  },
});
