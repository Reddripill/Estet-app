import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props {
	isActive?: boolean;
}

const Button = styled.button`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 14px;
	line-height: 139.52%;
	color: #FFFBFB;
	border: 1.5px solid rgba(255, 251, 251, 0.35);
	border-radius: 8px;
	height: 42px;
	padding: 0 24px;
	&.active {
		color: rgba(29, 174, 255, 1);
		border-color: rgba(29, 174, 255, 1);
	}
`

function CategoryButton({ children, isActive }: PropsWithChildren<Props>) {
	return (
		<Button type='button' className={isActive ? 'active' : ''} >
			{children}
		</Button>
	)
}

export default CategoryButton;