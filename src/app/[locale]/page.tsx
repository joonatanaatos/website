import { Container, Group, Text, Title } from '@mantine/core';
import { createTranslation } from '@/i18n/server';
import Animate from '@/lib/components/animate';
import { pages } from '@/util/pages';
import classes from './index.module.css';
import MainImage from './lib/components/main-image';
import LinkButton from './lib/components/link-button';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
              <LinkButton key={page} href={`/${locale}/${page}`}>
                {t(`pages.${page}`)}
              </LinkButton>
            ))}
          </Group>
        </Animate>
      </Container>
    </main>
  );
}
