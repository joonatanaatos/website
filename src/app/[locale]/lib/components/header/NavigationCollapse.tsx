'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Collapse, Flex, Paper } from '@mantine/core';
import { useTranslation } from '@/i18n/client';
import { useLocale } from '@/util/hooks';
import { pages } from '@/util/pages';
import classes from './header.module.css';

interface NavigationCollapseProps {
  opened: boolean;
  onClose?: () => void;
}

function NavigationCollapse({ opened, onClose }: NavigationCollapseProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const { t } = useTranslation(locale);
  return (
    <Collapse in={opened} pos="absolute" right="0" mr="1rem">
      <Paper shadow="md" withBorder>
        <Flex direction="column" align="start" py="xs">
          {pages.map((page) => (
            <Button
              variant="transparent"
              className={classes.button}
              component={Link}
              key={page}
              href={`/${locale}/${page}`}
              data-active={pathname.split('/').includes(page)}
              size="xl"
              onClick={onClose}
            >
              {t(`pages.${page}`)}
            </Button>
          ))}
        </Flex>
      </Paper>
    </Collapse>
  );
}

export default NavigationCollapse;
