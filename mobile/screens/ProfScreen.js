import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView
 
} from "react-native";
import { useDispatch } from "react-redux";
import { Avatar,Text,Icon } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native-gesture-handler";



export default function ProfScreen({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("Akmal");
  const [phoneNumber, setPhoneNumber] = useState("+82 10-2702-0026");
  const [userName, setUserName] = useState("@Akmalkhon");
  const [Bio, setBio] = useState("Life is perfect");
  return (
    
    <View >
      <ScrollView>
        <View>
        <LinearGradient
        colors={['#363A44', '#363A44', '#363A44']}
        style={style.contaienr}>
            <View style={{flexDirection: "row"}}>
            <Avatar
            size="large"
            title="AK"
            rounded
            source=  {require("../assets/photo.jpeg")}
/>
            <Text style={style.text}
             h4>{username}</Text>
            </View>
            </LinearGradient>
        </View>
        <View>
            <Text style={{fontSize: 20,color: '#1A50D8', padding: 10}}>
                  Account
            </Text>
            <View  style={style.Container}>
            
              <TextInput
               
                //onPress={onPress}
                value={phoneNumber}
                onChangeText= {(val)=> setPhoneNumber(val)}
            />
            <Text style={{paddingTop: 6}}>Tap to change phone number</Text>
            </View>
            
                    
            <View  style={style.Container}>
           
       
      
              <TextInput
               
                //onPress={onPress}
                value={userName}
                onChangeText= {(val)=> setPhoneNumber(val)}
            />
            <Text style={{paddingTop: 6}}>Username</Text>
            </View>
            <View  style={style.Container}>
              <TextInput
               
                //onPress={onPress}
                value={Bio}
                onChangeText= {(val)=> setPhoneNumber(val)}
            />
            <Text style={{paddingTop: 6}}>Add new words about yourself</Text>
            </View>

        </View>
            <View style={{backgroundColor: "#E8DFDF"}}>
                                <Text></Text>
            </View>
        <View>
           
                <Text style={{fontSize: 20,color: '#1A50D8', padding: 10}}>
                  Settings
            </Text>
            <View  style={style.Container1}>
            <Icon style={{padding: 6}}
                 reverseColor
                    name='lock'
                    type='font-awesome'
                    size={25}
            />
              <Text style={{paddingTop: 6,fontSize: 19}}>Privacy and Security</Text>
            </View>
            
            <View  style={style.Container1}>
            <Icon style={{padding: 6}}
                 reverseColor
                    name='question-circle'
                    type='font-awesome'
                    size={25}
            />
              <TouchableOpacity onPress={() => {
             navigation.navigate("Language");
             }}>
                <Text style={{paddingTop: 6,fontSize: 19}}>Language</Text>
             </TouchableOpacity>
              </View>
            <View  style={style.Container1}>
            <Icon style={{padding: 6}}
                 reverseColor
                    name='comment'
                    type='font-awesome'
                    size={25}
            />
            <Text style={{paddingTop: 6,fontSize: 19}}>Chat Settings</Text>
            
            </View>

        </View>
                  <View style={{backgroundColor: "#E8DFDF"}}>
                            <Text></Text>
                  </View>
        <View>
            <Text style={{fontSize: 20,color: '#1A50D8', padding: 10}}>
                  Help
            </Text>

            <View  style={style.Container1}>
            <Icon style={{padding: 6}}
                 reverseColor
                    name='comments'
                    type='font-awesome'
                    size={25}
                />
              <TouchableOpacity onPress={() => {
             navigation.navigate("Ask");
             }}>

              <Text style={{paddingTop: 6,fontSize: 19}}>Ask Question</Text>
              </TouchableOpacity>
            
            </View>
            
            
            <View  style={style.Container1}>
            <Icon style={{padding: 6}}
                 reverseColor
                    name='question-circle'
                    type='font-awesome'
                    size={25}
            />
              <TouchableOpacity onPress={() => {
             navigation.navigate("faq");
             }}>
                <Text style={{paddingTop: 6,fontSize: 19}}>FAQ</Text>
             </TouchableOpacity>
              </View>
            <View  style={style.Container1}>
            <Icon style={{padding: 6}}
                 reverseColor
                    name='shield'
                    type='font-awesome'
                    size={25}
            />
            <TouchableOpacity onPress={() => {
             navigation.navigate("Privacy");
             }}>
               <Text style={{paddingTop: 6,fontSize: 19}}>Privacy Policy</Text>
             </TouchableOpacity>
              </View>

        </View>
        </ScrollView>
    </View>
    
  );
}

const style = StyleSheet.create({
    contaienr: {
        padding: 25,
        alignItems: 'flex-start',
        
    },
    text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
    padding: 10
},
  Container: {
    
    fontSize: 17,
    padding: 10,
    paddingLeft: 15,
    borderBottomWidth: 0.3,
    borderColor: "lightgrey"
  },
  Container1: {
    flexDirection: 'row',
    fontSize: 17,
    padding: 10,
    paddingLeft: 15,
    borderBottomWidth: 0.3,
    borderColor: "lightgrey"
  },
})