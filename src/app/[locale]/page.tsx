import Link from 'next/link';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import { createTranslation } from '@/i18n/server';
import Animate from '@/lib/components/animate';
import { pages } from '@/util/pages';
import classes from './index.module.css';
import MainImage from './lib/components/main-image';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await createTranslation(locale);
  return (
    <main>
      <Container size="lg" className={classes.container}>
        <Animate delay={2}>
          <MainImage />
        </Animate>
        <Animate>
          <Title size="3rem" className={classes.title}>
            Joonatan Korpela
          </Title>
        </Animate>
        <Animate delay={1}>
          <Text size="xl">{t('subtitle')}</Text>
        </Animate>
        <Animate delay={2}>
          <Group pt="lg">
            {pages.map((page) => (
              <Button key={page} component={Link} href={`/${locale}/${page}`}>
                <Text>{t(`pages.${page}`)}</Text>
              </Button>
            ))}
          </Group>
        </Animate>
      </Container>
    </main>
  );
}
