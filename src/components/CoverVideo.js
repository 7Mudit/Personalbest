import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/Walking Girl.mp4'

const VideoContainer = styled.section`
    width:100%;
    height:100vh;
    position:relative;

video{
    width:100%;
    height:100vh;
    object-fit:cover;

}
`
const DarkOverlay = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:5;
    background-color:${props => `rgba(${props.theme.bodyRgba},0.9)`};
`
const Title = styled.div`
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:5;
    display:flex;
    justify-content:center;
    align-items:center;
    color:${props => props.theme.text};
h1{
    font-family:'Kaushan Script';
    font-size: ${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
    <DarkOverlay/>
        <Title>
            <div>
                <h1>Learn To Code</h1>
            </div>
            <h2>
                hello
            </h2>
        </Title>

        <video src={MainVideo} type="video/mp4" autoPlay muted loop></video>
    </VideoContainer>
  )
}

export default CoverVideo