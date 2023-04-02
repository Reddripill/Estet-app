import React, { useState } from 'react';
import styled from 'styled-components';
import InputTable from './InputTable';

interface Props {
	placeholder: string;
	locationChanger: (item: string | null) => void;
}

const Wrapper = styled.div`
	width: 100%;
	position: relative;
`

const Input = styled.input`
	width: 100%;
	border-radius: 14px;
	padding: 0 16px;
	height: 38px;
`

function FilterInput({ placeholder, locationChanger }: Props) {
	const [text, setText] = useState<string>('');
	const [isActive, setIsActive] = useState<boolean>(false);
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value)
		setIsActive(true);
		locationChanger(null);
	}
	return (
		<Wrapper>
			<Input
				value={text}
				onChange={onChangeHandler}
				placeholder={placeholder}
			/>
			{text && isActive &&
				<InputTable
					data={text}
					changeData={setText}
					changeActive={setIsActive}
					locationChanger={locationChanger}
				/>
			}
		</Wrapper>
	)
}

export default FilterInput;