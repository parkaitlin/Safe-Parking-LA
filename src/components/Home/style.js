import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  .Container-Settings {
    display: flex;
    flex-direction: column;
    .content-alignment {
      display: flex;
      justify-content: center;
      .wrapper-alignment {
        display: flex;
        width: 50%;
        min-width: 627.5px;
      }
    }
  }
  .Top-Container {
    flex: 1.25;
    justify-content: space-evenly;
    min-height: 480px;
    .logo-content {
      .logo-wrapper {
        max-width: 928px;
        justify-content: center;
      }
    }
    .p-content {
      .p-wrapper {
        max-width: 928px;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        p {
          font-family: Nunito;
          font-size: 20px;
          text-align: center;
        }
      }
    }
    .btn-content {
      .btn-wrapper {
        max-width: 928px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 340px;
    .middle-title-content {
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        font-family: Nunito;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #e18f2d;
      }
    }
    .middle-stories-content {
      height: 100%;
      min-height: 61px;
      display: flex;
      .middle-stories-wrapper {
        min-height: 250px;
        display: flex;
        justify-content: space-evenly;
        .middle-stories {
          flex: 0.3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          img {
            height: 90px;
            width: 90px;
          }
          p {
            font-family: Nunito;
            font-size: 20px;
            text-align: center;
            color: #5e5e5e;
          }
        }
      }
    }
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
    .Middle-Container {
      height: 100vh;
      max-height: initial;
      .middle-title-content {
        h1 {
        }
      }
      .middle-stories-content {
        min-height: initial;
        .middle-stories-wrapper {
          flex-direction: column;
          .middle-stories {
            min-height: initial;
            margin: 0 25px;
          }
        }
      }
    }
  }
`
