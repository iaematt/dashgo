import { ElementType } from 'react';
import { Link, Icon, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ActiveLink } from '@components/ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
  shouldMatchExactHref?: boolean;
}

export function NavLink({ children, href, icon, shouldMatchExactHref = false, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref shouldMatchExactHref={shouldMatchExactHref}>
      <Link display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
    </ActiveLink>
  );
}
