import React, { memo, useRef } from 'react'
import styled from 'styled-components'

import Dropdown from './Dropdown'

import { colors, fontSizes, fonts } from '../constants'

import { useGlobalContext } from '../context'

function Header({ handlePrint }) {
  const { handleColor, handleFont, handleFontSize, changeLanguage, language } =
    useGlobalContext()
  return (
    <Wrapper>
      <button onClick={handlePrint} className="btn"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path></svg></button>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--color-dark-soft-2);
  box-shadow: var(--shadow-2);
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;
  border-radius: 1rem;
  position: fixed;
  top: 50%;
  left: 6rem;
  transform: translate(-50%, -50%);
  transition: transform 0.4s ease-in-out;

  @media (max-width: 50rem) {
    top: 5rem;
    flex-direction: row;
    left: 50%;
    height: auto;
  }

  .btn {
    background-color: #fff;
    box-shadow: var(--shadow-2);
    display: block;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0;
    font-size: 2.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default memo(Header)
