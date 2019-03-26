import React, { Component } from 'react';
import API from './../utils/API';
import VerticalTimeline from './../Components/VerticalTimeline/VerticalTimeline';
import TimelineEvent from './../Components/TimelineEvent/TimelineEvent';
import NewReleases from '@material-ui/icons/NewReleases';

class MainTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsArray: []
    };
  }

  getEvents = () => {
    API.getEvents().then(res => {
      this.setState({
        eventsArray: res.data
      });
    });
  };

  render() {
    return (
      <div className='MainContainer'>
        <h3>AGMC History</h3>

        <VerticalTimeline layout='2-columns'>
          <TimelineEvent
            primaryDate='1981'
            icon={<NewReleases />}
            name='AGMC Founded'
            type='Special Event'
            description={
              "In 1981, the fact that a group of gay men in Atlanta formed a chorus and actually had the temerity to call itself the Atlanta GAY MEN'S Chorus was a bold and courageous act--and we must not forget the bravery our first members displayed simply by BEING a member. From the very start, Atlanta's gay and lesbian community embraced the AGMC--its very existence a proud statement of self-empowerment. EVen today, for many members, joining the Atlanta Gay Men's Chorus is still a huge step towards affirmation and validation of their identity as gay men."
            }
            location='Atlanta, GA'
          />
          <TimelineEvent
            primaryDate='October 18, 1981'
            name='Sneak Preview'
            location='(First) Metropolitan Community Church Virginia Highlands'
            icon={<NewReleases />}
            concertSeason='First Concert Season'
            director='Jeffrey D. McIntyre'
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default MainTimeline;
