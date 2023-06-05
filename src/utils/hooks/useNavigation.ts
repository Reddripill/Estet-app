import { useEffect, useState } from 'react';
import { Sections } from '../types';
import { useLocation } from 'react-router-dom';


export function useNavigation(targetIds: string[]) {
	const [currentId, setCurrentId] = useState<string | null>(targetIds[0]);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const location = useLocation()
	const navigateHandler = (id: Sections): void => {
		const section = document.getElementById(id);
		if (location.pathname !== '/') {
			setCurrentId(id);
		}
		if (section) {
			const sectionTop = section.offsetTop > 82 ? section.offsetTop - 82 : section.offsetTop;
			setIsClicked(true);
			window.scrollTo({
				top: sectionTop,
				behavior: 'smooth',
				left: 0
			})
			setCurrentId(id);
			const timestamp = setInterval(() => {
				if (sectionTop === Math.trunc(window.scrollY)) {
					setIsClicked(false)
					clearInterval(timestamp);
				}
			})
		}
	}
	const intersectionHandler: IntersectionObserverCallback = (entries) => {
		const currentActiveEntries = entries.filter(entry => entry.isIntersecting);
		if (currentActiveEntries.length !== 0) {
			setCurrentId(currentActiveEntries[0].target.id)
		} else {
			setCurrentId(null)
		}
	}
	useEffect(() => {
		if (location.pathname !== '/') {
			setCurrentId(null)
		}
		const targets = targetIds.map(targetId => (
			document.getElementById(targetId)
		))
		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: '0px 0px -70% 0px',
			threshold: 0,
		}
		const observer = new IntersectionObserver(intersectionHandler, options);
		if (targets.length !== 0 && location.pathname === '/') {
			if (!isClicked) {
				targets.forEach(target => {
					if (target) observer.observe(target)
				})
			} else {
				observer.disconnect();
			}
		}
		return () => {
			if (targets.length !== 0) {
				observer.disconnect();
			}
		}
	}, [targetIds, currentId, isClicked, location])
	return { currentId, navigateHandler };
}