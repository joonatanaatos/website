'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from '@/i18n/client';
import { localeNames, locales } from '@/i18n/settings';
import { useLocale } from '@/util/hooks';
import { pages } from '@/util/pages';
import NavigationCollapse from './NavigationCollapse';
import classes from './index.module.css';
import { IconHome, IconMoon, IconSun, IconWorld } from '@tabler/icons-react';

function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');
  const [opened, { toggle }] = useDisclosure(false);

  const { t } = useTranslation(locale);

  const changeColorScheme = () => {
    setColorScheme(computedColorScheme == 'light' ? 'dark' : 'light');
  };

  const changeLocale = (newLocale: string) => {
    console.log(`Changing locale to ${newLocale}`);
  };

  return (
    <header>
      <Container className={classes.container} size="xl">
        <Group>
          <Button
            variant="transparent"
            component={Link}
            href={`/${locale}`}
            className={classes.button}
            data-active={pathname.replace(locale, '') === '/'}
          >
            <IconHome size="1.8rem" />
          </Button>
          <Box visibleFrom="sm">
            {pages.map((page) => (
              <Button
                variant="transparent"
                className={classes.button}
                component={Link}
                key={page}
                href={`/${locale}/${page}`}
                data-active={pathname.split('/').includes(page)}
              >
                {t(`pages.${page}`)}
              </Button>
            ))}
          </Box>
        </Group>
        <Group>
          <Menu position="bottom-end">
            <MenuTarget>
              <ActionIcon size="lg" variant="light">
                <IconWorld />
              </ActionIcon>
            </MenuTarget>
            <MenuDropdown>
              {locales.map((l) => (
                <MenuItem
                  key={l}
                  onClick={() => changeLocale(l)}
                  disabled={l == locale}
                  component={Link}
                  href={`/${l}/${pathname.split('/').slice(2).join('/')}`}
                >
                  {localeNames[l]}
                </MenuItem>
              ))}
            </MenuDropdown>
          </Menu>
          <ActionIcon size="lg" variant="light" onClick={changeColorScheme}>
            {computedColorScheme == 'light' ? <IconMoon /> : <IconSun />}
          </ActionIcon>
          <Box hiddenFrom="sm">
            <Burger onClick={toggle} opened={opened} />
          </Box>
        </Group>
      </Container>
      <NavigationCollapse opened={opened} onClose={toggle} />
    </header>
  );
}

export default Header;
