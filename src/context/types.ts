import React from 'react';
import {UserResponse} from '../models/User';

export const initialContext: initial = {
  user: null,
  signUp: (email: string, password: string, name: string) => {},
  signIn: (email: string, password: string) => {},
  loading: false,
  signed: false,
  loadingScreen: true,
  signOut: () => {},
};

interface initial {
  user: UserResponse | null;
  loading: boolean;
  signed: boolean;
  loadingScreen: boolean;
  signUp: (email: string, password: string, name: string) => void;
  signIn: (email: string, password: string) => void;
  signOut: () => void
}

export type AuthProviderProps = {
  children: React.ReactNode;
};

export interface State {
  user: UserResponse | null;
  loading: boolean;
  loadingScreen: boolean;
}
