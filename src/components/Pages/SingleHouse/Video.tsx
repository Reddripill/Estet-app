import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
	margin-bottom: 50px;
`
const VideoTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;
	line-height: 139.52%;
	color: #1DAEFF;
	margin-bottom: 20px;
`

const Video = ({ video }: { video: string }) => {
	return (
		<Wrapper>
			<VideoTitle>Property Video</VideoTitle>
			<img src={video} alt="Video" />
		</Wrapper>
	)
}

export default Video