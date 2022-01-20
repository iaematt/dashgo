import NextLink from 'next/link'
import { Box, Stack } from '@chakra-ui/react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiLogoutBoxLine } from 'react-icons/ri'

import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NextLink href={'/dashboard'}>
            <NavLink icon={RiDashboardLine}>Painel</NavLink>
          </NextLink>
          <NextLink href={'/users'}>
            <NavLink icon={RiContactsLine}>Usuários</NavLink>
          </NextLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>

        <NavSection title="Conta">
          <NextLink href={'/'}>
            <NavLink icon={RiLogoutBoxLine}>Sair</NavLink>
          </NextLink>
        </NavSection>
      </Stack>
    </Box>
  )
}
