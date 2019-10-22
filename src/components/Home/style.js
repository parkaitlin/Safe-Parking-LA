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
