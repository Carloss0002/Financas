import {createContext, useEffect, useState} from 'react';
import {AuthProviderProps, State, initialContext} from './types';
import {userControler} from '../services/axios';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthUser = createContext(initialContext);

function AuthProvider({children}: AuthProviderProps) {
  const [state, setState] = useState<State>({
    user: null,
    loading: false,
    loadingScreen: true,
  });
  const navigate = useNavigation();
  useEffect(() => {
    async function checkTokenStorage() {
      const storage = await AsyncStorage.getItem('tk');

      if (storage) {
        await userControler
          .getUserInformation(storage)
          .then(response => {
            axios.defaults.headers['Authorization'] = `Bearer ${storage}`;
            setState({...state, user: response.data, loadingScreen: false});
          })
          .catch(() => {
            setState({...state, user: null, loadingScreen: false});
          });
      }
    }
    checkTokenStorage();
  }, []);
  async function signUp(email: string, password: string, name: string) {
    setState({...state, loading: true});
    try {
      await userControler.sendUser({email, name, password});
      setState({...state, loading: false});
      navigate.goBack();
    } catch (err) {
      console.log(err);
      setState({...state, loading: false});
    }
  }
  async function signIn(emailUser: string, password: string) {
    setState({...state, loading: true});
    try {
      const response = await userControler.getUser({
        email: emailUser,
        password,
      });
      const {id, email, name, token} = response.data;
      axios.defaults.headers['Authorization'] = `Bearer ${token}`;
      const data = {
        id,
        name
      };
      if (token !== undefined) {
        await AsyncStorage.setItem('tk', token);
      }
      setState({...state, user: data, loading: false});
    } catch (error) {
      setState({...state, user: null, loading: false});
    }
  }
  async function signOut(){
    await AsyncStorage.clear()
    .then(()=>{
      setState({...state, user: null})
    })
  }
  return (
    <AuthUser.Provider
      value={{
        user: state.user,
        loading: state.loading,
        signed: !!state.user,
        loadingScreen: state.loadingScreen,
        signUp,
        signIn,
        signOut
      }}>
      {children}
    </AuthUser.Provider>
  );
}

export default AuthProvider;
