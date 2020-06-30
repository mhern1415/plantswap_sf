import { SIGN_IN, SIGN_OUT } from './types';
import contacts from '../apis/posts';
import axios from 'axios'

export const signIn = (userId, userEmail) => {
    return {
        type: SIGN_IN,
        payload: userId,
        payloadEmail: userEmail
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
