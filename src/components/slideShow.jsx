import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import logo from '../logo.svg';
import SignUpSupporter from '../img/SignUpSupporter.png';
import uno from '../img/01.jpg';
import dos from '../img/02.jpg';
import tres from '../img/03.jpg';
import cuatro from '../img/04.jpg';
import cinco from '../img/05.jpg';



export default class Carouselshow extends React.Component{

    render() {
        return (
            <Carousel autoPlay={true} showArrows={true} onChange={this.onChange} onClickItem={this.onClickItem} onClickThumb={this.onClickThumb}>
                <div>
                    <img src={logo} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src={SignUpSupporter} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src={uno} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                  <img src={dos} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                  <img src={tres} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                  <img src={cuatro} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }

}
    