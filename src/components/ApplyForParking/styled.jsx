import styled from 'styled-components'

export const MainContainer = styled.div`

  > div:nth-of-type(1) {
      h1 {
        text-align: center;
        font-size: 3.5em;
      }
    }
    main {
      padding-left: 300px;
      padding-right: 300px;
    }
    section {
      display: flex;
      div:nth-of-type(1) {
        img {
          height: 350px;
          width: 350px;
        }
      }
      div:nth-of-type(2) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }

  @media (max-width: 640px) {
    background-color: grey;
    height: 100vh;
    > div:nth-of-type(1) {
        h1 {
          text-align: center;
          font-size: 2em;
        }
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
    }
    section {
      display: block;
      div:nth-of-type(1) {
        display: flex;
        justify-content: center;
        img {
          height: 150px;
          width: 150px;
        }
      }
      div:nth-of-type(2) {
        button {
          background-color: black;
          color: white;
        }
      }
    }
  }
`