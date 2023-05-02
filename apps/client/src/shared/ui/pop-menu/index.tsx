import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, SxProps, Theme } from '@mui/material';

type TOption = {
  title: string
  handler: (event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: TOption) => void,
}

interface IPopMenuProps {
  options: TOption[]
  sx?: SxProps<Theme>
}

const PopMenu: React.FC<IPopMenuProps> = ({ options, ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = React.useState(() => options[0]);

  const open = Boolean(anchorEl);
  const filteredOptions = options.filter(op => op.title !== selectedOption.title)

  const handleClose = () => setAnchorEl(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOptionCLick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: TOption) => {
    setAnchorEl(null);
    setSelectedOption(option)
    option.handler(event, option)
  };



  return (
    <Box {...props}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selectedOption.title}
      </Button>
      <Menu
        disableScrollLock
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          filteredOptions.filter(op => op.title !== selectedOption.title).map((op) => <MenuItem key={op.title} onClick={(e) => handleOptionCLick(e, op)}>{op.title}</MenuItem>)
        }

      </Menu>
    </Box>
  );
}

export { PopMenu }