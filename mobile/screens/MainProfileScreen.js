import React,{ useState, useEffect } from "react";
import { View,StyleSheet,Platform, Button,TouchableOpacity } from "react-native";
import { Header } from "react-navigation-stack";
import { Avatar,Text,Icon,Input } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from "react-redux";



MainProfileScreen.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam("name")
});

export default function MainProfileScreen({ navigation }) {
//   const dispatch = useDispatch();
//   const selfUser = useSelector(state => state.selfUser);
//   const conversations = useSelector(state => state.conversations);
//   const userId = navigation.getParam("userId");
//   const messages = conversations[userId].messages;
const [image, setImage] = useState(null);
const [username, setUserName] = useState('');
const [bio, setBio] = useState('');
const dispatch = useDispatch();

useEffect(() => {
  (async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  })();
}, []);

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style={{ flex: 1, top: 10}}>
      
            <View style={style.contaienr}>
              <TouchableOpacity onPress={pickImage}>
              <Avatar
                  size="xlarge"
                  title="AK"
                  rounded
                  source=  {{uri: image}}/>
              </TouchableOpacity>
      
     
            </View>
           
            <Text style={{textAlign: 'center'}} h3>Select Photo</Text>
           
           <View style={style.contaienr}>
                <Input
                    value = {username}
                    onChangeText = {text => setUserName(text)}
                    autoCorrect={false}
                    placeholder='Enter Username'
                    
                />
                <Input
                    value = {bio}
                    onChangeText = {text => setBio(text)}
                    autoCorrect={false}
                    placeholder='Enter Bio'
                    
                />
                <Button 
                  title='Save'
                  onPress={() => {
            
                    dispatch({ type: "server/join", data: {username: username, bio: bio, avatarImg: image, name: navigation.getParam('name')} });
                    navigation.navigate("Home");
                  }}
                />
           </View>
          
       
    </View>
  );
}
const style = StyleSheet.create({
    contaienr: {
        padding: 25,
        alignItems: 'center',
        
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        padding: 10
    },
})