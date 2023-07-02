import React from 'react'
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

interface IProps {
	className?: string;
	changeHandler: (val: string) => void;
	value: string;
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 15px;
	background-color: #0E0E0E;
	height: 48px;
	overflow: hidden;
`
const InputField = styled.input`
	background-color: transparent;
	height: 100%;
	padding: 0 16px;
	color: #5F5F5F;
	width: 100%;
	&::placeholder {
		font-family: 'Mulish';
		font-size: 14px;
		line-height: 20px;
		color: #5F5F5F;
	}
`
const SearchIcon = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20px;
`

const SearchInput = ({ className, changeHandler, value }: IProps) => {
	return (
		<Wrapper className={className}>
			<InputField
				type='text'
				placeholder='Search'
				value={value}
				onChange={e => changeHandler(e.target.value)}
			/>
			<SearchIcon>
				<BiSearch style={{
					fontSize: 24,
					color: '#fff'
				}} />
			</SearchIcon>
		</Wrapper>
	)
}

export default SearchInput