'use client'

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { usePathname } from 'next/navigation';


const settings = [{ label: 'Profil', link: '/profile' }];
const userPages = [{ label: 'Wyszukiwarka', link: '/' }, { label: 'Wyszukiwarka kliniczna', link: 'wyszukiwarka-kliniczna' }];
const adminPages = [{ label: 'Repertoryzacja', link: 'repertoryzacja' }, { label: 'Statystyki', link: 'stats' }, { label: 'Lewa prawa', link: 'imageAI' }, { label: 'Zdjęcia repertorium', link: 'imageAIRepSymptoms' }];
// { label: 'Wyszukiwarka BETA', link: 'wyszukiwarka' }

function NavigationBarResponsive() {
  
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [pages, setPages] = useState(userPages)
  const currentPath = usePathname();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();

    if (session?.user?.isAdmin) {
      setPages([...userPages, ...adminPages])
    }
  }, [session?.user]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            REMEDY SEARCHER
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* mobile */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map(({ label, link }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu} className={currentPath == '/profile' ? 'active' : ''}>
                  <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RS
          </Typography>

          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ label, link }) => (
              <Link
                href={link}
                key={label}
                onClick={handleCloseNavMenu}
                style={{ marginRight: 15 }}
              >
                {label}
              </Link>
            ))}
          </Box>
          <Box>
          { !session?.user && (
                  <>
                    {
                      Object.values(providers || {}).length ? (
                        Object.values(providers).map((provider) => (
                          <GoogleLoginButton 
                            key={provider.name}
                            disabled={!providers} // can also be written as disabled={true} for clarity
                            onClick={() => { signIn(provider.id) }}
                            size='30px'
                          />
                        ))
                      ) : (
                        <GoogleLoginButton 
                          key={'no providers'}
                          disabled={true} // can also be written as disabled={true} for clarity
                          onClick={() => {console.log('wait for providers')}}
                          size='30px'
                        />
                      )
                    }
                  </>
                )}
          </Box>
          {
            
            session?.user ? (
              <Box sx={{ flexGrow: 0 }}>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={session?.user.image} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(({ label, link }) => (
                    <MenuItem key={label} onClick={handleCloseUserMenu}>
                      <Link href={link}>
                        <Typography sx={{ textAlign: 'center' }}>{label}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                    <MenuItem onClick={signOut}>
                      <Link href={'/'}>
                        <Typography sx={{ textAlign: 'center' }}>Wyloguj</Typography>
                      </Link>
                    </MenuItem>
                </Menu>
              </Box>
            ) : null
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBarResponsive;
