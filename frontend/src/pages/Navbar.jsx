import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Login, Logout, Shop2, Store } from '@mui/icons-material';

import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Badge, Divider, Drawer, ListItemIcon } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { NavLogo } from '../utils/styles';

import Cart from './customer/components/Cart';
import ProductsMenu from './customer/components/ProductsMenu';
import { updateCustomer } from '../redux/userHandle';


const Navbar = () => {
  const { currentUser, currentRole } = useSelector((state) => state.user);

  const totalQuantity =
    currentUser &&
    currentUser.cartDetails &&
    currentUser.cartDetails.reduce((total, item) => total + item.quantity, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (currentRole === 'Customer') {
      dispatch(updateCustomer(currentUser, currentUser._id));
    }
  }, [currentRole, currentUser, dispatch]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSign, setAnchorElSign] = React.useState(null);

  const open = Boolean(anchorElUser);
  const openSign = Boolean(anchorElSign);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleOpenSigninMenu = (event) => setAnchorElSign(event.currentTarget);
  const handleCloseSigninMenu = () => setAnchorElSign(null);

  const homeHandler = () => {
    navigate('/');
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{ backgroundColor: '#556B2F' }}>


        <Toolbar disableGutters>
          {/* MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={() => {
                navigate('/Search');
              }}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <HomeContainer>
            <Typography
              variant="h5"
              noWrap
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
              <NavLogo onClick={homeHandler}>SHOPPERS</NavLogo>
            </Typography>
          </HomeContainer>

          {currentRole === null && (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <Login />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuItem
                  onClick={() => {
                    navigate('/Customerlogin');
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">Sign in as customer</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/Sellerlogin');
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">Sign in as seller</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          
          <HomeContainer>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <NavLogo onClick={homeHandler}>
                <LocalMallIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                SHOPPERS
              </NavLogo>
            </Typography>
          </HomeContainer>

           <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>

  <Box
    sx={{
      flexGrow: 1,
      maxWidth: '600px',
      backgroundColor: 'white',
      borderRadius: '8px',
      px: 2,
      py: 0.5,
      boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      height: '40px',
    }}
  >
    <SearchIcon sx={{ color: '#888', mr: 1 }} />
    <input
      type="text"
      placeholder="Search for products, brands and more"
      style={{
        border: 'none',
        outline: 'none',
        fontSize: '1rem',
        flexGrow: 1,
        background: 'transparent',
      }}
    />
  </Box>

  
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <ProductsMenu
  dropName="Categories"
  sx={{
    backgroundColor: '#90EE90',
    color: 'black',
    fontWeight: 500,
    textTransform: 'uppercase',
    height: '40px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#76c776',
    },
  }}
/>

<ProductsMenu
  dropName="Products"
  sx={{
    backgroundColor: '#90EE90',
    color: 'black',
    fontWeight: 500,
    textTransform: 'uppercase',
    height: '40px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#76c776',
    },
  }}
/>

<Button
  variant="contained"
  onClick={() => window.location.href = '/about'}
  sx={{
    backgroundColor: '#90EE90',
    color: 'black',
    fontWeight: 500,
    textTransform: 'uppercase',
    height: '40px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#76c776',
    },
  }}
>
  About Us
</Button>

  </Box>
</Box>




          {currentRole === null && (
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleOpenSigninMenu} sx={{ my: 2, color: 'white' }}>
                Sign in
              </Button>
              <Menu
                anchorEl={anchorElSign}
                open={openSign}
                onClose={handleCloseSigninMenu}
                PaperProps={{ elevation: 0, sx: styles.styledPaper }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => navigate('/Customerlogin')}>
                  <Avatar />
                  <Link to="/Customerlogin">Sign in as customer</Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => navigate('/Sellerlogin')}>
                  <ListItemIcon>
                    <Store fontSize="small" />
                  </ListItemIcon>
                  <Link to="/Sellerlogin">Sign in as seller</Link>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {currentRole === 'Customer' && (
            <Box sx={{ flexGrow: 0, display: 'flex' }}>
              <Tooltip title="Cart">
                <IconButton onClick={handleOpenCart} sx={{ width: '4rem', color: 'inherit', p: 0 }}>
                  <Badge badgeContent={totalQuantity} color="error">
                    <ShoppingCartIcon sx={{ fontSize: '2rem' }} />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32, backgroundColor: '#90EE90' }}>
                    {String(currentUser.name).charAt(0)}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                open={open}
                onClose={handleCloseUserMenu}
                PaperProps={{ elevation: 0, sx: styles.styledPaper }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={() => navigate('/Profile')}>
                  <Avatar />
                  <Link to="/Profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={() => navigate('/Orders')}>
                  <ListItemIcon>
                    <Shop2 fontSize="small" />
                  </ListItemIcon>
                  <Link to="/Orders">My Orders</Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => navigate('/Logout')}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  <Link to="/Logout">Logout</Link>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>

      {isCartOpen && (
        <Drawer
          anchor="right"
          open={isCartOpen}
          onClose={handleCloseCart}
          sx={{
            width: '400px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '400px',
              boxSizing: 'border-box',
            },
          }}
        >
          <Cart setIsCartOpen={setIsCartOpen} />
        </Drawer>
      )}
    </AppBar>
  );
};

export default Navbar;

const HomeContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

const styles = {
  styledPaper: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))',
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
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};
