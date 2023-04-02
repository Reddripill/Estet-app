import React, { useState, useEffect, useRef } from 'react';
// import { MdOutlineWidthNormal } from 'react-icons/md';
import styled from 'styled-components';
import { FCWidthChildren } from '../utils/types';

interface Props {
	prevElement: React.RefObject<HTMLDivElement | HTMLButtonElement>;
	nextElement: React.RefObject<HTMLDivElement | HTMLButtonElement>;
	width: number;
	infinite?: boolean;
	gap?: number;
}
interface ContainerStyleProps {
	gap: number | undefined;
}

const SliderWrapper = styled.div`
	height: 100%;
	position: relative;
	overflow: hidden;
`
export const SliderContainer = styled.div<ContainerStyleProps>`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	transition: left .3s ease 0s;
	gap: ${props => props.gap ? `${props.gap}px` : '0px'};
`
export const SliderItem = styled.div`
	align-items: center;
`

const CustomSlider: FCWidthChildren<Props> = ({
	children,
	width,
	prevElement,
	nextElement,
	infinite,
	gap,
}) => {
	const [slides, setSlides] = useState(React.Children.toArray(children))
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const sliderContainerElem = useRef<HTMLDivElement>(null);
	/* useEffect(() => {
		if (infinite) {
			const slidesWithClones = React.Children.toArray(children).slice();
			const edgedChilds = React.Children.map(children, (item, index) => {
				if (index === 0 || index === React.Children.count(children) - 1) {
					return item;
				}
			})
			if (edgedChilds) {
				slidesWithClones.unshift(edgedChilds[1]);
				slidesWithClones.push(edgedChilds[0]);
				setSlides(slidesWithClones);
			}
		}
	}, [infinite, children]) */
	const calcMarginLeft = () => {
		if (gap) {
			return `-${width * currentSlide + gap * currentSlide}px`;
		}
		return `-${width * currentSlide}px`;
	}

	useEffect(() => {
		if (prevElement.current && nextElement.current) {
			const prev = prevElement.current;
			const next = nextElement.current;
			const prevArrowClickHandler = () => {
				if (currentSlide === 0) {
					setSlides(prev => {
						const newState = prev.slice(0, prev.length - 1);
						newState.unshift(prev[prev.length - 1])
						return newState;
					})
				} else {
					setCurrentSlide(prev => prev - 1)
				}
			}
			const nextArrowClickHandler = () => {
				if (sliderContainerElem.current) {
					if (currentSlide === slides.length - 1) {
						setSlides(prev => {
							const newState = prev.slice(1);
							newState.push(prev[0])
							return newState;
						})
						setCurrentSlide(prev => prev - 1);
					}
					setCurrentSlide(prev => prev + 1);
				}
			}
			prev.addEventListener('click', prevArrowClickHandler)
			next.addEventListener('click', nextArrowClickHandler)
			return function cleanup() {
				prev.removeEventListener('click', prevArrowClickHandler)
				next.removeEventListener('click', nextArrowClickHandler)
			}
		}
	}, [nextElement, prevElement, currentSlide, slides])
	return (
		<SliderWrapper>
			<SliderContainer
				ref={sliderContainerElem}
				style={{ left: calcMarginLeft() }}
				gap={gap}
			>
				{slides.map((item, index) => (
					<SliderItem
						key={item.toString() + index}
						className={index === currentSlide ? '_active' : ''}
						style={{ minWidth: width }}
					>
						{item}
					</SliderItem>
				))}
			</SliderContainer>
		</SliderWrapper>
	)
}

export default CustomSlider;