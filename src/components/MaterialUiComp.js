// import React from 'react'
// import Button from '@material-ui/core/Button'
// import ButtonGroup from '@material-ui/core/ButtonGroup'
// import SaveIcon from '@material-ui/icons/Save'
// import DeleteIcon from '@material-ui/icons/Delete'
// import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
// import { orange } from '@material-ui/core/colors'
// import { green } from '@material-ui/core/colors'
// import 'fontsource-roboto'
// import Typography from '@material-ui/core/Typography'
// import Container from '@material-ui/core/Container'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import AppBar from '@material-ui/core/AppBar'
// import ToolBar from '@material-ui/core/ToolBar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'



// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #222, #999)',
//         border: 0,
//         borderRadius: 15,
//         color: 'white',
//         marginBottom: 15,
//         marginRight: 15,
//         padding: '5 30px'
//     }
// })

// const theme = createTheme({
//     topography: {
//         h2: {
//             fontSize: 24,
//             marginBottom: 15
//         }
//     },
//     palette: {
//         primary: {
//            main: orange[400],
//         },
//         secondary: {
//            main: green[400],
//         } 
//     }
// })

// function ButtonStyled() {
//     const classes = useStyles()
//     return <Button className={classes.root}>Test Styled Button</Button>
// }

// const MaterialUiComp = () => {
//     return (
//         <ThemeProvider theme={theme} >
//             <Container style={{ textAlign: 'center' }} maxWidth='sm'>
//                 <div>
//                     <AppBar color='secondary'>
//                         <ToolBar>
//                             <IconButton>
//                                     <MenuIcon></MenuIcon>
//                             </IconButton>
//                             <Typography variant='h6'>
//                                 MUI Training
//                             </Typography>
//                             <Button>
//                                 Login
//                             </Button>
//                         </ToolBar>
//                     </AppBar>
//                 <Typography variant='h4'>
//                         Welcome to MUI!
//                 </Typography>
//                 <Typography variant='body1' component='div'>
//                         Learn how to use Material UI!
//                 </Typography>
//                     <ButtonStyled />
//                     <Grid container spacing={2} justify="center">
//                     <Grid item xs={12} sm={6}>
//                         <Paper style={{
//                             height: 75,
//                             width: "100%",
//                             backgroundColor: 'red'
//                         }}>

//                         </Paper>
//                         </Grid>
//                                             <Grid item>
//                         <Paper style={{
//                             height: 75,
//                             width: 50,
//                             backgroundColor: 'red'
//                         }}>

//                         </Paper>
//                         </Grid>
//                                             <Grid item>
//                         <Paper style={{
//                             height: 75,
//                             width: 50,
//                             backgroundColor: 'red'
//                         }}>

//                         </Paper>
//                         </Grid>
//                                             <Grid item>
//                         <Paper style={{
//                             height: 75,
//                             width: 50,
//                             backgroundColor: 'red'
//                         }}>

//                         </Paper>
//                     </Grid>
//                     </Grid>


//             <ButtonGroup>
//                 <Button
//                     size='small'
//                     variant='contained'
//                     color='primary'
//                     startIcon={<SaveIcon />}>
//                     Save
//                 </Button>
//                 <Button
//                     size='small'
//                     variant='contained'
//                     color='secondary'
//                     startIcon={<DeleteIcon />}>
//                     Discard
//                 </Button>
//             </ButtonGroup>
//                 </div>
//                 </Container>
//         </ThemeProvider>
//     )
// }

// export default MaterialUiComp
