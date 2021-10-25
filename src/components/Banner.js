import React from 'react'
import { Container, Grid, Button } from '@mui/material'


export default function Banner() {
    return(
        <section className="cus-banner">
            <Container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="banner-con">
                        <h2>Best VoIP Phone Systems for Small Businesses</h2>
                        <div className="banner-btns-group">
                            <Button className="cus-btn primary-btn">14-Day Free Trial</Button>
                            <Button className="cus-btn secondary-btn">Plan Purchase</Button>
                        </div>
                    </div>
                </Grid>
            </Container>
        </section>
    )
}