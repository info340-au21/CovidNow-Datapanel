export function AboutUs() {
    return ( 
        <div className="row">
            <section className="col-lg">
                <ProblemDesc />
                <TheWho />
                <TheSource />
                <TheInteraction />
                <TheSolution />
                <TheContact />
            </section>
            <section className="col-4 aboutUs-img">
                <img src="../img/Newspic.png" alt="News Icon" />
                <img src="../img/Peoplepic.png" alt="Users Icon" />
                <img src="../img/CovidTrendPic.png" alt="Trend Icon" />
            </section>
        </div>
     );
}

const ProblemDesc = () => {
    return ( 
        <div className="description">
            <h3>Problem Description</h3>
            <p>Our project will be based on the data surrounding COVID-19. 
        The pandemic has persisted around the world for a long time and has changed the lives of the many. 
        Due to how rapidly the illness can spread among others, journalism around COVID-19 seems to be never ending. 
        As we constantly deal with the news and the constant consumption of it, it can be a bit overwhelming. 
        It has also come to our attention that looking for news about COVID-19 tends to be a little bit out of place. 
        The detailed information and publications aren’t as accessible as we want. Oftentimes, news is viewed in the form of TV headlines or article headlines. 
        However, headlines aren’t descriptive and can be misunderstood/be taken with wrong intentions. 
        With this in mind, our group wants to focus on creating a platform where a variety of COVID-19 data can be easily checked. 
        Our goal from this project is to exhibit COVID-19 information in a simpler manner in hopes of more people being cautious about the pandemic.</p>
        </div>
     );
}

const TheWho = () => {
    return ( 
        <div className="description">
            <h3>Who are the users of the application?</h3>
            <p>
                The target users are everyone in the US whose life has been impacted by the pandemic and who are looking for a way to understand the overall situation
                and information about this pandemic more efficiently.
            </p>
        </div>
     );
}

const TheSource = () => {
    return ( 
        <div className="description">
            <h3>What kind of information will the users be viewing?</h3>
            <p>
                An interactive geographic map of the US will be 
                presented to the users to navigate information visually, including:
            </p>
            <p>( click on the list item to view the sources )</p>
            <ul className="p-3 pl-5">
                <li><a href="https://data.cdc.gov/Case-Surveillance/United-States-COVID-19-Cases-and-Deaths-by-State-o/9mfq-cb36">CASE NUMBERS</a></li>
                <li><a href="https://data.cdc.gov/Vaccinations/COVID-19-Vaccinations-in-the-United-States-Jurisdi/unsk-b7fc">VACCINATION RATES</a></li>
            </ul>
            
        </div>
     );
}

const TheInteraction = () => {
    return ( 
        <div className="description">
            <h3>What kind of interaction are expecting to provide?</h3>
            <p>We want the users to be able to hover on/click different states on the map of the United States in order to 
                get better in depth statistics per state such as number of cases, vaccination rate, number of deaths. We will also implement a way to visualize the data to give more meaning behind the numbers.</p>
        </div>
     );
}

const TheSolution = () => {
    return (
        <div className="description">
            <h3>How will using this app help to solve the chosen problem?</h3>
            <p>This will help solve the problem by being an easy access point to critical information surrounding COVID-19. 
                The panel serves as a hub of Covid information, allowing users to access every information they need at one stop intuitively, without jumping to different sources. 
                With information by state and also a news section, it will help keep users well informed about the matter.</p>
        </div>
    )
}

const TheContact = () => {
    return (
        <div className="description">
            <h3>Contact Us</h3>
            <ul className="ml-5">
                    <li><a href = "mailto:danellf@uw.edu"><span class="material-icons">email</span> DANELL FORBES</a></li>
                    <li><a href = "mailto:jinwoo11@uw.edu"><span class="material-icons">email</span> JINWOO KIM</a></li>
                    <li><a href = "mailto:rkoka@uw.edu"><span class="material-icons">email</span> RATIK KOKA</a></li>
                    <li><a href = "mailto:swang45@uw.edu"><span class="material-icons">email</span> WILLIAM WANG</a></li>
            </ul>
        </div>
    )
}