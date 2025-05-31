'use client';

import Link from 'next/link';
import {
  ActionIcon,
  Anchor,
  Container,
  CopyButton,
  Group,
  Popover,
  PopoverDropdown,
  PopoverTarget,
} from '@mantine/core';
import { Text } from '@mantine/core';
import { useTranslation } from '@/i18n/client';
import { LocaleTypes } from '@/i18n/settings';
import classes from './index.module.css';
import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react';

function Footer({ locale }: { locale: LocaleTypes }) {
  const { t } = useTranslation(locale);
  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.container}>
        <Text size="sm">
          {t('contact')}:{' '}
          <CopyButton value="joonatan.aatos@gmail.com">
            {({ copied, copy }) => (
              <Popover opened={copied} withArrow>
                <PopoverTarget>
                  <Anchor size="sm" onClick={copy}>
                    joonatan.aatos@gmail.com
                  </Anchor>
                </PopoverTarget>
                <PopoverDropdown>
                  <Text size="sm">{t('copied')}</Text>
                </PopoverDropdown>
              </Popover>
            )}
          </CopyButton>
        </Text>
        <Group>
          <ActionIcon
            variant="subtle"
            size="md"
            component={Link}
            href="https://t.me/BitTiKippari"
          >
            <IconBrandTelegram size="md" />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size="md"
            component={Link}
            href="https://github.com/joonatanaatos"
          >
            <IconBrandGithub size="md" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
