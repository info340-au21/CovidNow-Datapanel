import React from "react";

export function Description() {
    return (
        <div  className="text-center">
            <IntroBanner />
            <RealTime />
            <InteractiveMap/>
            <OverviewPageDemo/>
        </div>
    )
}

export function IntroBanner() {
    return (
        <div className="pt-5 pb-5">
            <div className="bg-light">
                <h1>Thank you for visiting our page!</h1>
                <h2>Our mission is to deliver up-to-date USA COVID-19 data comfortably and user-friendly.</h2>
            </div>
        </div>
    )
}

export function RealTime() {
    return (
        <div className="mt-5 pb-5 description-img">
            <h2>Real Time Data!</h2>
            <p>Our COVID-19 data is provided by an API from Covid Act Now.</p>
            <a href="https://covidactnow.org/" target="_blank"><img src="../img/CovidActNowLogo.png" alt="d" /></a>
            <p>-</p>
            <a href="https://covidactnow.org/data-api">covidactnow.org/data-api</a>
            <p>-</p>
            <a href="https://apidocs.covidactnow.org/">apidocs.covidactnow.org</a>
            <p>-</p>
            <p>The API updates daily around noon Eastern Time,</p>
            <p>and includes data ranging from COVID-19 cases, deaths, vaccination rates, tests, hospitalization rates, and <a href="https://apidocs.covidactnow.org/data-definitions/">more</a>.</p>
        </div>
    )
}

export function OverviewPageDemo() {
    return (
        <div className="mt-5 pb-5 description-img">
            <h2>What's included in our Overview page?</h2>
            <p>-</p>
            <p>Left includes a banner with an up-to-date total COVID-19 cases and deaths for USA.</p>
            <img src="../img/OverviewLeftBanner.png" alt="d" />
            <p>Right includes a state map with a functioning interactive map that shows various COVID-19 data for each state.</p>
            <img src="../img/OverviewRightBanner.png" alt="d" />
        </div>
    )
}

export function InteractiveMap() {
    return (
        <div className="mt-5 description-img">
            <h2>Interactive Map!</h2>
            <p>Our interactive map is provided by Mapbox GL JS from Mapbox.</p>
            <a href="https://www.mapbox.com/" target="_blank"><img src="../img/MapboxLogo.svg" alt="d" /></a>
            <p>-</p>
            <a href="https://docs.mapbox.com/mapbox-gl-js/guides/">docs.mapbox.com/mapbox-gl-js</a>
            <p>-</p>
            <p>A library for building customizable, user-interactive map for web applications.</p>
            <p>Thanks to Mapbox, we are able to easily visualize our COVID-19 for each states.</p>
            <div className="map-gif">
                <img src="../img/movement.gif" alt="s" />
                <img src="../img/statehover.gif" alt="s" />
            </div>
            {/* <img src="../img/movement.gif" alt="s" />
            <img src="../img/statehover.gif" alt="s" /> */}
        </div>
    )
}