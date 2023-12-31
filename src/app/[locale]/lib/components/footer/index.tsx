import Link from 'next/link';
import { ActionIcon, Anchor, Container, Group } from '@mantine/core';
import { Text } from '@mantine/core';
import { createTranslation } from '@/i18n/server';
import classes from './index.module.css';
import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react';

async function Footer({ locale }: { locale: string }) {
  const { t } = await createTranslation(locale);
  return (
    <footer className={classes.footer}>
      <Container size="lg" className={classes.container}>
        <Text size="sm">
          {t('contact')}: <Anchor size="sm">joonatan.aatos@gmail.com</Anchor>
        </Text>
        <Group>
          <ActionIcon
            variant="subtle"
            size="md"
            component={Link}
            href="https://t.me/joonatanaatos"
          >
            <IconBrandTelegram size="md" />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size="md"
            component={Link}
            href="https://github.com/joonatan-aatos"
          >
            <IconBrandGithub size="md" />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;
