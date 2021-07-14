import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = ['I am a graduated statistics Honour student with a passion for analysing and developing data.',
<br/>,<br/>, 'Eager, enthusiastic and willing to accept new challages in both academic and professional career.',
<br/>,<br/>,'Flexible, motivated and patient team player in all work environments.']

const IntroStyling = {
    fontFamily: 'FredokaOne',
    src: 'url(/src/fonts/FredokaOne-Regular.ttf)',
    color: 'white',
    fontSize: '2.5rem',
    textAlign: 'left',
    marginRight: '8rem',
    lineHeight: '6vh',
}

export function AboutIntro(){
    return(
        <>
            <p style={IntroStyling}>{Intro}</p>
        </>
    );
}