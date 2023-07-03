import { useEffect, useState } from 'react'
import { ProductTypeWithDate } from '../types';
import { ProjectsFiltersType } from '../../components/Pages/AccountPages/MainAccountPage'

export default function useProjectsFiltering(
	filters: ProjectsFiltersType,
	visibleFields: (keyof ProductTypeWithDate)[],
	projects?: ProductTypeWithDate[],
) {
	const [filteredProjects, setFilteredProjects] = useState<ProductTypeWithDate[]>([])
	useEffect(() => {
		if (projects) {
			setFilteredProjects(projects)
			for (let filter of filters.dropdownFilter) {
				setFilteredProjects(prev => {
					let content = prev;
					if (filter.value === 'all') {
						content = projects
					} else {
						content = content.filter(project => (project)[filter.property as keyof ProductTypeWithDate] === filter.value);
					}
					if (filters.searchFilter) {
						content = content.filter(project => {
							const selectedItems = visibleFields.map(field => project[field]);
							return selectedItems.some(item => item?.toString().toLowerCase().includes(filters.searchFilter.toLowerCase()))
						})
					}
					return content;
				})
			}
		}
	}, [projects, filters, visibleFields])

	return filteredProjects;
}