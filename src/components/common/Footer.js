import React from 'react'
import { Container, Grid } from '@mui/material'

export default function Footer() {
    return(
        <footer>
            <Container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="d-flex w-100 con-space-between align-center">
                        <div className="logo-sec">
                            <a href="#">
                                <img src="./assets/images/logo.svg" alt="" />
                            </a>
                        </div>
                        <div className="copy-right">
                            <p>2020 UnifiedRing. All rights reserved</p>
                        </div>
                        <div className="footer-right">
                            <ul className="d-flex align-center">
                                <li>
                                    <a href="#">
                                        <img src="./assets/images/facebook.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./assets/images/twitter.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./assets/images/you-tube.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./assets/images/instagram.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="./assets/images/linkedin.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                            <div className="chat-sec">
                                <img src="./assets/images/chat.png" alt="" />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Container>
        </footer>
    )
}