import { useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`h-20 bg-gray-800`}>
      <View style={tw`h-full flex flex-row items-center mx-8`}>
        <Text style={tw`text-2xl text-white font-bold`}>Todo List</Text>
      </View>
    </View>
  );
};

export default Header;
