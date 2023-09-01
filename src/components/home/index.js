import {Component} from 'react'

import {
  HomePageMainContainer,
  ThumbnailContainer,
  EditingPlace,
  TextEditImage,
  Heading,
  HeaderSection,
  TextAreaSection,
  TextAreaTag,
  VscBoldIcon,
  GoItalicIcon,
  AiOutlineUnderlineIcon,
  EachButton,
  ButtonListItem,
} from './styledcomponents'

class Home extends Component {
  state = {bold: false, italic: false, underLine: false, userInput: ''}

  boldButton = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  italicButton = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  underlineButton = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  userText = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {bold, italic, underLine, userInput} = this.state

    const boldColor = bold ? '#faff00' : ' #f1f5f9'
    const italicColor = italic ? '#faff00' : ' #f1f5f9'
    const underlineColor = underLine ? '#faff00' : ' #f1f5f9'

    return (
      <HomePageMainContainer>
        <ThumbnailContainer>
          <Heading>Text Editor</Heading>
          <TextEditImage
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ThumbnailContainer>
        <EditingPlace>
          <HeaderSection>
            <ButtonListItem>
              <EachButton
                type="button"
                data-testid="bold"
                onClick={this.boldButton}
                color={boldColor}
              >
                <VscBoldIcon />
              </EachButton>
            </ButtonListItem>
            <ButtonListItem>
              <EachButton
                type="button"
                data-testid="italic"
                onClick={this.italicButton}
                color={italicColor}
              >
                <GoItalicIcon />
              </EachButton>
            </ButtonListItem>
            <ButtonListItem>
              <EachButton
                type="button"
                data-testid="underline"
                onClick={this.underlineButton}
                color={underlineColor}
              >
                <AiOutlineUnderlineIcon />
              </EachButton>
            </ButtonListItem>
          </HeaderSection>
          <TextAreaSection>
            <TextAreaTag
              rows="10"
              cols="50"
              isBold={bold}
              isItalic={italic}
              isUnderline={underLine}
              value={userInput}
              onChange={this.userText}
            />
          </TextAreaSection>
        </EditingPlace>
      </HomePageMainContainer>
    )
  }
}

export default Home
