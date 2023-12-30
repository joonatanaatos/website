import Link from 'next/link';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import { createTranslation } from '@/i18n/server';
import { pages } from '@/util/pages';
import classes from './index.module.css';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await createTranslation(locale);
  return (
    <main>
      <Container size="lg" className={classes.container}>
        <Title size="3rem">Joonatan Korpela</Title>
        <Text size="xl">{t('subtitle')}</Text>
        <Group pt="lg">
          {pages.map((page) => (
            <Button key={page} component={Link} href={`/${locale}/${page}`}>
              <Text>{t(`pages.${page}`)}</Text>
            </Button>
          ))}
        </Group>
      </Container>
    </main>
  );
}
