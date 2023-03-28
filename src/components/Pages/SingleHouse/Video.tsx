import React from 'react'
import styled from 'styled-components'
import { SmallTitle } from '../../../utils/styles'


const Wrapper = styled.div`
	margin-bottom: 50px;
`
const VideoTitle = styled(SmallTitle)`
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