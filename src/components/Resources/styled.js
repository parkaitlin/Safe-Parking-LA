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
  }
  @media(max-width: 900px) {
    text-align: center;
    main {
      width: 500px;
      background-color: white;
      > div:nth-of-type(1) {
      }
      > div:nth-of-type(5) {
        display: flex;
        flex-direction: column;
        align-items: center;
        > div {
          width: 250px;
          color: red;
          display: flex;
          justify-content: end;
          > input {
          }
        }
      }
    }
  }
`