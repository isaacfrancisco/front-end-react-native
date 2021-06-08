import {create} from 'apisauce';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = create({
  baseURL: 'http://192.168.100.72:3000',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default api;
