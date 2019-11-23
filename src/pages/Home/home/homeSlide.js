import React from 'react'
import { PageSlide } from '../components/PageSlide'
import { anchors } from '../anchors'
import cup from '../../../styles/images/cup.png'
import { NextSectionButton } from '../components/NextSectionButton'

export const HomeSlide = ({ fullpageApi }) => {
    return (
        <PageSlide id={anchors.home.value}>
            <div className="col-lg-8 mt-3">
                <div className="">
                    <h1 className="text-white home-title">StarBaraks </h1>
                    <p className="text-white home-subtitle pt-4">Freshly brewed and, always ready
                        for
                        you</p>
                    <div className="">
                        <NextSectionButton {...{ fullpageApi, icon: 'mdi mdi-thumb-up', title: 'Order Now' }} />
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mt-3">
                <div>
                    <img src={cup} alt="StarBaraks" className="img-fluid mx-auto d-block"/>
                </div>
            </div>
        </PageSlide>
    )
}

