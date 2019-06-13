import styled from 'styled-components'

export const Title = styled.div`
  color: white;
  font-size: 2em;
  display: flex;
  height: 30vh;
  width: 100vw;
  background-image: url("https://i.imgur.com/jSXuWId.png");
  h1 {
    font-family: Nunito;
    font-weight: 400;
    align-self: flex-end;
    text-align: left;
    padding-left: 1em;
  }
  @media(max-width: 650px)  {
    font-size: 1em;
  }
`