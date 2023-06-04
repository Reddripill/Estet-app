import React from 'react'
import { FCWidthChildren } from '../../utils/types'
import styled from 'styled-components';
import { MainText } from '../../utils/styles';

interface IProps {
	setState: (value: boolean) => void;
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`
const InputField = styled.input`
	
`

const Checkbox: FCWidthChildren<IProps> = ({ children, setState }) => {
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState(e.target.checked)
	}
	return (
		<Wrapper>
			<InputField
				type='checkbox'
				onChange={e => changeHandler(e)}
			/>
			<MainText>{children}</MainText>
		</Wrapper>
	)
}

export default Checkbox