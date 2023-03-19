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
		&::-webkit-scrollbar {
			-webkit-appearance: none;
			width: 10px;
			border-radius: 10px;
			overflow: hidden;
		}
		&::-webkit-scrollbar-track {
			background: #010101;
			border-radius: 10px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #161616;
			border-radius: 9px;
			transition: all .3s ease 0s;
			&:hover {
				/* background-color: #fff; */
			}
		}
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
export const Image = styled.div`
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`
export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`
export const Arrow = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 60px;
	background: rgba(0, 0, 0, 0.3);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #FFFBFB;
	font-size: 24px;
	z-index: 5;
&.prev-arrow {
	left: 0;
	svg {
		transform: rotate(180deg);
	}
}
&.next-arrow {
	right: 0;
}
`
export const Dropdown = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	max-height: 200px;
	background: rgba(255, 255, 255, 0.05);
	color: #fff;
	overflow-y: auto;
`
export const DropdownItem = styled.li`
	height: 50px;
	font-family: 'Ubuntu';
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: #CDCDCD;
	display: flex;
	align-items: center;
	padding: 0 16px;
`