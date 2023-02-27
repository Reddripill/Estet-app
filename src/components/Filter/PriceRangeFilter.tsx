import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface Props {
	min: number;
	max: number;
	gap: number;
	step: number;
}

const RangeWrapper = styled.div`
	position: relative;
	margin: 0 15px;
`

const InputRange = styled.input`
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
	position: absolute;
	top: 0;
	left: -9px;
	width: calc(100% + 18px);
	height: 0;
	pointer-events: none;
	outline: none;
	margin-top: 4px;
	z-index: 3;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		-webkit-tap-highlight-color: transparent;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #FFFFFF;
		border: 4px solid #0957CB;
		pointer-events: all;
		cursor: pointer;
	}
`

const Slider = styled.div`
	position: relative;
	width: 100%;
`
const SliderTrack = styled.div`
	position: absolute;
	width: 100%;
	height: 8px;
	background: #EDEDED;
	border-radius: 8px;
	z-index: 1;
`
const SliderRange = styled.div`
	position: absolute;
	height: 8px;
	background: #0957CB;
	border-radius: 8px;
	z-index: 2;
`

const PriceLabelBlock = styled.div`
	position: relative;
	background-color: #0957CB;
	box-shadow: 0px 3.02029px 8.45681px rgba(9, 87, 203, 0.26);
	padding: 8px;
	border-radius: 8px;
	font-size: 14px;
	&::before {
		content: '';
		position: absolute;
		left: 10px;
		bottom: 100%;
		height: 0;
		width: 0;
		border-bottom: 10px solid #0957CB;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
	}
`

const PriceLabel = styled.div`
	position: absolute;
	top: 25px;
	&._opposit ${PriceLabelBlock} {
		&::before {
			right: 10px;
			left: auto;
		}
	}
`

const PriceRangeFilter: React.FC<Props> = function ({ min, max, gap, step }) {
	const [minVal, setMinVal] = useState<number>(min);
	const [maxVal, setMaxVal] = useState<number>(max);
	const minValRef = useRef(min);
	const maxValRef = useRef(max);
	const minPriceLabel = useRef<HTMLDivElement>(null);
	const maxPriceLabel = useRef<HTMLDivElement>(null);
	const range = useRef<HTMLDivElement>(null);

	const getPercent = useCallback((value: number) => {
		return ((value - min) / (max - min)) * 100
	}, [max, min]);

	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);
		if (range.current && minPriceLabel.current) {
			const width = maxPercent - minPercent;
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${width}%`;
			if (width > 15) {
				minPriceLabel.current.classList.remove('_opposit')
				minPriceLabel.current.style.left = `calc(${minPercent}% - 20px)`;
				minPriceLabel.current.style.right = `auto`;
			} else {
				minPriceLabel.current.classList.add('_opposit')
				minPriceLabel.current.style.right = `calc(100% - ${minPercent}% - 20px)`;
				minPriceLabel.current.style.left = `auto`;
			}
		}
	}, [minVal, getPercent])

	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);
		if (range.current && maxPriceLabel.current) {
			const width = maxPercent - minPercent;
			range.current.style.width = `${width}%`;
			if (maxPercent < 90) {
				maxPriceLabel.current.classList.remove('_opposit')
				maxPriceLabel.current.style.left = `calc(${maxPercent}% - 20px)`;
				maxPriceLabel.current.style.right = `auto`;
			} else {
				maxPriceLabel.current.classList.add('_opposit')
				maxPriceLabel.current.style.right = `calc(100% - ${maxPercent}% - 20px)`;
				maxPriceLabel.current.style.left = `auto`;
			}
		}
	}, [maxVal, getPercent])

	return (
		<RangeWrapper>
			<InputRange
				type="range"
				className='thumb-left'
				min={min}
				max={max}
				step={step}
				value={minVal}
				onChange={(event) => {
					const value = Math.min(Number(event.target.value), maxVal - gap);
					setMinVal(value);
					minValRef.current = value;
				}}
			/>
			<InputRange
				type="range"
				className='thumb-right'
				min={min}
				max={max}
				step={step}
				value={maxVal}
				onChange={(event) => {
					const value = Math.max(Number(event.target.value), minVal + gap);
					setMaxVal(value);
					maxValRef.current = value;
				}}
			/>
			<Slider>
				<SliderTrack />
				<SliderRange ref={range} />
				<PriceLabel ref={minPriceLabel}>
					<PriceLabelBlock className='min-price-label'>
						{minVal}
					</PriceLabelBlock>
				</PriceLabel>
				<PriceLabel ref={maxPriceLabel}>
					<PriceLabelBlock className='max-price-label'>
						{maxVal}
					</PriceLabelBlock>
				</PriceLabel>
			</Slider>
		</RangeWrapper>
	)
}

export default PriceRangeFilter;