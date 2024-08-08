import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = new AuthStorage();

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
