 import { createAppContainer, createSwitchNavigator} from 'react-navigation';
 import {createStackNavigator} from "react-navigation-stack";


import FriendListScreen from './screens/FriendListScreen';
import ChatScreen from './screens/ChatScreen';
import JoinScreen from './screens/JoinScreen';
import ProfScreen from './screens/ProfScreen';
import MainProfileScreen from './screens/MainProfileScreen';
import Auth from './screens/Auth';
import AskQuestion from './screens/HelpScreen/AskQuestion';
import FAQ from './screens/HelpScreen/FAQ';
import PrivacyPolicy from './screens/HelpScreen/PrivacyPolocy';
import Language from './screens/HelpScreen/Language';

const AppStack = createStackNavigator({
      Home: FriendListScreen,
      Auth: Auth,
      Chat: ChatScreen,
      Profile: ProfScreen,
      MainProfile: MainProfileScreen,
      Ask: AskQuestion,
      faq: FAQ,
      Privacy: PrivacyPolicy,
      Language:Language
    });
  

 export default createAppContainer(
      

     createSwitchNavigator({
         App: AppStack,
         Join: JoinScreen,
         
         
     },{
         initialRouteName: "Join"
     }
     ),
    
 );
