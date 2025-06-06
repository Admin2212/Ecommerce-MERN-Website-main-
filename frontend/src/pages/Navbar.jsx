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
import { useNavigate } from 'react-router-dom';
import { Avatar, Badge, Divider, Drawer, ListItemIcon, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
//import { styled } from 'styled-components';
//import { NavLogo } from '../utils/styles';
import Cart from './customer/components/Cart';
import ProductsMenu from './customer/components/ProductsMenu';
import { updateCustomer } from '../redux/userHandle';

const Navbar = () => {
  const { currentUser, currentRole } = useSelector((state) => state.user);
  const totalQuantity =
    currentUser?.cartDetails?.reduce((total, item) => total + item.quantity, 0) || 0;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 600px)');

  React.useEffect(() => {
    if (currentRole === 'Customer') {
      dispatch(updateCustomer(currentUser, currentUser._id));
    }
  }, [currentRole, currentUser, dispatch]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSign, setAnchorElSign] = React.useState(null);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleOpenSigninMenu = (event) => setAnchorElSign(event.currentTarget);
  const handleCloseSigninMenu = () => setAnchorElSign(null);
  const homeHandler = () => navigate('/');

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl" sx={{ backgroundColor: '#556B2F' }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* LEFT SECTION */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <Login />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                cursor: 'pointer',
              }}
              onClick={homeHandler}
            >
              <LocalMallIcon sx={{ mr: 1 }} />
              SHOPPERS
            </Typography>
          </Box>

          {/* SEARCH */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                mx: 2,
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
          )}

          {/* RIGHT SECTION */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <>
                <ProductsMenu dropName="Categories" sx={buttonStyles} />
                <ProductsMenu dropName="Products" sx={buttonStyles} />
                <Button
                  variant="contained"
                  onClick={() => navigate('/about')}
                  sx={buttonStyles}
                >
                  About Us
                </Button>
              </>
            )}

            {currentRole === 'Customer' && (
              <>
                <Tooltip title="Cart">
                  <IconButton onClick={handleOpenCart} color="inherit">
                    <Badge badgeContent={totalQuantity} color="error">
                      <ShoppingCartIcon sx={{ fontSize: '2rem' }} />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    <Avatar sx={{ width: 32, height: 32, backgroundColor: '#90EE90' }}>
                      {currentUser?.name?.charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </>
            )}

            {currentRole === null && !isMobile && (
              <Button onClick={handleOpenSigninMenu} sx={{ color: 'white' }}>
                Sign In
              </Button>
            )}
          </Box>
        </Toolbar>

        {/* Mobile Nav Menu */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          <MenuItem onClick={() => navigate('/Customerlogin')}>Sign in as Customer</MenuItem>
          <MenuItem onClick={() => navigate('/Sellerlogin')}>Sign in as Seller</MenuItem>
          <Divider />
          <MenuItem onClick={() => navigate('/about')}>About Us</MenuItem>
        </Menu>

        {/* SignIn Menu */}
        <Menu
          anchorEl={anchorElSign}
          open={Boolean(anchorElSign)}
          onClose={handleCloseSigninMenu}
          PaperProps={{ elevation: 0, sx: styles.styledPaper }}
        >
          <MenuItem onClick={() => navigate('/Customerlogin')}>
            <Avatar />
            Sign in as customer
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => navigate('/Sellerlogin')}>
            <ListItemIcon>
              <Store fontSize="small" />
            </ListItemIcon>
            Sign in as seller
          </MenuItem>
        </Menu>

        {/* User Menu */}
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          PaperProps={{ elevation: 0, sx: styles.styledPaper }}
        >
          <MenuItem onClick={() => navigate('/Profile')}>
            <Avatar />
            Profile
          </MenuItem>
          <MenuItem onClick={() => navigate('/Orders')}>
            <ListItemIcon>
              <Shop2 fontSize="small" />
            </ListItemIcon>
            My Orders
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => navigate('/Logout')}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Container>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={handleCloseCart}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '90%', sm: '400px' },
            boxSizing: 'border-box',
          },
        }}
      >
        <Cart setIsCartOpen={setIsCartOpen} />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

const buttonStyles = {
  backgroundColor: '#90EE90',
  color: 'black',
  fontWeight: 500,
  textTransform: 'uppercase',
  height: '40px',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: '#76c776',
  },
};

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
