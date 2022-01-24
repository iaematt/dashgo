import Link from 'next/link';
import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Link href="/dashboard">
      <a title="dashgo.">
        <Text fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight" w={['none', '64']}>
          dashgo
          <Text as="span" ml="1" color="pink.500">
            .
          </Text>
        </Text>
      </a>
    </Link>
  );
}
