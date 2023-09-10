import { createDrawerNavigator } from "@react-navigation/drawer"; 
import Home from "../pages/Home";

const ElementDrawer = createDrawerNavigator()

export default function AppRoutes(){
    return(
        <ElementDrawer.Navigator>
            <ElementDrawer.Screen
                name="home"
                component={Home}
            />
        </ElementDrawer.Navigator>
    )
}