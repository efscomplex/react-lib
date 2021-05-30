import React from 'react'
import styled from 'styled-components'

const Header: React.FC = ({ children, ...props }) => {
	return <Wrap {...props}>{children}</Wrap>
}

const Wrap = styled('header')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export { Header }
