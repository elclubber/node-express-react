import React, { Component } from 'react';
import Coverflow from 'react-coverflow';

class Diapo extends Component {
  fn = () => {
    /* do your action */
  }

  render() {
    return (
      <div>
        <Coverflow
          width={960}
          height={350}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          <div
            onClick={() => this.fn()}
            onKeyDown={() => this.fn()}
            role="menuitem"
            tabIndex="2"
          >
            <img src='./img/11.jpg' className="Diapo" alt='Album one' />
          </div>
          <img src='./img/12.jpg' className="Diapo" alt='Album two' data-action="http://passer.cc" />
          <img src='./img/13.jpg' className="Diapo" alt='Album three' data-action="https://doce.cc/" />
          <img src='./img/14.jpg' className="Diapo" alt='Album four' data-action="http://tw.yahoo.com" />
          <img src='./img/15.jpg' className="Diapo" alt='Album five' data-action="http://www.bbc.co.uk" />
          <img src='./img/16.jpg' className="Diapo" alt='Album six' data-action="https://medium.com" />
          <img src='./img/17.jpg' className="Diapo" alt='Album seven' data-action="http://www.google.com" />
        </Coverflow>
      </div>
    );
  }
}

export default Diapo;