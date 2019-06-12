import styled from 'styled-components'

export const MainContainer = styled.div`
  
  background-color: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  > div {
    background-color: yellow;
    width: 1000px;
    ul {
      li {
        margin-bottom: .5em;
      }
    }
    ol {
      li {
        margin-bottom: 1em;
      }
    }
    section {
      display: flex;
      div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
      }
      img {
        height: 340.5px;
        width: 512px;
        border-radius: 10px;
      }
    }
  }
  @media(max-width: 640px) {
   display: block;
   > div {
      width: 100%;
      background-color: blue;
      section {
        flex-direction: column;
        img {
          height: 170.25px;
          width: 256px;
        }
        div:nth-of-type(1) {
          
        }
        div:nth-of-type(2) {

        }
      }
   }
  }

`