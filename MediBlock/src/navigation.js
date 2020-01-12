import { Navigation } from 'react-native-navigation'

// export const goToAuth = () => Navigation.setRoot({
//     root: {
//         bottomTabs: {
//             id: 'BottomTabsId',
//             children: [
//                 {
//                     component: {
//                         name: 'SignIn',
//                         options: {
//                             bottomTab: {
//                                 fontSize: 12,
//                                 text: 'Sign In',
//                                 icon: require('./images/signIn.png')
//                             }
//                         }
//                     },
//                 },
//                 {
//                     component: {
//                         name: 'SignUp',
//                         options: {
//                             bottomTab: {
//                                 fontSize: 12,
//                                 text: 'Sign Up',
//                                 icon: require('./images/signUp.png')
//                             }
//                         }
//                     },
//                 },
//             ],
//         }
//     }
// });

// export const goHome = () => Navigation.setRoot({
//     root: {
//         sideMenu: {
//             id: "sideMenu",
//             left: {
//                 visible: false,
//                 enabled: false,
//                 component: {
//                     id: "Drawer",
//                     name: "pSideBar"
//                 }
//             },
//             center: {
//                 stack: {
//                     id: "AppPRoot",
//                     children: [{
//                         component: {
//                             id: "App",
//                             name: "Home"
//                         }
//                     }]
//                 }
//             }
//         }
//     }
// })

export const goLocal = () => Navigation.setRoot({
    root: {

        stack: {
            id: "AppRoot",
            children: [{
                component: {
                    id: "App",
                    name: "Home"
                }
            }]
        }
    }
});
