import Head from 'next/head';
import { Flex, Button, Stack } from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '@components/Form/Input';
import { Logo } from '@components/Header/Logo';
import { useRouter } from 'next/router';

type SignInFormData = {
  email: string;
  password: string;
};

const singInFormSchema = yup.object().shape({
  email: yup.string().required('O endereço de e-mail é obrigatório').email('O e-mail não é válido'),
  password: yup.string().required('É necessário informar a senha'),
});

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema),
  });
  const { errors, isSubmitting } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Login | dashgo.</title>
      </Head>

      <Flex
        w="100vw"
        h="100vh"
        display="flex"
        flexDirection="column"
        align="center"
        justify="center"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Flex w="100%" maxW={360} mb={4}>
          <Logo />
        </Flex>

        <Flex as="form" action="/dashboard" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
          <Stack spacing={4}>
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="nome@servidor.com"
              error={errors.email}
              {...register('email')}
            />

            <Input
              name="password"
              label="Senha"
              type="password"
              placeholder="123@mudar"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button type="submit" mt="6" colorScheme="purple" size="lg" isLoading={isSubmitting}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
