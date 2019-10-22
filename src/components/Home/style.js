import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: grey;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .Top-Container {
    flex: 1;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .logo-wrapper {
      display: flex;
      justify-content: center;
      .logo-container {
        display: flex;
        justify-content: center;
        background-color: orange;
        width: 50%;
      }
      .p-content {
        .p-wrapper {
          p {
            text-align: center;
          }
        }
      }
    }
  }
  .Middle-Container {
    flex: 1;
    background-color: blue;
  }
  .Bottom-Container {
    flex: 1;
    background-color: orange;
  }
`
