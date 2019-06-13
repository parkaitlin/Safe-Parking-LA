import styled from 'styled-components'

export const MainContainer = styled.div`
  
  height: 110vh;
  display: flex;
  justify-content: center;

  > div {
      width: 1000px;
      padding-right: 2em;
      padding-left: 2em;
      > h1:nth-of-type(1) {
        text-align: center;
        font-size: 3em;
        padding-top: 1em;
      }
      > h1:nth-of-type(2) {
        padding-top: 3em;
        text-align: center;
      }
      > h1:nth-of-type(3) {
        padding-top: 3em;
      }
      ul {
        li {
          margin-bottom: 0.5em;
          text-align: center;
          list-style: none;
          font-size: 1.5em;
        }
      }
    ol {
      li {
        margin-bottom: 1em;
        padding-left: 1.5em;
        padding-right: 1.5em;
        list-style: none;
        font-size: 1.5em;
        span {
          font-weight: bolder;
          border-bottom: 1px solid black;
        }
      }
    }
    section {
      display: flex;
      margin-left: 1em;
      margin-right: 1em;
      margin-top: 3em;
      div:nth-of-type(1) {
        img {
          height: 340.5px;
          width: 512px;
          border-radius: 10px;
          padding-left: 1.5em;
        }
      }
      div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-left: 2em;
        button {
          width: 250px;
          height: 50px;
          border-radius: 4px;
          border: 2px solid grey;
          font-size: 1.2em;
        }
      }
    }
  }
  @media(max-width: 640px) {
   display: block;
   > div {
      width: 100%;
      > h1:nth-of-type(1) {
          font-size: 1.em;
      }
      ol {
        li {
          font-size: 1.2em
        }
      }
      section {
        flex-direction: column;
        div:nth-of-type(1) {
          display: flex;
          justify-content: center;
          img {
            height: 170.25px;
            width: 256px;
            padding: 0;
            padding-bottom: 1em;
          }
        }
        div:nth-of-type(2) {
          padding: 0;
          padding-top: 2em;
          padding-bottom: 2em;
          button {
          }
        }
      }
   }
  }

`