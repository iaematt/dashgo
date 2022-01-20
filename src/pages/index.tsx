import Head from 'next/head'
import { Flex, Button, Stack, Text } from '@chakra-ui/react'

import { Input } from '@components/Form/Input'
import { Logo } from '@components/Header/Logo'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Login | dashgo.</title>
      </Head>

      <Flex w="100vw" h="100vh" display="flex" flexDirection="column" align="center" justify="center">
        <Flex w="100%" maxW={360} mb={4}>
          <Logo />
        </Flex>

        <Flex as="form" action="/dashboard" w="100%" maxW={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
          <Stack spacing={4}>
            <Input name="email" label="E-mail" type="email" placeholder="nome@servidor.com" />

            <Input name="password" label="Senha" type="password" placeholder="123@mudar" />
          </Stack>

          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
