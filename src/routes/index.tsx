import {ActivityIndicator, View} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useContext} from 'react';
import {AuthUser} from '../context/auth';

function Routes() {
  const {signed, loadingScreen} = useContext(AuthUser);
  if (loadingScreen) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F4FF',
        }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
