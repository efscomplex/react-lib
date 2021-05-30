import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Singleton } from './Singleton'

const GlobalStyle = createGlobalStyle`
  ::root {
	--text-lh: 1.4rem;
  }
`
const getStyledComp = (Comp: React.FC) => (props: any) => {
	const hasGlobalStyle = Singleton.instance()
	return (
		<React.Fragment>
			{!hasGlobalStyle && <GlobalStyle />}
			<Comp {...props} />
		</React.Fragment>
	)
}

const StyledText = styled('span')`
	line-height: var(--text-lh);
`

const Title = styled('h1')`
	text-align: center;
	font-weight: normal;
	font-size: 2rem;
	line-height: 1em;

	margin-bottom: 0;
`
const Paragraph = styled('p')`
	margin-bottom: 1rem;
`

const Text: any = getStyledComp(StyledText)

Text.Title = getStyledComp(Title)
Text.Paragraph = getStyledComp(Paragraph)

export { Text }
