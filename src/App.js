import React  from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import tile from './tile.jpg';

const TABLET_BREAKPOINT = 550;

const Wrapper = styled.div`
  position: relative;
  width: 630px;
  max-width: 100%;
  margin: 0 auto;
  line-height: 0; // for proper bottom alignment of banner
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%; // for IE11 to maintain aspect ratio
`;

const Banner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 10px 5px;
  background: rgba(0, 0, 0, 0.5);
  
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 14px 10px;
  }
`;

const BannerLogo = styled.img`
  width: 50px;
  height: 50px;
  
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    width: 85px;
    height: 85px;
  }
`;

const BannerText = styled.h1`
  margin: 0 0 0 17px;
  font-size: 30px;
  color: white;
  font-family: sans-serif;
  letter-spacing: -2px;
  
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    font-size: 40px;
  }
`;

const App = () => (
  <Wrapper>
    <TileImage
      src={tile}
      alt="the cast of home and away"
    />

    <Banner>
      <BannerLogo
        src={logo}
        alt="channel seven logo"
      />

      <BannerText>Home and Away</BannerText>
    </Banner>
  </Wrapper>
);

export default App;
