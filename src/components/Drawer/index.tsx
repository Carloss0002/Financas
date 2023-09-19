import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {AuthUser} from '../../context/auth';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const {user} = useContext(AuthUser);
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Image
          source={require('../../assets/Logo.png')}
          style={{
            width: 90,
            height: 90,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 18,
            marginTop: 14,
            color: '#000',
          }}>
          Bem vindo
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            marginBottom: 14,
            paddingHorizontal: 20,
            color: '#121212',
          }}
          numberOfLines={1}>
          {user?.name}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
