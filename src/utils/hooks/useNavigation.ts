import { useEffect, useState } from 'react';

export function useNavigation(targetIds: string[]) {
	const [currentId, setCurrentId] = useState<string>();
	const intersectionHandler: IntersectionObserverCallback = (entries) => {
		const startIds = entries.map(item => item.target.id)
		console.log('StartId: ', startIds, 'Start: ', entries);
		const currentActiveEntries = entries.filter(entry => entry.isIntersecting);
		const ids = currentActiveEntries.map(item => item.target.id)
		console.log('Id: ', ids, 'Filtered:', currentActiveEntries);
		if (currentActiveEntries.length !== 0) {
			const currentActiveEntry = currentActiveEntries[0].target;
			const currentActiveId = currentActiveEntry.id;
			/* if (currentActiveEntry.getBoundingClientRect().y > 0) {
				const index = targetIds.indexOf(currentActiveId);
				const prevId = targetIds[index - 1];
				setCurrentId(prevId);
			} else {
				setCurrentId(currentActiveId)
			} */
			setCurrentId(currentActiveId)
		}
	}
	useEffect(() => {
		const targets = targetIds.map(targetId => (
			document.getElementById(targetId)
		))
		const options = {
			root: null,
			margin: '0px',
			threshold: 0,
		}
		const observer = new IntersectionObserver(intersectionHandler, options);
		if (targets.length !== 0) {
			targets.forEach(target => {
				if (target) observer.observe(target)
			})
		}
		return () => {
			if (targets.length !== 0) {
				observer.disconnect();
			}
		}
	}, [targetIds])
	return currentId;
}