import React from "react";
import { Link } from "react-router-dom";

export function Description() {
    return (
        <div  className="description-page text-center">
            <IntroBanner />
            <DirectToAbout/>
            <RealTime />
            <OverviewPageDemo/>
            <InteractiveMap/>
            <DescriptionDashboard/>
            <LogInDescription/>
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
            <a href="https://covidactnow.org/" target="_blank"><img src="../img/CovidActNowLogo.png" alt="covid act now logo" /></a>
            <p>-</p>
            <a href="https://covidactnow.org/data-api" target="_blank">covidactnow.org/data-api</a>
            <p>-</p>
            <a href="https://apidocs.covidactnow.org/" target="_blank">apidocs.covidactnow.org</a>
            <p>-</p>
            <p>The API updates daily around noon Eastern Time,</p>
            <p>and includes data ranging from COVID-19 cases, deaths, vaccination rates, tests, hospitalization rates, and <a href="https://apidocs.covidactnow.org/data-definitions/">more</a>.</p>
        </div>
    )
}

export function OverviewPageDemo() {
    return (
        <div className="mt-5 description-img">
            <h2>What's included in our Overview page?</h2>
            <p>Left includes a banner with an up-to-date total COVID-19 cases and deaths for USA.</p>
            <img src="../img/OverviewLeftBanner.png" alt="overview stastics" />
            <p>Right includes a state map with a functioning interactive map that shows various COVID-19 data for each state.</p>
            <img src="../img/OverviewRightBanner.png" alt="overview map" />
        </div>
    )
}

export function InteractiveMap() {
    return (
        <div className="mt-5 description-img">
            <h2>Interactive Map!</h2>
            <p>Our interactive map is provided by Mapbox GL JS from Mapbox.</p>
            <a href="https://www.mapbox.com/" target="_blank"><img src="../img/MapboxLogo.svg" alt="mapbox logo" /></a>
            <p>-</p>
            <a href="https://docs.mapbox.com/mapbox-gl-js/guides/" target="_blank">docs.mapbox.com/mapbox-gl-js</a>
            <p>-</p>
            <p>A library for building customizable, user-interactive map for web applications.</p>
            <p>Thanks to Mapbox, we are able to easily visualize our COVID-19 for each states.</p>
            <div className="map-gif">
                <img src="../img/movement.gif" alt="dragging map" />
                <img src="../img/statehover.gif" alt="state statistics" />
            </div>
        </div>
    )
}

export function DescriptionDashboard() {
    return (
        <div className="mt-5">
            <h2>Dashboard.</h2>
            <p>When user clicks on a state from the overview page, the web brings the user to the dashboard page,</p>
            <div className="dashboard-top-img">
                <img src="../img/TopDashboard.png" alt="dashboard statstics" />
            </div>
            <p>The dashboard page includes a comprehensive COVID-19 data & interactive COVID-19 data chart for the chosen state.</p>
            <div className="map-gif">
                <img src="../img/FirstTrendChart.gif" alt="dashboard chart one" />
                <img src="../img/SecondTrendChart.gif" alt="dashboard chart two" />
            </div>
        </div>
    )
}

export function LogInDescription() {
    return (
        <div className="description-dashboard-img mt-3">
            <h2>Login and Logout!</h2>
            <p>To provide convenience for returning users,</p>
            <p>Login page allows users to sign in and save the dashboard data from where they left off!</p>
            <img src="../img/NoLoginDashboard.png" alt="Empty Dashboard" />
            <img src="../img/FeatureLogin.png" alt="Initial Login" />
        </div>
    )
}

export function DirectToAbout() {
    return (
        <div>
            <p>(To learn more about our project, head over to the <Link to="/about">About Us</Link> section)</p>
        </div>
    )
}