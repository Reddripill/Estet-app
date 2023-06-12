import React from 'react'
import styled from 'styled-components';
import { GrSearch } from 'react-icons/gr';

interface IProps {
	className?: string;
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
	color: #fff;
`

const SearchInput = ({ className }: IProps) => {
	return (
		<Wrapper className={className}>
			<InputField
				type='text'
				placeholder='Search'
			/>
			<SearchIcon>
				<GrSearch style={{ fontSize: 24 }} />
			</SearchIcon>
		</Wrapper>
	)
}

export default SearchInput