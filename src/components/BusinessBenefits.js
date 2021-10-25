import React from 'react'
import { Container, Grid, Card } from '@mui/material'

export const cardInfo = [
    { img: "./assets/images/business-sec-01.png", title: "No installation, no activation fee, and no set-up fee." },
    { img: "./assets/images/business-sec-02.png", title: "Get auto-receptionist to handle calls with customized and informative IVRs." },
    { img: "./assets/images/business-sec-03.png", title: "Chat and collaborate efficiently with your remote teams." }
]

export default function BusinessBenefits() {
    return(
        <section className="cus-business-benefits">
            <Container>
                <Grid item lg={12} md={12} sm={12} xs={12} className="text-center">
                    <h2>Unlimited business benefits with UnifiedRing</h2>
                    <p>Manage virtual teams with maximum efficiency.</p>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Grid container spacing={3}>
                        {
                            cardInfo.map((item, index) => {
                                const {img="", title=""} = item;
                                return(
                                    <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                                        <Card className="card-sec box-shadow-none">
                                            <div className="card-img">
                                                <img src={img || ""} alt="" />
                                            </div>
                                            <h2>{title || ""}</h2>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}