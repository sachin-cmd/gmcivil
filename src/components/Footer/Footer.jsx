import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'address'} />
        <FooterLink 
        text={'3/203, Moogambigai Nagar Police Commissioner Colony, Pozhichalur, Ch-74.'} 
        />
        <FooterLink 
        text={'+91 7358584157'} 
        />
        <FooterLink > gmcivilsolutions@gmail.com</FooterLink>
      
        
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'build house'} />
        <FooterLink text={'WaterProofing'} />
        <FooterLink text={'Painting'} />
        <FooterLink text={'+ All Civil Works A - Z'} />
        
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'GM Civil Solutions'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        marginLeft='50px'
        justifyContent='space-between'
        >
          <Link href="https://www.instagram.com/gm_civil_solutions" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          {/* <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link>  */}
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2023 GM Civil Solutions.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer