import Link from 'next/link';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import { pages } from '@/util/pages';

export default function Home() {
  return (
    <main>
      <Container size="lg" pt="10rem">
        <Title size="xxx-large">Joonatan Korpela</Title>
        <Text size="xl">Full-Stack Developer & Computer Science Student</Text>
        <Group pt="lg">
          {pages.map((page) => (
            <Button key={page.link} component={Link} href={page.link}>
              <Text>{page.display}</Text>
            </Button>
          ))}
        </Group>
      </Container>
    </main>
  );
}
