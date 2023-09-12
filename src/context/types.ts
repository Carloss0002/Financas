import React from 'react';
import {UserResponse} from '../models/User';

export const initialContext: initial = {
  user: null,
  signUp: (email: string, password: string, name: string) => {},
  signIn: (email: string, password: string) => {},
  loading: false,
  signed: false,
  loadingScreen: true,
};

interface initial {
  user: UserResponse | null;
  signUp: (email: string, password: string, name: string) => void;
  loading: boolean;
  signIn: (email: string, password: string) => void;
  signed: boolean;
  loadingScreen: boolean;
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export interface State {
  user: UserResponse | null;
  loading: boolean;
  loadingScreen: boolean;
}
