import React, { Component } from 'react';
import Diapo from '../Diapo';
import Plx from 'react-plx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.parallaxData = [
      {
        start: 0,
        end: 10,
        properties: [
          {
            startValue: 1,
            endValue: 0,
            property: 'skew',
          },
        ],
      },
    ];
  }

  render() {
    return (
      <div className="home">
        <Diapo />
        <div className="home_1_canvas">
          <Plx
            className='MyAwesomeParallax'
            parallaxData={this.parallaxData}
          >
            <div>test dcsdfsdfsdfsdfsdfsffsdfsdfsf</div>
          </Plx>
        </div>
        ici cest le home
  </div>
    );
  }
}

export default Home;