import { SvgIcon, SvgIconProps } from '@mui/material';

const FileIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 18 23" {...props}>
      <path
        d="M17.7992 4.35462L13.6454 0.20078C13.5147 0.0711889 13.3379 -0.00102741 13.1538 1.10466e-05H2.07692C0.929855 1.10466e-05 0 0.929866 0 2.07693V20.0769C0 21.224 0.929855 22.1538 2.07692 22.1538H15.9231C17.0701 22.1538 18 21.224 18 20.0769V4.84616C18.0011 4.66214 17.9288 4.4853 17.7992 4.35462ZM16.6154 20.0769C16.6154 20.4593 16.3054 20.7692 15.9231 20.7692H2.07692C1.69455 20.7692 1.38461 20.4593 1.38461 20.0769V2.07693C1.38461 1.69456 1.69455 1.38463 2.07692 1.38463H12.4615V4.15385C12.4615 4.91855 13.0814 5.53847 13.8461 5.53847H16.6154V20.0769Z"
        fill="currentColor"
      />
      <path
        d="M15.2308 16.6154H13.8462V18H15.2308V16.6154Z"
        fill="currentColor"
      />
      <path
        d="M15.2308 9.69226H2.76923V11.0769H15.2308V9.69226Z"
        fill="currentColor"
      />
      <path
        d="M15.2308 13.1538H2.76923V14.5384H15.2308V13.1538Z"
        fill="currentColor"
      />
      <path
        d="M12.4615 16.6154H2.76923V18H12.4615V16.6154Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default FileIcon;
