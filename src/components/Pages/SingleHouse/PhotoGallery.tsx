import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Image } from '../../../utils/styles'

interface Props {
	images: string[]
}
interface ItemProps extends Props {
	activeIndex: number;
	clickHandler: (event: React.MouseEvent<HTMLImageElement>) => void;
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
const GalleryImage = styled(Image)`
	img {
		opacity: 0.5;
		&._active {
			opacity: 1;
		}
	}
`

const ImageItem = ({ images, activeIndex, clickHandler }: ItemProps) => {
	return (
		<>
			{
				images.map((image, index) => (
					<ImagesRowItem key={image}>
						<GalleryImage>
							<img
								src={image}
								alt="House"
								onClick={event => clickHandler(event)}
								className={index === activeIndex ? '_active' : ''}
								id={`gallery-photo_${index}`}
							/>
						</GalleryImage>
					</ImagesRowItem>
				))
			}
		</>
	)
}

const PhotoGallery = ({ images }: Props) => {
	const [active, setActive] = useState<string>(images[0]);
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const mainImgRef = useRef<HTMLImageElement>(null);
	const clickHandler = (event: React.MouseEvent<HTMLImageElement>) => {
		const el = event.target as HTMLImageElement;
		setActive(el.src);
		setActiveIndex(Number(el.id[el.id.length - 1]))
	}
	useEffect(() => {
		if (mainImgRef.current) {
			mainImgRef.current.src = active;
		}
	}, [active])
	return (
		<Wrapper>
			<MainCanvas>
				<Image>
					<img ref={mainImgRef} src={images[0]} alt="House" />
				</Image>
			</MainCanvas>
			<ImagesRow>
				<ImageItem
					clickHandler={clickHandler}
					images={images}
					activeIndex={activeIndex}
				/>
			</ImagesRow>
		</Wrapper>
	)
}

export default PhotoGallery;