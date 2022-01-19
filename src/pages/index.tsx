import Head from 'next/head'
import { Flex, Button, Stack, Text } from '@chakra-ui/react'

import { Input } from '@components/Form/Input'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Login | dashgo.</title>
      </Head>

      <Flex w="100vw" h="100vh" display="flex" flexDirection="column" align="center" justify="center">
        <Flex w="100%" maxW={360} mb={4}>
          <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
            dashgo
            <Text as="span" ml="1" color="pink.500">
              .
            </Text>
          </Text>
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
