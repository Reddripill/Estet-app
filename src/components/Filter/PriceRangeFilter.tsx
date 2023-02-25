import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface Props {
	min: number;
	max: number;
}

const RangeWrapper = styled.div`
	position: relative;
`

const InputRange = styled.input`
	-webkit-appearance: none;
	background-color: transparent;
	position: absolute;
	top: 0;
	width: 100%;
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
	height: 10px;
	background: #EDEDED;
	border-radius: 8px;
	z-index: 1;
`
const SliderRange = styled.div`
	position: absolute;
	height: 10px;
	background: #0957CB;
	border-radius: 8px;
	z-index: 2;
`
const SliderMinVal = styled.div`
	position: absolute;
`
const SliderMaxVal = styled.div`
	position: absolute;
`

const PriceRangeFilter: React.FC<Props> = function ({ min, max }) {
	const [minVal, setMinVal] = useState<number>(min);
	const [maxVal, setMaxVal] = useState<number>(max);
	const minValRef = useRef(min);
	const maxValRef = useRef(max);
	const range = useRef<HTMLDivElement>(null);

	const getPercent = useCallback((value: number) => {
		return Math.round(((value - min) / (max - min)) * 100)
	}, [max, min]);

	useEffect(() => {
		const minPercent = getPercent(minVal);
		const maxPercent = getPercent(maxValRef.current);
		if (range.current) {
			range.current.style.left = `${minPercent}%`;
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [minVal, getPercent])

	useEffect(() => {
		const minPercent = getPercent(minValRef.current);
		const maxPercent = getPercent(maxVal);
		if (range.current) {
			range.current.style.width = `${maxPercent - minPercent}%`;
		}
	}, [maxVal, getPercent])

	return (
		<RangeWrapper>
			<InputRange
				type="range"
				className='thumb-left'
				min={min}
				max={max}
				step={100}
				value={minVal}
				onChange={(event) => {
					const value = Math.min(Number(event.target.value), maxVal - 1);
					setMinVal(value)
				}}
			/>
			<InputRange
				type="range"
				className='thumb-right'
				min={min}
				max={max}
				step={100}
				value={maxVal}
				onChange={(event) => {
					const value = Math.max(Number(event.target.value), minVal + 1);
					setMaxVal(value)
				}}
			/>
			<Slider>
				<SliderTrack />
				<SliderRange ref={range} />
				<SliderMinVal />
				<SliderMaxVal />
			</Slider>
		</RangeWrapper>
	)
}

export default PriceRangeFilter;