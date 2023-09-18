import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import Register from '../pages/Registrar';
import Profile from '../pages/Profile';

const ElementDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <ElementDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#FFF',
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      }}>
      <ElementDrawer.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <ElementDrawer.Screen
        name="registro"
        component={Register}
        options={{
          title: 'Registro',
        }}
      />
      <ElementDrawer.Screen
        name='profile'
        component={Profile}
        options={{
          title: 'Perfil'
        }}

      />
    </ElementDrawer.Navigator>
  );
}
