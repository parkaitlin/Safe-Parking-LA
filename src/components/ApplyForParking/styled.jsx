import styled from 'styled-components'

export const MainContainer = styled.div`



  @media (max-width: 640px) {
    background-color: grey;
    height: 100vh;
    h1 {
      text-align: center;
    }
    main {
      padding-left: 1.5em;
      padding-right: 1.5em;
      div:nth-of-type(1) {
        h1 {
          text-align: left;
        }
      }
      div:nth-of-type(2) {
        h1 {
          text-align: left;
        }
      }
      div:nth-of-type(3) {
        display: flex;
        justify-content: center;
        img {
          height: 150px;
          width: 150px;
        }
      }
      div:nth-of-type(4) {
        display: flex;
        flex-direction: column;
        button {
          background-color: black;
          color: white;
        }
      }
    }
  }
`