import React from 'react'
import styled from 'styled-components'
import { SmallTitle } from '../../../utils/styles'


const Wrapper = styled.div`
	margin-bottom: 110px;
`
const MapFrame = styled.iframe`
	border-radius: 8px;
`
const MapTitle = styled(SmallTitle)`
	margin-bottom: 20px;
`

const HoodMap = () => {
	return (
		<Wrapper>
			<MapTitle>Property on Map</MapTitle>
			<MapFrame
				title='Map'
				width='100%'
				height={400}
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=san%20diego&t=&z=13&ie=UTF8&iwloc=&output=embed"
			/>
		</Wrapper>
	)
}

export default HoodMap