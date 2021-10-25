import React from 'react'
import { Container, Grid } from '@mui/material'


export default function Header() {
    return(
        <header>
            <Container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="d-flex w-100 con-space-between align-center">
                        <div className="logo-sec">
                            <a href="#">
                                <img src="./assets/images/logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="call-sec">
                            <a href="tel:02034440000">
                                <img src="./assets/images/call_icon.png" alt="" />
                                02034440000
                            </a>
                        </div>
                    </div>
                </Grid>
            </Container>
        </header>
    )
}