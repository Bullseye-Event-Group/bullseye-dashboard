import { Column, Icon, Row, Text } from 'react-basics';
import Link from 'next/link';
import LanguageButton from 'components/input/LanguageButton';
import ThemeButton from 'components/input/ThemeButton';
import SettingsButton from 'components/input/SettingsButton';
import Icons from 'components/icons';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Row className={styles.row}>
        <Column>
          <Link href="https://bullseyeeventgroup.com" target="_blank" className={styles.title}>
            <Icon size="xl">
              <Icons.Logo />
            </Icon>
            <Text>Bullseye Event Group</Text>
          </Link>
        </Column>
        <Column className={styles.buttons}>
          <ThemeButton tooltipPosition="bottom" />
          <LanguageButton tooltipPosition="bottom" menuPosition="bottom" />
          <SettingsButton />
        </Column>
      </Row>
    </header>
  );
}

export default Header;
