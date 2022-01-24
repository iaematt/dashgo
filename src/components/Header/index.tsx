import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { useSidebarDrawer } from '@contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex as="header" w="100%" bg="gray.800">
      <Flex w="100%" maxWidth={1480} height="20" mx="auto" px="6" align="center">
        {!isWideVersion && (
          <IconButton
            aria-label="Open navigation"
            icon={<Icon as={RiMenuLine} />}
            onClick={onOpen}
            display="flex"
            fontSize="24"
            variant="unstyled"
            mr="2"
          />
        )}

        <Logo />

        {isWideVersion && <Search />}

        <Flex align="center" ml="auto">
          <Notifications />
          <Profile showProfileData={isWideVersion} />
        </Flex>
      </Flex>
    </Flex>
  );
}
