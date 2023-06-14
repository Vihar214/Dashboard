import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { SettingsOutlined } from '@mui/icons-material';
import { themeColors } from '../theme.js';
import { Check } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setCurrentColor } from 'state';

export let currentColor = '#42855b';

const ThemeSetting = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => { 
    setAnchorEl(null);
  };

  const setColor = (color) => {
    currentColor = color;
    dispatch(setCurrentColor(currentColor));
  };

  const rowCount = Math.ceil(themeColors.length / 3);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Color settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <SettingsOutlined sx={{ fontSize: '25px' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 12,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Box m="0.2rem 0.8rem">
          <Typography variant="h6">Theme Colors</Typography>
          <Divider />
          {[...Array(rowCount)].map((_, rowIndex) => (
            <Box display="flex" gap={1} key={rowIndex}>
              {themeColors.slice(rowIndex * 3, rowIndex * 3 + 3).map((item, index) => (
                <Tooltip key={index} title={item.name} placement="top">
                  <Box
                    style={{
                      position: 'relative',
                      marginTop: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'center',
                    }}
                    key={item.name}
                  >
                    <IconButton
                      variant="contained"
                      sx={{
                        backgroundColor: item.color,
                        width: '2rem',
                        height: '2rem',
                        '&:hover': {
                          backgroundColor: item.color,
                        },
                      }}
                      onClick={() => setColor(item.color)}
                    >
                      {item.color === currentColor && <Check sx={{ fontSize: '24px', color: 'white' }} />}
                    </IconButton>
                  </Box>
                </Tooltip>
              ))}
            </Box>
          ))}
        </Box>
      </Menu>
    </React.Fragment>
  );
};

export default ThemeSetting;