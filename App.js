import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import Header from './src/components/Header';
import TodoItem from './src/components/TodoItem';
import tw from 'twrnc';

export default function App() {
  const [text, setText] = useState('');

  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn React Native' },
    { id: 3, text: 'Create Todo App' },
    { id: 4, text: 'Use Todo App' },
  ]);

  const [error, setError] = useState('');

  const handleChange = (item) => {
    setText(item);
  };

  const createTodo = () => {
    if (text.length === 0) {
      setError('Please enter an item.');
    } else {
      setTodos((prevTodos) => {
        return [{ id: Math.random(), text }, ...prevTodos];
      });

      setError('');
    }
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <SafeAreaView>
      <View style={tw`bg-gray-900 h-full`}>
        <ScrollView>
          <Header />

          <View style={tw`mx-8 my-8`}>
            <View style={tw`mb-8`}>
              <TextInput
                style={tw`text-white border-b border-white text-lg`}
                placeholder="Add new item..."
                placeholderTextColor={'#6b7280'}
                onChangeText={handleChange}
                onSubmitEditing={() => createTodo()}
              />
              {!!error && <Text style={tw`text-red-500 mt-2`}>{error}</Text>}
            </View>

            <View style={tw`flex flex-col`}>
              {todos.map((todo) => (
                <TodoItem key={todo.id} item={todo} onPress={removeTodo} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <StatusBar backgroundColor="black" style="light" />
    </SafeAreaView>
  );
}
