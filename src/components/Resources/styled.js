import styled from 'styled-components'

export const ResourcesContainer = styled.div`
  height: 150vh;
  display: flex;
  justify-content: center;
  padding: 2em;
  main {
    h1 {
        font-family: Nunito;
        font-size: 26px;
        color: #e1902d;
      }
      h2 {
        font-family: Nunito;
        font-size: 26px;
        color: #12679b;
        margin-bottom: 2em;
        margin-top: 2em;
      }
      p {
        font-size: 16px;
        color: #5e5e5e;
        font-family: Nunito;
        width: 500px;
      }
      button {
        width: 180px;
        height: 47px;
        font-family: Nunito;
        font-size: 16px;
        font-weight: bold;
        color: #FFF;
        background-color: #13679b;
        border-radius: 10px;
        margin-top: 2.5em;
        margin-bottom: 2.5em;
      }
    width: 1000px;
    > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      padding-left: 12em;
      padding-bottom: 2em;
    }
    > div:nth-of-type(2) {
      padding-left: 12em;
      padding-bottom: 2em;
    }
    > div:nth-of-type(3) {
      padding-left: 12em;
      padding-bottom: 4em;
    }
    > div:nth-of-type(4) {
      display: flex;
      justify-content: center;
      select {
        width: 240px;
        height: 48px;
        background-color: #13678b;
        color: #FFF;
      }
      h6 {
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          color: #13678b;
        }
      }
    }
    h2 {
      text-align: center;
    }
    section {
      display: flex;
      justify-content: center;
      button {
      }
    }
    > div:nth-of-type(5) {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
          width: 250px;
          display: flex;
          justify-content: end;
          > input {
            margin-left: 4em;
          }
          > label {
            text-align: left;
            width: 250px;
            margin-left: 2em;
            font-family: Nunito;
            font-size: 16px;
            color: #5e5e5e;
            margin-bottom: 1em;
          }
        }
      }
      > div {
        > input {
          height: 25px;
          width: 25px;
        }
      }
    }
  }
  @media(max-width: 900px) {
    text-align: center;
    height: 160vh;
    main {
      padding-top: 5em;
      padding-left: 1em;
      padding-right: 1em;
      width: 500px;
      background-color: white;
      p {
        width: 100%;
      }
      > div:nth-of-type(1) {
        padding-left: 0;
      }
      > div:nth-of-type(2) {
        padding-left: 0;
      }
      > div:nth-of-type(3) {
        padding-left: 0;
      }
      > div:nth-of-type(4) {
      }
    }
  }
`