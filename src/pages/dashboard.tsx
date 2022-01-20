import Head from 'next/head'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'
import { ChartArea } from '@components/Charts/ChartArea'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel | dashgo.</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              <ChartArea />
            </Box>

            <Box p="8" bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>
              <ChartArea />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}
