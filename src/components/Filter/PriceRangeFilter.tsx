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

const PriceLabel = styled.div`
	position: absolute;
	top: 20px;
	background-color: #0957CB;
	padding: 8px;
	border-radius: 8px;
	font-size: 14px;
	&.min-price-label {
		left: 0;
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
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
			minPriceLabel.current.style.left = `${minPercent}%`;
		}
	}, [minVal, getPercent])

	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);
		if (range.current && maxPriceLabel.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
			maxPriceLabel.current.style.left = `${maxPercent}%`;
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
				<PriceLabel ref={minPriceLabel} className='min-price-label'>{minVal}</PriceLabel>
				<PriceLabel ref={maxPriceLabel} className='max-price-label'>{maxVal}</PriceLabel>
			</Slider>
		</RangeWrapper>
	)
}

export default PriceRangeFilter;