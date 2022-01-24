import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  page: number;
  isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, page }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="purple"
        disabled
        _disabled={{ bg: 'purple.400', cursor: 'not-allowed' }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
    >
      {page}
    </Button>
  );
}
