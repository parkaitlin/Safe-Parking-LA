import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 5vw;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: white;
  margin-top: 0vw;
  -webkit-text-decoration: none;
  text-decoration: none;
`
export const Link = styled.a`
  padding-left: 1vw;
  text-decoration: none;
  font-size: 1vw;
  color: black;
  &:hover {
    color: blue;
    transition: 0.5s;
  }
`
export const LogoWrap = styled.a`
  padding-left: 0vw;
  height: 3.8vw;
  width: 16vw;
  position: absolute;
  margin-left: -82vw;
`
export const Logo = styled.div`
  height: 3.8vw;
  width: 16vw;
  -webkit-text-decoration: none;
  text-decoration: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('https://static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/5c0f1cdb4ae2379685e87b3d/1544494308809/safeparkingla_logo.png?format=1500w');
`
export const Call = styled.div`
  padding-left: 3vw;
  margin-right: 3vw;
  text-decoration: none;
`
export const Ring = styled.img`
  width: 3.5vw;
  filter: sepia(100%) contrast(100%) saturate(10000%) hue-rotate(-50deg)
    brightness(0.86);
`
export const PhoneNumber = styled.div`
  color: #fff;
  position: relative;
  left: 23%;
  top: 88%;
  background-color: rgba(19, 103, 155, 0.8);
  border: 1.5px solid rgb(223, 142, 56);
  font-size: 2vw;
  font-weight: 800;
  border-radius: 6px;
  font-family: nunito;
  width: 17vw;
  height: 15px;
  padding: 0.5em;
  padding-bottom: 1.5em;
  text-align: center;
  align-self: center;
`
