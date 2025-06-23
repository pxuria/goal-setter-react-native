import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
    item: {
        id: string;
        text: string;
    };
    onDelete: (id: string) => void;
}

const GoalItem = ({ item, onDelete }: Props) => {
    return (
        <View style={styles.goalItem} >
            <Pressable
                android_ripple={{ color: "#210644" }}
                onPress={onDelete.bind(this, item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{item.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        borderRadius: 8,
        backgroundColor: "#615ed5",
        marginBottom: 16,
        overflow: "hidden",
    },
    pressedItem: {
        opacity: 0.75,
        backgroundColor: "#f31282"
    },
    goalText: {
        color: "white",
        padding: 16,
        fontSize: 20,
        fontWeight: 500
    }
});

export default GoalItem