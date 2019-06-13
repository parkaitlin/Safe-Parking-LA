import styled from 'styled-components'

export const ResourcesContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: red;
  main {
    background-color: grey;
    width: 1000px;
    > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
    }
    > div:nth-of-type(5) {
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
    main {
      padding-top: 5em;
      padding-left: 1em;
      padding-right: 1em;
      width: 500px;
      background-color: white;
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
      > div:nth-of-type(1) {
      }
      > div:nth-of-type(4) {
        select {
          width: 240px;
          height: 48px;
          background-color: #13678b;
          color: #FFF;
          font-size: 16px;
          padding-left: 3.5em;
          option {
          }
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
            color: red;
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
    }
  }
`