import React from 'react'
import Slider from 'react-touch-drag-slider'
import images from '../images'
import styled, { createGlobalStyle } from 'styled-components'



function Carousel() {

    const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
    }
    html,body {
      padding: 0;
      margin: 0;
    }
  `
    // The slider will fit any size container, lets go full screen...
    const AppStyles = styled.main`
    
    height:100vh;
    width:100vw;
    margin-top: 20%;
  `


    return (
        <div className="imageContainer">
            <GlobalStyles />
            <AppStyles>
                <Slider
                    activeIndex={0}
                    threshHold={100}
                    transition={0.6}
                    scaleOnDrag={true}
                >
                    {images.map(({ image, title }, index) => (
                        <img src={image} key={index} alt={title} />
                    ))}
                </Slider>
            </AppStyles>
        </div>
    )
};

export default Carousel;