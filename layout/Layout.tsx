import styled from 'styled-components'

type LayoutProps = {
	rows?: string
	cols?: string
	areas?: string
}
const layoutAreas = '"header header" "aside main" "footer footer"'
const Layout: any = styled('div')<LayoutProps>`
	display: grid;
	${(props) => `
        grid-template-areas: ${props.areas || layoutAreas};
        grid-template-columns: ${props.cols};
        grid-template-rows: ${props.rows};
    `}
`

const Header = styled('header')`
	grid-area: header;
`
const Aside = styled('aside')`
	grid-area: aside;
`
const Main = styled('main')`
	grid-area: main;
`
const Footer = styled('footer')`
	grid-area: footer;
`
Layout.Header = Header
Layout.Aside = Aside
Layout.Main = Main
Layout.Footer = Footer

export { Layout }
