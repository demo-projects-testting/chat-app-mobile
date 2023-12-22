import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { API_BASE_URL } from '@env';

const LoginScreen = () => {
  const [fetchedApi, setFetchedApi] = useState<{ status: string; message: string }>({
    status: 'fetching',
    message: ''
  });

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((res) => res.json())
      .then((response) => {
        setFetchedApi((prevState) => ({ ...prevState, status: 'fetched', message: response.message }));
      })
      .catch(() => {
        setFetchedApi((prevState) => ({ ...prevState, status: 'failed' }));
      });
  }, []);

  return (
    <View>
      <Text>Fetch Status: {fetchedApi.status}</Text>
      {fetchedApi.message ? <Text>{fetchedApi.message}</Text> : <></>}
    </View>
  );
};

export default LoginScreen;
