import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface Props {
    addGoalHandler: (val1: string) => void;
}

const GoalInput = ({ addGoalHandler }: Props) => {
    const [goalsText, setGoalText] = useState<string>("");

    function getInputHandler(enteredText: string) {
        setGoalText(enteredText)
    }

    function addGoal() {
        if (goalsText !== "") {
            addGoalHandler(goalsText);
            setGoalText("");
        } else return;
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Add goal'
                style={styles.textInput}
                value={goalsText}
                onChangeText={getInputHandler}
            />
            <Button
                title='Add GOAL'
                onPress={addGoal}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        // flex: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        flex: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 8
    },
})

export default GoalInput