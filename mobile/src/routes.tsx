import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Points from "./pages/Points";
import Details from "./pages/Details";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // Para todas as telas:
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}
                headerMode="none">
                {/* headerMode none! */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Points" component={Points} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes