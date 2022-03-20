import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import Header from './src/components/Header';
import TodoItem from './src/components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn React Native' },
    { id: 3, text: 'Create Todo App' },
    { id: 4, text: 'Use Todo App' },
  ]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <SafeAreaView>
      <View style={tw`bg-gray-900 h-full`}>
        <Header />

        {/* Todo List */}
        <View style={tw`mx-8 my-8`}>
          <Text style={tw`text-white`}>Click to remove item</Text>
          <View style={tw`flex flex-col`}>
            {todos.map((todo) => (
              <TodoItem key={todo.id} item={todo} onPress={removeTodo} />
            ))}
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
