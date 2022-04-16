import { MoreHoriz } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import FlexBox from '../FlexBox';
import { H6, Tiny } from '../Typography';
import React, { FC, MouseEvent } from 'react';

// component interface
interface ListCardProps {
  item: {
    nome: string;
  };
  handleMore: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ListCard: FC<ListCardProps> = ({ item, handleMore }) => {
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <FlexBox alignItems="center">
        <Box ml="1rem">
          <H6>{item.nome}</H6>
        </Box>
      </FlexBox>
      <IconButton onClick={handleMore}>
        <MoreHoriz sx={{ color: 'secondary.400' }} />
      </IconButton>
    </FlexBox>
  );
};

export default ListCard;
