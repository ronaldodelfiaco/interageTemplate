import {
  AppBar,
  Box,
  IconButton,
  styled,
  Theme,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { SettingsContext } from '../../contexts/SettingsContext';
import { TitleContext } from '../../contexts/TitleContext';
import FlexBox from '../FlexBox';
import { H2 } from '../Typography';
import LanguagePopover from './popovers/LanguagePopover';
import NotificationsPopover from './popovers/NotificationsPopover';
import ProfilePopover from './popovers/ProfilePopover';

// root component interface
interface DashboardNavBarProps {
  sideBarLocked: boolean;
  setSideBarLocked: () => void;
  setShowMobileSideBar: () => void;
  setOpenSecondarySideBar: () => void;
}

// custom styled components
const DashboardNavbarRoot = styled(AppBar)(() => ({
  zIndex: 11,
  boxShadow: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  backdropFilter: 'blur(6px)',
  backgroundColor: 'transparent',
}));

const StyledToolBar = styled(Toolbar)(() => ({
  '@media (min-width: 0px)': {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: 'auto',
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  '&:hover': { backgroundColor: 'transparent' },
}));

const ToggleIcon = styled(Box)(({ theme }) => ({
  width: 25,
  height: 3,
  margin: '5px',
  borderRadius: '10px',
  transition: 'width 0.3s',
  backgroundColor: theme.palette.primary.main,
}));

// root component
const DashboardNavbar: FC<DashboardNavBarProps> = (props) => {
  const {
    sideBarLocked,
    setSideBarLocked,
    setShowMobileSideBar,
    setOpenSecondarySideBar,
  } = props;

  const { t } = useTranslation();
  const { title } = useContext(TitleContext);
  const { settings, saveSettings } = useContext(SettingsContext);
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200));
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  if (downSm) {
    return (
      <>
        <DashboardNavbarRoot position="sticky">
          <StyledToolBar>
            <Box flexGrow={1} textAlign="center">
              <Image
                src="/static/logo/logo.svg"
                width="100%"
                height="30"
                alt="Logo"
              />
            </Box>

            <LanguagePopover />
            <ProfilePopover />
          </StyledToolBar>
        </DashboardNavbarRoot>

        <FlexBox alignItems="center" justifyContent="space-between">
          <H2
            fontSize={21}
            lineHeight={0}
            fontWeight="700"
            color="text.primary"
          >
            {t(title)}
          </H2>
        </FlexBox>
      </>
    );
  }

  return (
    <DashboardNavbarRoot position="sticky">
      <StyledToolBar>
        <H2
          fontSize={21}
          lineHeight={0}
          mx={1}
          fontWeight="700"
          color="text.primary"
        >
          {t(title)}
        </H2>

        <Box flexGrow={1} ml={1} />

        {upSm && (
          <>
            <LanguagePopover />
            <NotificationsPopover />
          </>
        )}
        <ProfilePopover />
      </StyledToolBar>
    </DashboardNavbarRoot>
  );
};

export default DashboardNavbar;
