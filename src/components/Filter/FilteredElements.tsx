import React from 'react'
import { useParams } from 'react-router-dom'

function FilteredElements() {
	const {
		productType,
		type,
		priceRange,
		priceCurrency,
		location
	} = useParams();
	return (
		<div>FilteredElements</div>
	)
}

export default FilteredElements