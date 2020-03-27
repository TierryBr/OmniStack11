import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const AppStack = createStackNavigator()

import incidents from './pages/incidents'
import detail from './pages/detail'

export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="incidents" component={incidents}/>
                <AppStack.Screen name="detail" component={detail}/>
            </AppStack.Navigator>

        </NavigationContainer>
    )
}