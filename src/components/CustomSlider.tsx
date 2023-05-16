import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { MdOutlineWidthNormal } from 'react-icons/md';
import styled from 'styled-components';
import { FCWidthChildren } from '../utils/types';

interface Props {
	prevElement: React.RefObject<HTMLDivElement | HTMLButtonElement>;
	nextElement: React.RefObject<HTMLDivElement | HTMLButtonElement>;
	width: number;
	infinite?: boolean;
	gap?: number;
	speed?: number;
}
interface ContainerStyleProps {
	gap: number | undefined;
}

const SliderWrapper = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`
export const SliderContainer = styled.div<ContainerStyleProps>`
	width: 100%;
	height: 100%;
	display: flex;
	transition: all .3s ease 0s;
	gap: ${props => props.gap ? `${props.gap}px` : '0px'};
`
export const SliderItem = styled.div`
	height: 100%;
	align-items: center;
`

const CustomSlider: FCWidthChildren<Props> = ({
	children,
	width,
	prevElement,
	nextElement,
	infinite,
	gap = 0,
	speed = 300,
}) => {
	const initialSlides = React.Children.toArray(children);
	const [slides, setSlides] = useState(
		infinite ? (
			[
				initialSlides[initialSlides.length - 1],
				...initialSlides.slice(),
				initialSlides[0]
			]
		) : initialSlides
	)
	const [currentSlide, setCurrentSlide] = useState<number>(infinite ? 1 : 0);
	const [translateX, setTranslateX] = useState<number>(0);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const sliderContainerElem = useRef<HTMLDivElement>(null);
	const slidesCount = slides.length;

	const getClassNames = (index: number) => {
		if (index === currentSlide) {
			return 'active-slide'
		} else if (index === currentSlide - 1) {
			return 'prev-slide'
		} else if (index === currentSlide + 1) {
			return 'next-slide'
		}
	}


	useLayoutEffect(() => {
		if (infinite) {
			setTranslateX(-(width + gap))
		}
	}, [width, gap, infinite])

	useEffect(() => {
		if (prevElement.current && nextElement.current && sliderContainerElem.current) {
			const prev = prevElement.current;
			const next = nextElement.current;
			const prevArrowClickHandler = () => {
				if (sliderContainerElem.current && !isClicked) {
					sliderContainerElem.current.style.transitionDuration = `${speed}ms`;
					setIsClicked(true)
					if (!infinite) {
						if (currentSlide >= 1) {
							setCurrentSlide(currentSlide - 1);
							setTranslateX(-(width + gap) * (currentSlide - 1));
						} else {
							setIsClicked(false)
						}
					} else {
						setCurrentSlide(currentSlide - 1);
						setTranslateX(-(width + gap) * (currentSlide - 1));
					}
				}
			}
			const nextArrowClickHandler = () => {
				if (sliderContainerElem.current && !isClicked) {
					sliderContainerElem.current.style.transitionDuration = `${speed}ms`
					setIsClicked(true)
					if (!infinite) {
						if (currentSlide <= slides.length - 2) {
							setCurrentSlide(currentSlide + 1);
							setTranslateX(-(width + gap) * (currentSlide + 1))
						} else {
							setIsClicked(false)
						}
					} else {
						setCurrentSlide(currentSlide + 1)
						setTranslateX(-(width + gap) * (currentSlide + 1))
					}
				}
			}
			prev.addEventListener('click', prevArrowClickHandler)
			next.addEventListener('click', nextArrowClickHandler)
			return function cleanup() {
				prev.removeEventListener('click', prevArrowClickHandler)
				next.removeEventListener('click', nextArrowClickHandler)
			}
		}
	}, [nextElement, prevElement, currentSlide, slides, speed, width, gap, isClicked, infinite])

	useEffect(() => {
		const removeTransitionDuration = () => {
			if (sliderContainerElem.current) {
				sliderContainerElem.current.style.transitionDuration = '0ms'
				if (infinite) {
					if (currentSlide < 1) {
						setSlides(prev => {
							return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]
						})
						setCurrentSlide(1);
						setTranslateX(-(width + gap))
						setIsClicked(false)
					} else if (currentSlide > slidesCount - 2) {
						setSlides(prev => {
							return [...prev.slice(1, prev.length), prev[0]]
						})
						setCurrentSlide(slidesCount - 2);
						setTranslateX(-(width + gap) * (slidesCount - 2))
						setIsClicked(false)
					} else {
						setIsClicked(false)
					}
				} else {
					setIsClicked(false)
				}
			}
		}
		document.addEventListener('transitionend', removeTransitionDuration);
		return () => {
			document.removeEventListener('transitionend', removeTransitionDuration);
		}
	}, [currentSlide, gap, width, slidesCount, infinite])
	return (
		<SliderWrapper>
			<SliderContainer
				ref={sliderContainerElem}
				gap={gap}
				style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
			>
				{slides.map((item, index) => (
					<SliderItem
						key={item.toString() + index}
						className={getClassNames(index)}
						style={{ width: width, flexShrink: 0 }}
					>
						{item}
					</SliderItem>
				))}
			</SliderContainer>
		</SliderWrapper>
	)
}

export default CustomSlider;