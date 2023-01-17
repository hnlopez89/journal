import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layot/AuthLayout'

export const RegisterPage = () => {
    return (
        <>
            <AuthLayout>
                <form>
                    <Grid container>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField
                                label="Nombre completo"
                                type="email"
                                placeholder='John Smith'
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField
                                label="correo"
                                type="email"
                                placeholder='correo@gmail.com'
                                fullWidth
                            >
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField
                                label="password"
                                type="password"
                                placeholder='Introduce your password'
                                fullWidth
                            >
                            </TextField>
                        </Grid>
                        <Grid container spacing={2} sx={{mb: 2, mt:1}}>
                            <Typography sx={{mr:1}}>Ya tienes cuenta?</Typography>
                            <Grid item xs={12}sm={6}>
                                <Button variant="contained" fullWidth>
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>                        
                        <Grid container direction='row' justifyContent='end'>
                            <Link component={RouterLink} color='inherit' to="/auth/login">
                             Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </AuthLayout>

        </>
    )
}