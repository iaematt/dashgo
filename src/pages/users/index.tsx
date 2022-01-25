import { useState } from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine, RiRefreshLine } from 'react-icons/ri';

import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import { Pagination } from '@components/Pagination';
import { useUsers } from '@services/hooks/useUsers';
import { queryClient } from '@services/queryClient';
import { api } from '@services/api';

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, refetch, error } = useUsers(page);

  console.log(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userID: string) {
    await queryClient.prefetchQuery(
      ['user', userID],
      async () => {
        const response = await api.get(`users/${userID}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      }
    );
  }

  return (
    <>
      <Head>
        <title>Usuários | dashgo.</title>
      </Head>

      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8" height="fit-content">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
                {!isLoading && isFetching && <Spinner size="sm" color="green.500" ml="4" />}
              </Heading>

              <Box>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="green"
                  leftIcon={<Icon as={RiRefreshLine} fontSize="18" />}
                  cursor="pointer"
                  mr="4"
                  onClick={() => refetch()}
                  isLoading={isFetching}
                >
                  Atualizar
                </Button>
                <NextLink href="/users/create" passHref>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiAddLine} fontSize="18" />}
                    cursor="pointer"
                  >
                    Criar novo
                  </Button>
                </NextLink>
              </Box>
            </Flex>

            {isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex>
                <Text>Falha ao obter dados dos usuários.</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={['4', '4', '6']} color="gray.300" width="8">
                        <Checkbox colorScheme="purple" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      {isWideVersion && <Th width="8"></Th>}
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.users.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td px={['4', '4', '6']}>
                            <Checkbox colorScheme="purple" />
                          </Td>
                          <Td>
                            <Box>
                              <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                                <Text fontWeight="bold">{user.name}</Text>
                              </Link>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          {isWideVersion && <Td>{user.createdAt}</Td>}
                          {isWideVersion && (
                            <Td>
                              <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="whiteAlpha"
                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                              >
                                Editar
                              </Button>
                            </Td>
                          )}
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>

                <Pagination totalCountOfRegisters={data.totalCount} currentPage={page} onPageChange={setPage} />
              </>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}
