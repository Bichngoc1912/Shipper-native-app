import React, { useMemo } from 'react';
import { Box, Text, Input, Button } from 'native-base';
import { login } from '@/services/User/login';
import { useForm, Controller } from 'react-hook-form';
import { createStyle } from './style';

const LoginScreen = () => {
  const styles = useMemo(() => {
    return createStyle();
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    login({
      userName: data.userName,
      password: data.password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box style={styles.container}>
      <Controller
        control={control}
        name="userName"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="sm"
            placeholder="Tên người dùng"
            style={styles.input}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            size="sm"
            placeholder="Mật khẩu"
            style={styles.input}
          />
        )}
      />

      <Button onPress={handleSubmit(onSubmit)}>Đăng nhập</Button>
    </Box>
  );
};

export default LoginScreen;
