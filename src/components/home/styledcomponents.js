import styled from 'styled-components'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const VscBoldIcon = styled(VscBold)`
  font-size: 20px;
  color;
`

export const GoItalicIcon = styled(GoItalic)`
  font-size: 20px;
`

export const AiOutlineUnderlineIcon = styled(AiOutlineUnderline)`
  font-size: 20px;
`

export const EachButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
  font-weight: bold;
`

export const HomePageMainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  //   border: 2px solid red;
  border-radius: 5px;
  height: 80%;
  background-color: #1b1c22;
  padding: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`

export const ThumbnailContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 30%;
    width: 100%;
  }
`
export const EditingPlace = styled.div`
  width: 50%;
  height: 100%;
  background-color: #25262c;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  //   padding: 10px;
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`
export const TextEditImage = styled.img`
  width: 80%;
  margin-bottom: 100px;
`

export const Heading = styled.h1`
  color: white;
`
export const HeaderSection = styled.ul`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
`

export const ButtonListItem = styled.li`
  list-style-type: none;
`
export const TextAreaSection = styled.div`
  width: 100%;
  height: 90%;
  //   font-weight: ${props => (props.isBold ? 'bold' : '')};
  font-weight: bold;
`
export const TextAreaTag = styled.textarea`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  background-color: transparent;
  outline: none;
  color: white;
  font-size: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  padding: 10px;
`
