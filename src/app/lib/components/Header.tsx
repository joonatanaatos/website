'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ActionIcon,
  Button,
  Container,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { pages } from '@/util/pages';
import classes from './Header.module.css';
import { IconHome, IconMoon, IconSun } from '@tabler/icons-react';

function Header() {
  const pathname = usePathname();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  const changeColorScheme = () => {
    setColorScheme(computedColorScheme == 'light' ? 'dark' : 'light');
  };

  return (
    <header>
      <Container className={classes.container} size="xl">
        <Group visibleFrom="xs">
          <Button
            variant="transparent"
            component={Link}
            href="/"
            className={classes.button}
            data-active={pathname === '/'}
          >
            <IconHome size="1.8rem" />
          </Button>
          {pages.map((page) => (
            <Button
              variant="transparent"
              className={classes.button}
              component={Link}
              key={page.link}
              href={page.link}
              data-active={pathname.split('/')[1] === page.link}
            >
              {page.display}
            </Button>
          ))}
        </Group>
        <ActionIcon size="lg" variant="light" onClick={changeColorScheme}>
          {computedColorScheme == 'light' ? <IconMoon /> : <IconSun />}
        </ActionIcon>
      </Container>
    </header>
  );
}

export default Header;
