import React from 'react'

const Refs = React.forwardRef<HTMLInputElement>((props, ref) => (
	<>
		<input
			type="text"
			ref={ref}
		/>
	</>
))

export default Refs