import { useEffect, useState } from 'react';

export function useNavigation(targetIds: string[]) {
	const [currentId, setCurrentId] = useState<string>();
	const [currentEntries, setCurrentEntries] = useState<IntersectionObserverEntry[]>();
	const intersectionHandler: IntersectionObserverCallback = (entries) => {
		// const startIds = entries.map(item => item.target.id)
		// console.log('StartId: ', startIds, 'Start: ', entries);
		const currentActiveEntries = entries.filter(entry => entry.isIntersecting);
		// const ids = currentActiveEntries.map(item => item.target.id)
		// console.log('Id: ', ids, 'Filtered:', currentActiveEntries);
		if (currentActiveEntries.length !== 0) {
			if (currentActiveEntries[0].target.getBoundingClientRect().y >= 0) {
				setCurrentEntries(currentActiveEntries)
			} else if (currentActiveEntries[0].target.getBoundingClientRect().y < 0) {
				if (currentEntries && currentEntries.length === 2) {
					setCurrentEntries(currentActiveEntries);
					if (currentEntries[1].target.getBoundingClientRect().height >= currentEntries[1].target.getBoundingClientRect().bottom) {
						setCurrentId(currentEntries[1].target.id);
						setCurrentEntries([currentEntries[1]]);
					}
				}
			}
		} else if (currentActiveEntries.length === 0) {
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
		console.log('test');
		if (targets.length !== 0) {
			targets.forEach(target => {
				// if (target) observer.observe(target)
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