import React, { useState } from 'react'
import styled from 'styled-components'
import { Image } from '../../../utils/styles'

interface Props {
	images: string[]
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`
const MainCanvas = styled.div`
	border-radius: 10px;
	height: 475px;
	width: 100%;
	position: relative;
	overflow: hidden;
`
const ImagesRow = styled.ul`
	display: flex;
	gap: 15px;
	height: 135px;
`
const ImagesRowItem = styled.li`
	flex: 1 1 auto;
	max-width: 350px;
	height: 100%;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	cursor: pointer;
`

const PhotoGallery = ({ images }: Props) => {
	return (
		<Wrapper>
			<MainCanvas>
				<Image>
					<img src={images[0]} alt="House" />
				</Image>
			</MainCanvas>
			<ImagesRow>
				{images.map(image => (
					<ImagesRowItem key={image}>
						<Image>
							<img src={image} alt="House" />
						</Image>
					</ImagesRowItem>
				))
				}
			</ImagesRow>
		</Wrapper>
	)
}

export default PhotoGallery;