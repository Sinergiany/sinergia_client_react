import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import logo from '../logo.svg';

export default class Carouselshow extends React.Component{

    render() {
        return (
            <Carousel showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={logo} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={logo} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                  <img src={logo} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                  <img src={logo} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                  <img src={logo} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }

}
    