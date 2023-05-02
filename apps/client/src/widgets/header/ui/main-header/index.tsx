import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router'
import { Autocomplete, TextField } from '@mui/material'
import { HoverCircleIcon } from 'src/shared/ui/hover-circle-icon'

const tabs = [
  { title: 'home', href: '/' },
  { title: 'shop', href: '/shop' },
  { title: 'contacts', href: '/vocabulary' }
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {
  const router = useRouter()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const [tab, setTab] = React.useState(() => {
    const initialTab = tabs.findIndex((tab) => tab.href === router.asPath)
    return initialTab === -1 ? 0 : initialTab
  })



  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    const { href } = tabs[newTab]
    router.push(href)
    setTab(newTab)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static' sx={{ borderRadius: 2, px: 2 }}>
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          PC-SHOP
        </Typography>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            disableScrollLock
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {tabs.map((tab, i) => (
              <MenuItem key={i} onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>{tab.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Tabs
            onChange={handleTabChange}
            value={tab}
            aria-label='Tabs where selection follows focus'
            selectionFollowsFocus
          >
            {tabs.map((tab, i) => (
              <Tab key={i} label={tab.title} />
            ))}
          </Tabs>
        </Box>
        <Autocomplete
          size='small'
          sx={{ width: { sm: "60%", md: "20%" }, mx: "auto", display: { xs: "none", sm: "block" } }}
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />

        <HoverCircleIcon Icon={FavoriteIcon} sx={{ mx: 1, mr: 0, ml: { xs: "auto", sm: 1 } }} />

        <HoverCircleIcon Icon={ShoppingCartIcon} sx={{ mx: 1, ml: 0 }} withBadge />



        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
            </IconButton>
          </Tooltip>
          <Menu
            disableScrollLock
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>

        </Box>
      </Toolbar>
    </AppBar >
  )
}
export default Header
