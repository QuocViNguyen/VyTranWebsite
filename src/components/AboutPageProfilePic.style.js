import styled from "styled-components";
import avatar from "../assets/avatar.png";
import fbicon from "../assets/fb.png";
import insicon from "../assets/inst.png";
import linked from "../assets/lnked.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

//#region Fields
const InstaLink = 'https://www.instagram.com/meo.nu/?fbclid=IwAR2buQpg9VfXOwXxLLYEJkvvGHyX7ry2lc5A3koS4H1SvdoHhrBHYBLoR9U';
const FbLink = 'https://www.facebook.com/meo.nu.5';
const LinkedLink = 'https://www.linkedin.com/in/vy-tran-17b61a178/?fbclid=IwAR01dmjT7Lu5lsWGfR49L6SLL8S3uuj4SoLzfU3UleJKlK_HkN-owsuWovU';
//#endregion

//#region Styled Components
const Profile = styled.div`
    height: 39vh;
    width: 15vw;
`

const ProfileFrame = styled.div`
    height: 30vh;
    width: 15vw;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
`

const InnerPRofileFrame = styled.div`
    height: 28vh;
    width: 12vw;
    background-color: #F5D2CF;
    margin-top: 4%;
`

const Avatar = styled.img.attrs({
    src: avatar
})
`
    width: 90%;
    height: 90%;
`

const FbIcon = styled.img.attrs({
    src: fbicon
})
`
    width: 30%;
    height: auto;
`

const InstIcon = styled.img.attrs({
    src: insicon
})
`
    width: 30%;
    height: auto;
`

const LnkedIcon = styled.img.attrs({
    src: linked
})
`
    width: 30%;
    height: auto;
`

const FbLinkTag =styled.a.attrs({
    href: FbLink,
    target: "_blank"
})
`
    width: 200%;
    height: auto;
`

const InstTag =styled.a.attrs({
    href: InstaLink,
    target: "_blank"
})
`
    width: 200%;
    height: auto;
`

const LinkedTag =styled.a.attrs({
    href: LinkedLink,
    target: "_blank"
})
`
    width: 200%;
    height: auto;
`

const SocialStyling = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
}

const ProfileStyling = {
    marginTop: '10vh'
}
//#endregion


//#region Export Function
export function ProfilePic(){
    return(
        <Profile style={ProfileStyling}>
            <ProfileFrame>
                <InnerPRofileFrame>
                    <Avatar/>
                </InnerPRofileFrame>
            </ProfileFrame>
            <Container style={SocialStyling} noGutters={true}>
                <FbLinkTag>
                    <FbIcon/>
                </FbLinkTag>
                <InstTag>
                    <InstIcon/>
                </InstTag>
                <LinkedTag>
                    <LnkedIcon/>
                </LinkedTag>
            </Container>
        </Profile>
    );
}
//#endregion