import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import { green } from '@material-ui/core/colors'
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'


const useStyles = makeStyles({
    root: {
        testAlign: 'center',
        maxWidth: 'sm',
        width: '70%',
        justifySelf: 'center',
    }
})

const Question = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                        <Paper style={{
                            height: 350,
                            width: 100,
                            backgroundColor: '#444'
                        }}>
                        <Avatar variant='circular' src='http://placekitten.com/200/300' />
                        </Paper>
                </Grid>
                <Grid item>
                        <Paper style={{
                            height: 350,
                            width: 500,
                            backgroundColor: '#444'
                      }}>
                                    <Card>
                <CardContent>
                <Typography variant='h5'>
                    user asks:
                    </Typography>
                <Typography variant='h3'>
                    Would You Rather.....?
                </Typography>
                <Typography variant='h4'>
                    Question!!!
                </Typography>
                <FormControl component="fieldset">
                <FormLabel component="legend"></FormLabel>
                <RadioGroup aria-label="answers" name="gender1">
                            {/* value={value} onChange={handleChange} */}
                    <FormControlLabel value="female" control={<Radio />} label="Option 1" />
                    <FormControlLabel value="male" control={<Radio />} label="Option 2" />
                </RadioGroup>
                <Button
                    variant='contained'
                    color='primary'>
                    Sumbit
                </Button>
                </FormControl>
                </CardContent>
            </Card>
                        </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Question

// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #222, #999)',
//         width: '400px',
//         testAlign: 'center',
//     }
// })

// function SimpleCard() {
//     const classes = useStyles()
//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography color="textSecondary" gutterBottom>
//             User asks:
//         </Typography>
//               <Avatar
//                   variant='circular'
//                   src='http://placekitten.com/200/300'
//                   />
//         <Typography variant="h5" component="h2">
//           Would You Rather....
//         </Typography>
//         <Typography variant="body2" component="p">
//                   Question??????
//         </Typography>
//           </CardContent>
//           <RadioGroup>
//               <Radio />
//               <Radio />
//           </RadioGroup>
//       <CardActions>
//         <Button size="small" color='primary'>Sumbit</Button>
//       </CardActions>
//     </Card>
//   );
// }
    //    <Card>
    //             <CardContent>
    //             <Typography variant='h5'>
    //                 user asks:
    //                 </Typography>
    //             <Avatar variant='circular' src='http://placekitten.com/200/300' />
    //             <Typography variant='h3'>
    //                 Would You Rather.....?
    //             </Typography>
    //             <Typography variant='h4'>
    //                 Question!!!
    //             </Typography>
    //             <FormControl component="fieldset">
    //             <FormLabel component="legend"></FormLabel>
    //             <RadioGroup aria-label="answers" name="gender1">
    //                         {/* value={value} onChange={handleChange} */}
    //                 <FormControlLabel value="female" control={<Radio />} label="Option 1" />
    //                 <FormControlLabel value="male" control={<Radio />} label="Option 2" />
    //             </RadioGroup>
    //             <Button
    //                 variant='contained'
    //                 color='primary'>
    //                 Sumbit
    //             </Button>
    //             </FormControl>
    //             </CardContent>
    //         </Card>
