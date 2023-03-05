import styled, { createGlobalStyle } from "styled-components";



export const Global = createGlobalStyle`
	* {
	padding: 0px;
	margin: 0px;
	border: 0px;
	}
	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	/* :focus,
	:active {
		// outline: none;
	}
	a:focus,
	a:active {
		// outline: none;
	} */
	aside,
	nav,
	footer,
	header,
	section {
		display: block;
	}
	html {
		font-size: 16px;
	}
	html,
	body {
		height: 100%;
		min-width: 320px;
	}
	body {
		line-height: 1;
		font-family: 'Mulish';
		//text-rendering: optimizeLegibility;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		width: 100%;
		height: 100%;
		background-color: #000;
		color: rgba(255, 251, 251, 1);
	}
	input,
	button,
	textarea {
		font-family: 'Mulish';
		font-size: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;
		background-color: inherit;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
		color: rgba(255, 251, 251, 1);
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: inherit;
		font-size: inherit;
	}
	//-webkit-overflow-scrolling: touch;
	/*
	&::-webkit-scrollbar {
		display: none;
	}
	*/
	// -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
	// Убирает отображение нажатия

	#root {
		width: 100%;
		height: 100%;
	}
`;

export const Container = styled.div`
	max-width: 1200px;
	padding: 0 15px;
	margin: 0 auto;
`

export const Title = styled.div`
	font-family: 'Montserrat';
	color: #1DAEFF;
	font-weight: 600;
	font-size: 32px;
	line-height: 139.52%;
`
export const Text = styled.div`
	font-family: 'Montserrat';
	font-size: 16px;
	line-height: 158.52%;
	color: #FFFBFB;
`