import { Flex, Avatar, Box, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Avatar size="md" name="Matheus Bastos" src="https://github.com/iaematt.png" />

      <Box ml="4">
        <Text>Matheus Bastos</Text>
        <Text color="gray.300" fontSize="sm">
          matheusbastos@outlook.com
        </Text>
      </Box>
    </Flex>
  )
}
