import { Box, Stack, Text } from '@chakra-ui/react'

import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack direction="row" spacing="6" mt="8" justify="space-between" align="center">
      <Box>
        <Text>
          <strong>1</strong> - <strong>2</strong> de 10
        </Text>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem page={1} isCurrent={true} />

        <PaginationItem page={2} />
        <PaginationItem page={3} />
      </Stack>
    </Stack>
  )
}
