import React, { useEffect, useState } from "react";


export default function useIntersection(targetRef: React.RefObject<HTMLElement>) {
	const [isVisible, setIsVisible] = useState(true);

	const intersectionCallback: IntersectionObserverCallback = function (entries) {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	}

	useEffect(() => {
		const target = targetRef.current;
		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: '0px',
			threshold: 0,
		}
		const observer = new IntersectionObserver(intersectionCallback, options);
		if (target) observer.observe(target);
		return () => {
			if (target) observer.unobserve(target)
		}
	}, [targetRef])
	return isVisible;
}