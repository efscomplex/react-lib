import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type Pipe = Function | Function[]

export type FetchProps = {
	source: Promise<any>
	render: (data: any) => React.ReactNode
	fallback?: React.ReactNode
	pipe?: Pipe
}

const Fetcher: React.FC<FetchProps> = ({
	source,
	render,
	fallback,
	pipe,
	...props
}) => {
	const [state, setState] = useState()
	const pipes = Array.isArray(pipe) ? pipe : [pipe]

	useEffect(() => {
		source.then((resp) => setState(map(resp, pipes as Function[])))
	}, [])

	return <Wrapper {...props}>{render(state)}</Wrapper>
}

Fetcher.defaultProps = {
	fallback: <p>'loading...'</p>,
	pipe: []
}

const Wrapper = styled('div')``

const map = (data: any, pipes: Function[]) => {
	if (pipes.length < 1) return data
	let result = data
	pipes.forEach((pipe) => {
		result = pipe(result)
	})
	return result
}
export const Fetch = Fetcher // React.memo(styled(Fetcher)``)
