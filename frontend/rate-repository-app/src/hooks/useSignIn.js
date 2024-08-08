import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from './useAuthStorage';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    if (data?.authorize?.accessToken) {
      await authStorage.setAccessToken(data.authorize.accessToken);
    }
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
