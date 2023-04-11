import React from 'react'
import { useGetAllUsersQuery } from '../../app/api/apiSlice'

const AuthorizedUser = () => {
	const { data: allUsers, isLoading } = useGetAllUsersQuery();
	console.log();
	return (
		<>
			{!isLoading && allUsers &&
				<ul>
					{allUsers.map(user => (
						<li key={user.firstname}>
							{user.firstname}
						</li>
					))}
				</ul>
			}
		</>
	)
}

export default AuthorizedUser