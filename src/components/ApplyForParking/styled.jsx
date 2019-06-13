import styled from 'styled-components'

export const MainContainer = styled.div`
  
  height: 170vh;
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
      aside {
        display: flex;
        flex-direction: column;
        > h1 {
          padding-top: 3em;
          text-align: center;
          font-size: 2em;
        }
        ul {
          li {
            text-align: left;
            /* list-style: inside; */
            font-size: 1.5em;
            list-style: none;
            position: relative;
            left: 12em;
          }
        }
      }
    ol {
      li {
        margin-bottom: 1em;
        text-align: center;
        font-size: 1.5em;
        list-style-position: inside;
      }
    }
    section {
      display: flex;
      margin-left: 1em;
      margin-right: 1em;
      margin-top: 10em;
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
          background-color: dodgerblue;
          color: white;
        }
        p {
          padding-top: 1em;
          color: grey;
          font-style: italic;
        }
      }
    }
  }
  @media(max-width: 640px) {
   display: block;
   height: 220vh;
   > div {
      width: 100%;
      > h1:nth-of-type(1) {
          font-size: 1.em;
      }
      aside {
        position: none;
        ul {
          li {
            left: 0;
          }
        }
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
        }
      }
   }
  }

`