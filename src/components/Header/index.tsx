import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  return (
    <Flex as="header" w="100%" bg="gray.800">
      <Flex w="100%" maxWidth={1480} height="20" mx="auto" px="6" align="center">
        <Logo />

        <Search />

        <Flex align="center" ml="auto">
          <Notifications />
          <Profile />
        </Flex>
      </Flex>
    </Flex>
  )
}
