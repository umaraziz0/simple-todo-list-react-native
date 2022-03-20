import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

const Header = () => {
  return (
    <View style={tw`h-20 bg-gray-800`}>
      <View style={tw`h-full flex flex-row items-center justify-center`}>
        <FontAwesome5 name="react" size={25} color="white" style={tw`mr-3`} />
        <Text style={tw`text-2xl text-white font-bold`}>Todo List</Text>
      </View>
    </View>
  );
};

export default Header;
