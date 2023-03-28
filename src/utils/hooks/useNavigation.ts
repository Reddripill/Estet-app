import { useEffect, useState } from 'react';

export function useNavigation(targetIds: string[]) {
	const [currentId, setCurrentId] = useState<string | null>(targetIds[0]);

	useEffect(() => {
		const intersectionHandler: IntersectionObserverCallback = (entries) => {
			const currentActiveEntries = entries.filter(entry => entry.isIntersecting);
			const currentIdElement = entries.find(entry => entry.target.id === currentId);
			if (currentActiveEntries.length !== 0) {
				setCurrentId(currentActiveEntries[0].target.id)
			} else {
				setCurrentId(null)
			}
		}
		const targets = targetIds.map(targetId => (
			document.getElementById(targetId)
		))
		const options = {
			rootMargin: '0px 0px -100% 0px',
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
	}, [targetIds, currentId])
	return currentId;
}