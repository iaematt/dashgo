import NextLink from 'next/link'
import Head from 'next/head'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'

import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'
import { Input } from '@components/Form/Input'

export default function UserCreate() {
  return (
    <>
      <Head>
        <title>Criar usuário | dashgo.</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8" height="fit-content">
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="name" label="Nome completo" placeholder="Nome Sobrenome" />
                <Input name="email" label="E-mail" placeholder="nome@servidor.com" />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input name="password" type="password" label="Senha" placeholder="123@mudar" />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  placeholder="123@mudar"
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <NextLink href={'/users'}>
                  <Button as="a" colorScheme="whiteAlpha" cursor="pointer">
                    Cancelar
                  </Button>
                </NextLink>
                <Button colorScheme="pink">Salvar</Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
