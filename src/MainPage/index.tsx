import React, { useState, useEffect } from 'react'

import Input from '../components/Input'

import logoImg from '../assets/logo.svg'

import {
  Container,
  LogoBox,
  Logo,
  DecimalBox
} from './styles'

const MainPage: React.FC = () => {

  const [inputText, setInputText] = useState('')
  const [decimalNumber, setDecimalNumber] = useState(0)
  const [message, setMessage] = useState('')


  const handleInput = (e: string) => {
    setInputText(e.trim())
  }


  const binaryToDecimal = (bin: any) => {
    let decimal = 0

    for (let index = bin.length - 1; index >= 0; index--) {
      decimal += Number(bin[index] * Math.pow(2, bin.length - 1 - index))
    }

    return decimal
  }


  useEffect(() => {
    let invalidNumber = /2|3|4|5|6|7|8|9/g
    let invalidString = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|'|"|\.|#|!|@|\$|%|¨|\^|&|\*|\(|\)|_|-|=|\+|;|<|>|~|´|`|:|\[|\]|\{|\}|\||\\|\/|\?/gi

    if (inputText.match(invalidString) || inputText.match(invalidNumber))
      return setMessage('Insert only "0" or "1"')

    setDecimalNumber(binaryToDecimal(inputText))
    setMessage(String(decimalNumber))
  }, [inputText, decimalNumber])

  return (
    <Container>
      <LogoBox>
        <Logo src={logoImg} alt='Logo Decimodify' />
        <h1>Decimodify</h1>
      </LogoBox>
      <h4>binary to decimal conversor</h4>

      <Input
        type='text'
        placeholder='input a binary number'
        value={inputText}
        onChange={e => handleInput(e.target.value)}
      />
      <DecimalBox>
        {inputText.length > 0 &&
          <h2>{message}</h2>
        }
      </DecimalBox>
    </Container>
  )
}

export default MainPage