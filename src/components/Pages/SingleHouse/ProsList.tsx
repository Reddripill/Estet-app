import React from 'react'
import { TiTick } from 'react-icons/ti'
import styled from 'styled-components'

interface Props {
	prosList: string[]
}

const ProsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px 130px;
	margin-bottom: 70px;
`
const ProsElement = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`
const ProsText = styled.div`
	font-family: 'Rubik';
	font-size: 15px;
	line-height: 21px;
	color: rgba(255, 251, 251, 0.65);
`

const ProsList = ({ prosList }: Props) => {
	return (
		<>
			{prosList.length !== 0 &&
				<ProsWrapper>
					{prosList.map(pros => (
						<ProsElement key={pros}>
							<TiTick style={{ color: '#1DAEFF' }} />
							<ProsText>
								{pros}
							</ProsText>
						</ProsElement>
					))}
				</ProsWrapper>
			}
		</>
	)
}

export default ProsList