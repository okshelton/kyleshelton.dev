import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import gif from "../../dist/images/fenty.gif"

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="Projects">
        <div className="project-container" style={{marginTop: '10em'}}>
        <div className="title" style={{marginTop: 0, textAlign: 'center'}}>projects</div>
        {/* <div>a few of the projects i have been working on recently</div> */}
        </div>
        <div className="projectcontainer">
          <div className="projectBlurb">
            <div className="title">Blue Checks</div>
            <div className="about">
              •Worked in an agile team environment to develop a mobile first application for viewing and rating police experiences <br/>
              •Implemented authenticated user login through email and Google Firebase, adhering to the OAuth 2.0 industry standard<br/>
              •Deployed live chat rooms and user post feed, as well as a review module to rate an experience with a police officer
            </div>
            <div className="projButton" style={{backgroundColor: '#3c3c64'}}>UNDER CONTRUCTION</div>
          </div>
          <div className="projectPic" style={{width: '200px'}}>
            <Carousel showThumbs={false}>
              <div>
                <img src="https://i.imgur.com/82VFwq7.png" alt="" className="pic"/>
                {/* <p className="legend">chatroom</p> */}
              </div>
              <div><img src="https://i.imgur.com/4vdq1Kv.png" alt="" className="pic"/></div>
              <div><img src="https://i.imgur.com/7CfrSqA.png" alt="" className="pic"/></div>
              <div><img src="https://i.imgur.com/UlQnuF5.png" alt="" className="pic"/></div>
            </Carousel>
          </div>
        </div>
        <div className="projectcontainer">
          <div className="projectPic">
          <iframe width="100%" height="277" src="https://www.youtube.com/embed/1vjU9a_LOSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="projectBlurb">
            <div className="title">Fenty Beauty Reviews Module</div>
              <div className="about">
                •Worked in a team environment to replicate the Fenty Beauty website in React <br/>
                •Rendered 100 unique review modules, utilizing sorting methods to dynamically render my dataset by most helpful, most recent, and by product rating <br/>
                •Integrated each team members micro component onto a proxy service
              </div>
              <div className="projButton">github</div>
          </div>
        </div>
        <div className="projectcontainer" style={{marginBottom: '5em'}}>
          <div className="projectBlurb">
            <div className="title">System Design Project</div>
            <div className="about">
              •Scaled data set from 100 to 10M entries via a CSV seed script and benchmarked performance with K6 <br/>
              •Refactored legacy code base to support the the transition from mySQL to postgreSQL<br/>
              •Deployed application to AWS EC2, achieving 2000 RPS with a latency of 60ms <br/>
              •Implemented Nginx Round-robin load balancing and server caching to achieve a throughput of 6500 RPS with a 0% error rate and an average latency of 66ms in testing, resulting in a 300% increase in average RPS
            </div>
          </div>
          <div className="projectPic">
            <img src="https://i.imgur.com/QdoABZB.png" style={{width: '500px'}}/>
          </div>
        </div>
      </div>
    )
  }
}