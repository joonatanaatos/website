import { redirect } from 'next/navigation';
import { TypographyStylesProvider } from '@mantine/core';
import Animate from '@/lib/components/animate';
import { pages } from '@/util/pages';
import AnimatedPage from './AnimatedPage';
import classes from './index.module.css';

const spacedPages = ['projects', 'experience'];

async function Page({
  params: { locale, page },
}: {
  params: { locale: string; page: string };
}) {
  if (!pages.includes(page)) {
    redirect(`/${locale}`);
  }

  let pageHtml = undefined;
  try {
    pageHtml = await import(`/public/pages/${page}/${locale}.html`);
  } catch (error) {
    redirect(`/${locale}`);
  }

  const spaced = spacedPages.includes(page);

  return (
    <TypographyStylesProvider p="sm">
      {spaced ? (
        <div data-spaced className={classes.content}>
          <AnimatedPage html={pageHtml.default} />
        </div>
      ) : (
        <Animate>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: pageHtml.default }}
          />
        </Animate>
      )}
    </TypographyStylesProvider>
  );
}

export default Page;
