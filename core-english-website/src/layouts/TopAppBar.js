import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import COLORS from '../utility/styles';
import MyHealthLogo from '../images/my-health.png';
import { styled } from '@mui/system';
import AppbarBackground from '../images/appbar-background.png';
import { Divider, Drawer, Grid, IconButton, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FaPhoneAlt } from 'react-icons/fa';
import Button from '../components/Button';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube } from 'react-icons/ti';
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import SmallButton from '../components/SmallButton';
// import {Link} from 'react-scroll';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Hyperlink, NavigationLink } from '../components/Hyperlink';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}
  
ElevationScroll.propTypes = {
children: PropTypes.element.isRequired,
/**
 * Injected by the documentation to work in an iframe.
 * You won't need it on your project.
 */
window: PropTypes.func,
};


const Logo = styled('img')(
  ({ theme }) => `
  cursor: pointer;
  height: ${theme.spacing(11)};
  margin: ${theme.spacing(1)};
  `
)

const LogoSM = styled('img')(
  ({ theme, height }) => `
  cursor: pointer;
  height: ${theme.spacing(height)};
  `
)

const AppBarItems = styled('button')(
  ({ theme }) => `
  position: relative;
  display: inline-block;
  color: ${COLORS.textColor};
  text-transform: uppercase;
  border: none;
  font-size: 1.3rem;
  // font-family:  "Arial Rounded MT Bold";
  background: ${COLORS.whiteColor};
  margin: ${theme.spacing(2)};
  cursor: pointer;
  &:after {
    position: absolute;
    left: 50%;
    content: '';
    height: 2px;
    background: ${COLORS.textColor};
    transition: all 0.35s linear;
    width: 0;
    bottom: -3px;
  }
  &:hover:after {
    width: 100%;
    left: 0px;
  }
  `
)

const IconContainer = styled('div')(
  ({ theme, color }) => `
  background-color: ${color};
  border-radius: 50%;
  padding: ${theme.spacing(0.6)};
  margin-right: ${theme.spacing(1)};
  margin-left: ${theme.spacing(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  `
)

const SocialIconContainer = styled('div')(
  ({ theme, color }) => `
  background-color: ${color};
  border-radius: 50%;
  padding: ${theme.spacing(.6)};
  margin: ${theme.spacing(1.5)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  `
)

const SocialIconContainerSM = styled('div')(
  ({ theme, color }) => `
  background-color: ${color};
  border-radius: 50%;
  padding: ${theme.spacing(0.65)};
  margin: ${theme.spacing(0.15)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  `
)

const DrawerList = styled(List)(
  ({ theme }) => `
  padding-left: ${theme.spacing(3)};
  padding-right: ${theme.spacing(3)}
  `
)

const DrawerListItem = styled(ListItemText)(
  ({ theme }) => `
  color: ${COLORS.primaryColor}
  `
)

const DrawerHeader = styled('div')(
  ({ theme }) => `
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)};
  background: ${COLORS.primaryLight}
  `
);

const HyperLink = styled('a')(
  ({ theme }) => `
  color: ${COLORS.whiteColor};
  text-decoration: none;
  `
)

const DrawerItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Specialities',
    href: 'specialities'
  },
  {
    label: 'About us',
    href: 'about-us'
  },
  {
    label: 'Contact',
    href: 'contact'
  },
  {
    label: 'Payment',
    href: 'payment'
  },
]

