import Logo from 'assets/logo.png';
import GoBackBtn from 'components/goBackBtn';
import InputComp from 'components/inputComp';
import ScreenLayout from 'components/screenLayout';
import { passwordRegex, usernameRegex } from 'constants/regex';
import _ from 'lodash';
import React, { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Image, View } from 'react-native';
import { loginScreenStyles } from 'screens/authenticate/login/styles';
import { ILoginDataParams, loginService } from 'services/authenticateService';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Text } from '@rneui/themed';

const formValidateSchema = yup
  .object({
    username: yup.string().required('Please enter username').matches(usernameRegex, 'Invalid username'),
    password: yup.string().required('Please enter password').matches(passwordRegex, 'Password must has at least 6 characters')
  })
  .required();
type FormData = yup.InferType<typeof formValidateSchema>;

const LoginScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      password: ''
    },
    resolver: yupResolver(formValidateSchema)
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async (data: FormData) => {
    setIsLoading(true);
    try {
      const loginParams: ILoginDataParams = {
        username: data.username,
        password: data.password
      };
      const loginResponse = await loginService(loginParams);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ScreenLayout style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Image source={Logo} style={{ marginBottom: 16, resizeMode: 'cover' }} />
      </View>

      <View style={{ marginBottom: 24 }}>
        <Text h4 style={{ textAlign: 'center' }}>
          Login Account
        </Text>
        <Text style={loginScreenStyles.subTitle}>Hello, welcome back to our account</Text>
      </View>

      <View style={{ width: '100%' }}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComp
              leftIcon={{ type: 'font-awesome-5', name: 'user', size: 14 }}
              placeholder='Username'
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              errorMessage={_.get(errors.username, 'message', '')}
            />
          )}
          name='username'
        />

        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputComp
              secureTextEntry={true}
              leftIcon={{
                type: 'font-awesome-5',
                name: 'lock',
                size: 14
              }}
              placeholder='Password'
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              errorMessage={_.get(errors.password, 'message', '')}
            />
          )}
          name='password'
        />

        <Button buttonStyle={{ marginTop: 24 }} onPress={handleSubmit(onSubmit)} loading={isLoading}>
          Login
        </Button>

        <GoBackBtn buttonStyle={{ marginTop: 8 }} />
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;
