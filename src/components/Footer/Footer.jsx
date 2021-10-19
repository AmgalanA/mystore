import React from 'react'
import useStyles from './styles'
import { Typography, Box, Grid, Container } from '@material-ui/core';
import PhoneIcon from '../../assets/img/phoneIcon.png'
import ViberIcon from '../../assets/img/ViberIcon.png'
import VKIcon from '../../assets/img/VKIcon.png'

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
                <Container>
                    <Grid className={classes.accountsContainer} item>
                        <Box >
                            <Typography gutterBottom variant="h6">Наши контакты</Typography>
                        </Box>
                    </Grid>
                    <Grid  item>
                        <Box style={{marginTop:'0px'}} className={classes.accountsContainer}>
                            <img className={classes.accountsImage} src={PhoneIcon} alt="phone icon" width="20" height="20"/>
                            <Typography className={classes.accountsText} variant="body2">Номер телефона </Typography>
                            <Typography>89243024</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.accountsContainer}>
                            <img className={classes.accountsImage} src={VKIcon} alt="phone icon" width="20" height="20"/>
                            <Typography gutterBottom className={classes.accountsText} variant="body2">ВКонтакте</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className={classes.accountsContainer}>
                            <img className={classes.accountsImage} src={ViberIcon} alt="phone icon" width="20" height="20"/>
                            <Typography gutterBottom className={classes.accountsText} variant="body2">Viber</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box>
                            <Typography gutterBottom>Instagram</Typography>
                        </Box>
                    </Grid>
                </Container>
        </footer>
    )
}

export default Footer