const TopAppBar = (props) => {
  const isMediumScreen = useMediaQuery(useTheme().breakpoints.down('md'));
  const isMobileScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [navClickedItem, setNavClickedItem] = useState('Home');
  const getDrawerItemChoices = () => {
    return DrawerItems.map((item, index) => {
      return (
        <ListItem key={index}>
            <NavigationLink to={item.href}><DrawerListItem primary={item.label} onClick={() => setDrawerOpen(false)}/></NavigationLink>
        </ListItem>
      )
    })
  }

  return (
    <>
      {
        isMediumScreen ? 
          <>
            <CssBaseline />
            <AppBar
              sx={{
                backgroundColor: COLORS.whiteColor
              }}
            >
              <Box
                sx={{
                  backgroundColor: COLORS.lightBlue,
                  p: 2
                }}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={8}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center'
                      }}
                    >
                      <IconContainer color={COLORS.redColor}><FaPhoneAlt /></IconContainer>
                      <Typography variant='body2' sx={{ color: COLORS.textColor, fontSize: `${isMobileScreen ? '0.7rem' : '1.2rem'}`}}><b>Hotline +880 1321119391</b></Typography>
                    </Box>
                    
                  </Grid>
                  <Grid item xs={4}
                    sx={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'center'
                    }}
                  >
                    
                      <HyperLink href='https://www.facebook.com/profile.php?id=100083803621943' target="_blank"><SocialIconContainerSM color={COLORS.facebookColor}><TfiFacebook /></SocialIconContainerSM></HyperLink>
                      {/* <SocialIconContainerSM color={COLORS.linkedInColor}><TiSocialLinkedin /></SocialIconContainerSM> */}
                      <HyperLink href='https://www.linkedin.com/company/nextgen-myhealth-vcp/' target="_blank" ><SocialIconContainerSM color={COLORS.linkedInColor}><FaLinkedinIn /></SocialIconContainerSM></HyperLink>
                      <HyperLink href='https://www.youtube.com/channel/UCSDFJqW2y9UYs6IMWGK2i9w' target="_blank"><SocialIconContainerSM color={COLORS.youtubeColor}><TiSocialYoutube /></SocialIconContainerSM></HyperLink>
                      {/* <div style={{ marginRight: '5px', marginLeft: '15px'}}>
                        <Button name='Patients Portal' color={COLORS.greenColor} size='small' />
                      </div>
                      <div>
                        <Button name='Doctors Portal' color={COLORS.primaryColor} size='small' />
                      </div> */}
                  </Grid>
                </Grid>
              </Box>
              <Toolbar>
                <IconButton>
                  <AiOutlineMenu 
                    onClick={() => setDrawerOpen(true)}
                  />
                </IconButton>
                <Container>
                  <Box
                      sx={{
                        justifyContent: 'space-around',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    > 
                      <LogoSM src={MyHealthLogo} height={isMobileScreen ? 7 : 11}/>
                      <div>
                        <HyperLink href='https://patient.nextgenmyhealth.com/' target="_blank"><SmallButton name='Patient Portal' color={COLORS.primaryColor} size='small' fontSize={isMobileScreen ? '0.5rem' : '1rem'}/></HyperLink>
                        <HyperLink href='https://doctor.nextgenmyhealth.com/' target="_blank"><SmallButton name='Doctor Portal' color={COLORS.greenColor} size='small' fontSize={isMobileScreen ? '0.5rem' : '1rem'}/></HyperLink>
                      </div>
                  </Box>
                </Container>
              </Toolbar>
            </AppBar>
            <Drawer
              anchor='left'
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <div
                onClick={() => setDrawerOpen(false)}
              >
                <DrawerHeader>
                  <LogoSM src={MyHealthLogo} height={9} />
                </DrawerHeader>
                
                <Divider />
                <DrawerList>
                  {
                    getDrawerItemChoices()
                  }
                </DrawerList>
              </div>
            </Drawer>
          </>
        :
        <React.Fragment>
          <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar
              sx={{
                backgroundColor: COLORS.whiteColor
              }}
              >
              <Box
                sx={{
                  display: 'flex',
                  backgroundImage: `url(${AppbarBackground})`,
                  height:'8.5vh',
                  width: 1,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  marginTop: -1
                }}
              >
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xl={6} lg={6} sm={6} xs={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Typography variant='h6' sx={{ color: COLORS.textColor }}>Welcome to <b>NextGen MyHealth VCP</b></Typography>
                      <IconContainer color={COLORS.redColor}><FaPhoneAlt /></IconContainer>
                      <Typography variant='h6' sx={{ color: COLORS.textColor }}><b>Hotline +880 1321119391</b></Typography>
                    </Box>
                    
                  </Grid>
                  <Grid item xl={6} lg={6} sm={6} xs={12}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    
                      <HyperLink href='https://www.facebook.com/profile.php?id=100083803621943' target="_blank"><SocialIconContainer color={COLORS.facebookColor}><TfiFacebook /></SocialIconContainer></HyperLink>
                      {/* <SocialIconContainer color={COLORS.linkedInColor}><TiSocialLinkedin /></SocialIconContainer> */}
                      <HyperLink href='https://www.linkedin.com/company/nextgen-myhealth-vcp/' target="_blank" ><SocialIconContainer color={COLORS.linkedInColor}><FaLinkedinIn /></SocialIconContainer></HyperLink>
                      <HyperLink href='https://www.youtube.com/channel/UCSDFJqW2y9UYs6IMWGK2i9w' target="_blank"><SocialIconContainer color={COLORS.youtubeColor}><TiSocialYoutube /></SocialIconContainer></HyperLink>
                      <div style={{ marginRight: '5px', marginLeft: '15px'}}>
                        <HyperLink href='https://patient.nextgenmyhealth.com/' target="_blank"><Button name='Patient Portal' color={COLORS.primaryColor} size='large' /></HyperLink>
                      </div>
                      <div>
                        <HyperLink href='https://doctor.nextgenmyhealth.com/' target="_blank"><Button name='Doctor Portal' color={COLORS.greenColor} size='large' /></HyperLink>
                      </div>
                  </Grid>
                </Grid>
              </Box>
              <Toolbar>
                <NavigationLink to='/'><Logo src={MyHealthLogo} /></NavigationLink>
                <Container>
                  <Box
                    sx={{
                      flexGrow: 1, 
                      flexDirection: 'row', 
                      justifyContent: 'center',
                      display: { xs: 'none', md: 'flex'}
                    }}
                  >
                    {/* <Link to="features" spy={true} smooth={true}><AppBarItems>Features</AppBarItems></Link>
                    <Link to='specialities' spy={true} smooth={true}><AppBarItems>Specialities</AppBarItems></Link>
                    <Link to='steps' spy={true} smooth={true}><AppBarItems>How to use</AppBarItems></Link>
                    <Link to='about-us' spy={true} smooth={true}><AppBarItems>About us</AppBarItems></Link>
                    <Link to='footer' spy={true} smooth={true}><AppBarItems>Contact</AppBarItems></Link> */}
                    <Link onClick={() => setNavClickedItem('Home')} to='/'><AppBarItems  style={{ fontWeight: navClickedItem === 'Home' ? 'bold' : 'normal' }}>Home</AppBarItems></Link>
                    <Link onClick={() => setNavClickedItem('Specialities')} to='specialities'><AppBarItems style={{ fontWeight: navClickedItem === 'Specialities' ? 'bold' : 'normal' }}>Specialities</AppBarItems></Link>
                    <Link onClick={() => setNavClickedItem('About')} to='about-us'><AppBarItems onClick={() => setNavClickedItem('About')} style={{ fontWeight: navClickedItem === 'About' ? 'bold' : 'normal' }}>About Us</AppBarItems></Link>
                    <Link onClick={() => setNavClickedItem('Contact')} to='contact'><AppBarItems onClick={() => setNavClickedItem('Contact')} style={{ fontWeight: navClickedItem === 'Contact' ? 'bold' : 'normal' }}>Contact</AppBarItems></Link>
                    <Link onClick={() => setNavClickedItem('Payment')} to='payment'><AppBarItems onClick={() => setNavClickedItem('Payment')} style={{ fontWeight: navClickedItem === 'Payment' ? 'bold' : 'normal' }}>Payment</AppBarItems></Link>
                  </Box>
                </Container>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
          <Toolbar />
        </React.Fragment>
      }
    </>
    
    
  )
}

export default TopAppBar