import { Container } from '@mantine/core';

function PageLayout({ children }: { children: React.ReactNode }) {
  return <Container size="lg">{children}</Container>;
}

export default PageLayout;
