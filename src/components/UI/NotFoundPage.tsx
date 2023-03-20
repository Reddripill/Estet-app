import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 36px;
`

function NotFoundPage() {
	return (
		<Wrapper>Page Not Found</Wrapper>
	)
}

export default NotFoundPage;