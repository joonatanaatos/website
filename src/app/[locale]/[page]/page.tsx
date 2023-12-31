import { redirect } from 'next/navigation';
import { TypographyStylesProvider } from '@mantine/core';
import { pages } from '@/util/pages';
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

  return (
    <TypographyStylesProvider p="sm">
      <div
        data-spaced={spacedPages.includes(page)}
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: pageHtml.default }}
      />
    </TypographyStylesProvider>
  );
}

export default Page;
