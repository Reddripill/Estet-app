import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components';
import { FCWidthChildren } from '../utils/types';

interface Props {
	prevElement: React.RefObject<HTMLDivElement | HTMLButtonElement>;
	nextElement: React.RefObject<HTMLDivElement | HTMLButtonElement>;
	width: number;
	productCount: number;
	infinite?: boolean;
}

const SliderWrapper = styled.div`
	height: 100%;
	position: relative;
	overflow: visible;
`
export const SliderContainer = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	transition: left .3s ease 0s;
`
export const SliderItem = styled.div`
	flex: 0 0 100%;
`

const CustomSlider: FCWidthChildren<Props> = ({
	children,
	width,
	prevElement,
	nextElement,
	productCount,
}) => {
	// const [slides, setSlides] = useState()
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	if (children) {
		console.log(React.Children.toArray(children));
	}
	const calcMarginLeft = () => {
		return `-${width * currentSlide}px`;
	}
	const prevArrowClickHandler = useCallback(() => {
		setCurrentSlide(prev => {
			if (prev === 0) {
				return productCount - 1;
			} else {
				return prev - 1;
			}
		})
	}, [productCount])
	const nextArrowClickHandler = useCallback(() => {
		setCurrentSlide(prev => {
			if (prev === productCount - 1) {
				return 0;
			} else {
				return prev + 1;
			}
		})
	}, [productCount]);
	useEffect(() => {
		if (prevElement.current && nextElement.current) {
			const prev = prevElement.current;
			const next = nextElement.current;
			prev.addEventListener('click', prevArrowClickHandler)
			next.addEventListener('click', nextArrowClickHandler)
			return function cleanup() {
				prev.removeEventListener('click', prevArrowClickHandler)
				next.removeEventListener('click', nextArrowClickHandler)
			}
		}
	}, [nextElement, prevElement, nextArrowClickHandler, prevArrowClickHandler])
	return (
		<SliderWrapper>
			<SliderContainer style={{ left: calcMarginLeft() }}>
				{children}
			</SliderContainer>
		</SliderWrapper >
	)
}

export default CustomSlider;