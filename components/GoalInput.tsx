import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

interface Props {
    modalOpen: boolean;
    closeAddGoalHandler: () => void;
    addGoalHandler: (val1: string) => void;
}

const GoalInput = ({ modalOpen, addGoalHandler, closeAddGoalHandler }: Props) => {
    const [goalsText, setGoalText] = useState<string>("");

    function getInputHandler(enteredText: string) {
        setGoalText(enteredText)
    }

    function addGoal() {
        if (goalsText !== "") {
            addGoalHandler(goalsText);
            setGoalText("");
            closeAddGoalHandler();
        } else return;
    }



    return (
        <Modal visible={modalOpen} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    placeholder='Add goal'
                    style={styles.textInput}
                    value={goalsText}
                    onChangeText={getInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            color="#f31282"
                            title='Cancel'
                            onPress={closeAddGoalHandler}
                        />
                    </View>

                    <View style={styles.button}>
                        <Button
                            color="#b180f0"
                            title='Add GOAL'
                            onPress={addGoal}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // marginTop: 24,
        justifyContent: "center",
        paddingBottom: 24,
        paddingInline: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: "#311b6b"
        // flex: 20
    },
    image: {
        width: 100,
        height: 100,
        marginInline: "auto",
        marginBottom: 24
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        borderRadius: 6,
        padding: 10,
        color: "#120438",
        width: '100%'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8

    },
    button: {
        width: '50%',
        borderRadius: 6,
        overflow: 'hidden'
    }
})

export default GoalInput