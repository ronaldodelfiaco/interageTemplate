import { Box, IconButton, MenuItem, Popover, styled } from '@mui/material';
import { H6 } from '../../Typography';
import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { height } from '@mui/system';

// dummy language options
const languageOptions: {
  [key: string]: { icon: string; label: string };
} = {
  br: {
    icon: '/static/flags/br.png',
    label: 'Brazil',
  },
  en: {
    icon: '/static/flags/usa.png',
    label: 'English',
  },
  es: {
    icon: '/static/flags/spain.png',
    label: 'Spanish',
  },
  hi: {
    icon: '/static/flags/in.png',
    label: 'Hindi',
  },
};

// custom styled components
const IconWrapper = styled(Box)(() => ({
  display: 'flex',
  height: 20,
  width: 20,
  '& img': {
    width: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));

const ItemWrapper = styled(Box)(() => ({
  display: 'flex',
  '& img': { width: '100%', height: '100%' },
}));

const LanguagePopover: FC = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  const selectedLanguage = languageOptions[i18n.language];

  return (
    <>
      <IconButton onClick={handleOpen} ref={anchorRef}>
        <IconWrapper>
          <Image
            alt={selectedLanguage.label}
            src={selectedLanguage.icon}
            width="30px"
            height="15px"
          />
        </IconWrapper>
      </IconButton>
      <Popover
        keepMounted
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        PaperProps={{ sx: { width: 150, height: 120, padding: '0.5rem 0' } }}
      >
        {Object.keys(languageOptions).map((language: string) => (
          <MenuItem
            key={languageOptions[language].label}
            onClick={() => handleChangeLanguage(language)}
          >
            <ItemWrapper>
              <Image
                alt={languageOptions[language].label}
                src={languageOptions[language].icon}
                width="30px"
                height="15px"
              />
              <H6 fontWeight={600} ml={1}>
                {languageOptions[language].label}
              </H6>
            </ItemWrapper>
          </MenuItem>
        ))}
      </Popover>
    </>
  );
};

export default LanguagePopover;
