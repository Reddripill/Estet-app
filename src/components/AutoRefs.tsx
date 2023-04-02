import React, { useEffect } from 'react'
import Refs from './Refs';

const AutoRefs = () => {
	const ref = React.createRef<HTMLInputElement>();
	useEffect(() => {
		if (ref.current) {
			ref.current.focus()
		}
	}, [ref])
	return (
		<>
			<Refs ref={ref} />
		</>
	)
}

export default AutoRefs