import React from 'react';
import styled from 'styled-components';
import { Container, Text, Title } from '../../utils/styles';


const Content = styled.div`
	margin-bottom: 32px;
`
const MapFrame = styled.iframe`
	border-radius: 8px;
`
const MapTitle = styled(Title)`
	color: #FF9505;
`
const MapText = styled(Text)`
	color: rgba(255, 255, 255, 0.5);
`

function Map() {
	return (
		<Container>
			<Content>
				<MapTitle>Neighborhood</MapTitle>
				<MapText>Dear home villas San Diego, CA, USA</MapText>
			</Content>
			<MapFrame
				title='Map'
				width="1170"
				height={600}
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=san%20diego&t=&z=13&ie=UTF8&iwloc=&output=embed"
			>
			</MapFrame>
		</Container>
	)
}

export default Map;