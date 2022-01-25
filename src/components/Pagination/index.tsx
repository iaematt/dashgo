import { Box, Stack, Text } from '@chakra-ui/react';

import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : [];
  const nextPages =
    currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];

  return (
    <Stack direction={['column', 'row']} spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <Text>
          <strong>{currentPage * registersPerPage - registersPerPage + 1}</strong> -{' '}
          <strong>{currentPage === lastPage ? totalCountOfRegisters : registersPerPage * currentPage}</strong> de{' '}
          {totalCountOfRegisters} registros
        </Text>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} page={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.400" w="6" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => <PaginationItem onPageChange={onPageChange} key={page} page={page} />)}
        <PaginationItem onPageChange={onPageChange} page={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map((page) => <PaginationItem onPageChange={onPageChange} key={page} page={page} />)}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.400" w="6" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} page={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
