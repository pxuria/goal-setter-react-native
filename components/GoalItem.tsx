import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text }: { text: string; }) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 8,
        backgroundColor: "#615ed5",
        padding: 16,
        marginBottom: 16,
    },
    goalText: {
        color: "white",
        fontSize: 20,
        fontWeight: 500
    }
});

export default GoalItem