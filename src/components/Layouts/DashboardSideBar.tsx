import {
  Box,
  List,
  ListItem,
  ListItemButton,
  styled,
  Theme,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Dispatch,
  FC,
  Fragment,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import ScrollBar from 'simplebar-react';
import UIAccordion from '../accordion/UIAccordion';
import FlexBox from '../FlexBox';
import { H3, Small } from '../Typography';
import topMenuList from './topMenuList';

// root component interface
interface SideNavBarProps {
  sideBarLocked: boolean;
  showMobileSideBar: boolean;
  openSecondarySideBar: boolean;
  closeMobileSideBar: () => void;
  setOpenSecondarySideBar: Dispatch<React.SetStateAction<boolean>>;
}

// custom styled components
const MainMenu = styled(Box)(({ theme }) => ({
  width: 80,
  height: '100%',
  position: 'fixed',
  left: 0,
  boxShadow: theme.shadows[2],
  zIndex: theme.zIndex.drawer + 11,
  transition: 'left 0.3s ease',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down('md')]: { left: -80 },
  '& .simplebar-track.simplebar-vertical': { width: 7 },
  '& .simplebar-scrollbar:before': {
    background: theme.palette.text.primary,
  },
}));

const SecondarySideBar = styled(Box)<{ show: boolean }>(({ theme, show }) => ({
  width: 240,
  height: '100%',
  position: 'fixed',
  left: show ? 80 : -320,
  transition: 'left 0.3s ease-in-out',
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.paper,
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  marginBottom: '1rem',
  justifyContent: 'center',
  '&:hover': { backgroundColor: 'transparent' },
}));

const Dot = styled(Box)(() => ({
  width: 4,
  height: 4,
  marginRight: 10,
  borderRadius: '50%',
}));

const SubMenuItem = styled(FlexBox)<{ active?: boolean }>(
  ({ theme, active }) => ({
    cursor: 'pointer',
    alignItems: 'center',
    padding: '0.6rem 1rem',
    '& div': {
      backgroundColor: active
        ? theme.palette.primary.main
        : theme.palette.text.disabled,
    },
    '& small': {
      color: active ? theme.palette.primary.main : theme.palette.secondary[400],
    },
    '&:hover': {
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.secondary.light
          : theme.palette.divider,
      '& div': { backgroundColor: theme.palette.primary.main },
      '& small': { color: theme.palette.primary.main },
    },
  }),
);

// root component
const DashboardSideBar: FC<SideNavBarProps> = ({
  sideBarLocked,
  showMobileSideBar,
  closeMobileSideBar,
  openSecondarySideBar,
  setOpenSecondarySideBar,
}) => {
  const navigate = useRouter();

  const [active, setActive] = useState('Dashboard');
  const [activeSubMenuItem, setActiveSubMenuItem] = useState('');
  const [categoryMenus, setCategoryMenus] = useState(initialCategoryMenus);
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200));

  const handleActiveMainMenu = (menuItem: any) => () => {
    setActive(menuItem.title);

    if (menuItem.children && menuItem.children.length > 0) {
      setCategoryMenus(menuItem.children);

      const matched = openSecondarySideBar && active === menuItem.title;
      setOpenSecondarySideBar(matched ? false : true);
    } else {
      // console.log(!menuItem.path);

      navigate.push(menuItem.path);
      closeMobileSideBar();
      setOpenSecondarySideBar(sideBarLocked && !menuItem.path);
    }
  };
  // accordion
  const [expanded, setExpanded] = useState<string | boolean>('');

  useEffect(() => {
    setExpanded(categoryMenus[0].subTitle);
  }, [categoryMenus]);

  const handleAccordionChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleSubMenuItem = (path: string) => {
    navigate.push(path);
    setActiveSubMenuItem(path);
    setOpenSecondarySideBar(sideBarLocked);
    closeMobileSideBar();
  };

  // main menus content
  const mainSideBarContent = (
    <List sx={{ height: '100%' }}>
      <StyledListItemButton disableRipple>
        <Image src="/favicon.png" alt="UKO Logo" width={31} height={31} />
      </StyledListItemButton>

      <ScrollBar style={{ maxHeight: 'calc(100% - 50px)' }}>
        {topMenuList.map((nav, index) => (
          <Tooltip title={nav.title} placement="right" key={index}>
            <StyledListItemButton
              disableRipple
              onClick={handleActiveMainMenu(nav)}
            >
              <nav.Icon
                sx={{
                  color:
                    active === nav.title ? 'primary.main' : 'secondary.400',
                }}
              />
            </StyledListItemButton>
          </Tooltip>
        ))}
      </ScrollBar>
    </List>
  );

  // secondary side bars content
  const secondarySideBarContent = (
    <Fragment>
      <ListItem sx={{ py: 2 }}>
        <H3>{active}</H3>
      </ListItem>

      {categoryMenus.map((item, index) =>
        item.subCategories ? (
          <UIAccordion
            key={index}
            expandedItem={expanded}
            accordionHeader={item.subTitle}
            handleChange={handleAccordionChange}
          >
            {item.subCategories.map((sub) => (
              <SubMenuItem
                key={sub.name}
                active={sub.path === activeSubMenuItem}
                onClick={() => handleSubMenuItem(sub.path)}
              >
                <Dot />
                <Small color="secondary.400">{sub.name}</Small>
              </SubMenuItem>
            ))}
          </UIAccordion>
        ) : (
          <SubMenuItem
            key={item.subTitle}
            active={item.path === activeSubMenuItem}
            onClick={() => handleSubMenuItem(item.path)}
          >
            <Dot />
            <Small color="secondary.400">{item.subTitle}</Small>
          </SubMenuItem>
        ),
      )}
    </Fragment>
  );

  // for mobile device
  if (downMd) {
    return (
      <Fragment>
        <Box
          sx={{
            width: 60,
            height: '100%',
            position: 'fixed',
            zIndex: (theme) => theme.zIndex.drawer + 3,
            backgroundColor: (theme) => theme.palette.background.paper,
            boxShadow: (theme) => theme.shadows[1],
            '& .simplebar-track.simplebar-vertical': { width: 7 },
            '& .simplebar-scrollbar:before': {
              background: (theme) => theme.palette.text.primary,
            },
            transform: showMobileSideBar
              ? 'translateX(0)'
              : 'translateX(-100%)',
            transition: 'transform 0.3s',
          }}
        >
          {mainSideBarContent}
        </Box>

        {showMobileSideBar && (
          <Box
            onClick={closeMobileSideBar}
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: (theme) => theme.zIndex.drawer,
            }}
          />
        )}

        <Box
          sx={{
            position: 'fixed',
            left: showMobileSideBar ? 0 : -300,
            width: 300,
            height: '100%',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: 'background.paper',
            transition: 'left 0.3s',
          }}
        >
          <Box
            sx={{
              height: '100%',
              position: 'relative',
              width: 'calc(100% - 60px)',
              marginLeft: '60px',
            }}
          >
            {secondarySideBarContent}
          </Box>
        </Box>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <MainMenu>{mainSideBarContent}</MainMenu>

      <SecondarySideBar show={openSecondarySideBar}>
        {secondarySideBarContent}
      </SecondarySideBar>
    </Fragment>
  );
};

const initialCategoryMenus = [
  {
    subTitle: 'Dashboards',
    subCategories: [
      { name: 'Data Table', path: '/dashboard/' },
      {
        name: 'Account Settings',
        path: '/dashboard/account-settings',
      },
    ],
    path: '',
  },
];

export default DashboardSideBar;
