import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .Top-Container {
    flex: 1.25;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .logo-content {
      display: flex;
      justify-content: center;
      .logo-wrapper {
        display: flex;
        justify-content: center;
        width: 50%;
        min-width: 627.5px;
        max-width: 928px;
      }
    }
    .p-content {
      display: flex;
      justify-content: center;
      font-family: Nunito;
      font-size: 20px;
      .p-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 50%;
        max-width: 928px;
        min-width: 627.5px;
        height: 100%;
        p {
          text-align: center;
        }
      }
    }
    .btn-content {
      display: flex;
      justify-content: center;
      .btn-wrapper {
        width: 50%;
        min-width: 627.5px;
        max-width: 928px;
        display: flex;
        justify-content: space-evenly;
        button {
          width: 180px;
          height: 48px;
          border-radius: 10px;
          background-color: #12679b;
          font-family: Helvetica;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          color: #ffffff;
          border: none;
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
  @media (max-width: 631px) {
    height: 300vh;
    .Top-Container {
      height: 100vh;
      .logo-content {
        margin: auto;
        .logo-wrapper {
          min-width: 0;
        }
      }
      .p-content {
        .p-wrapper {
          min-width: 345px;
        }
      }
      .btn-content {
        height: 25%;
        .btn-wrapper {
          flex-direction: column;
          align-items: center;
          min-width: 0;
        }
      }
    }
  }
`
