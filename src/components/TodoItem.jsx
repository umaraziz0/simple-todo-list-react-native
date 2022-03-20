import { Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const TodoItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item.id)}
      style={tw`px-4 py-3 border border-white rounded-lg my-2`}
    >
      <Text style={tw`text-xl text-white`}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;
