import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Img,
  Quoth,
  Pic0,
  Pic1,
  Pic2,
  Wrapper,
  Indiv,
  Para,
  Background,
  Title
} from './style'

class People extends Component {
  render() {
    return (
      <Wrapper>
        <Background />
        <Title>WHO WE HELP</Title>
        <Pic0>
          <Indiv>
            <Img src={require('../../picture0.jpg')} alt='alt-img' />
          </Indiv>
          <Quoth>
            <Para>
              "MJ is a veteran: “Without Safe Parking LA, MJ might be one of the
              35,000 people literally living on the streets and sidewalks and
              alleys of LA.”"
            </Para>
          </Quoth>
        </Pic0>
        <Pic1>
          <Indiv>
            <Img src={require('../../picture1.jpg')} alt='alt-img' />
          </Indiv>
          <Quoth>
            <Para>
              "Mindy, a cosmetologist, barber, and esthetician impacted by the
              economic downturn: “Despite these obstacles, Mindy has continued
              to persevere and reach out to social service organizations for
              help.”"
            </Para>
          </Quoth>
        </Pic1>
        <Pic2>
          <Indiv>
            <Img src={require('../../picture2.jpg')} alt='alt-img' />
          </Indiv>
          <Quoth>
            <Para>
              "Michelle, a dog trainer and native Angeleno: “Since coming to
              Safe Parking LA, Michelle has had a safe place to sleep at night,
              guarded by a security guard and access to a restroom and
              electrical outlets. ”"
            </Para>
          </Quoth>
        </Pic2>
      </Wrapper>
    )
  }
}

export default People
