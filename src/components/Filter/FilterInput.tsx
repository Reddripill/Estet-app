import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
	placeholder: string;
}

const Input = styled.input`
	border-radius: 14px;
	padding-left: 16px;
	height: 38px;
`

function FilterInput({ placeholder }: Props) {
	const [text, setText] = useState<string>('');
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value)
	}
	return (
		<Input
			value={text}
			onChange={onChangeHandler}
			placeholder={placeholder}
		/>
	)
}

export default FilterInput;