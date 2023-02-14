import React, { useEffect, useState } from "react";


export default function useIntersection(targetRef: React.RefObject<HTMLElement>, image?: boolean) {
	const [isVisible, setIsVisible] = useState(!image);

	const intersectionCallback: IntersectionObserverCallback = function (entries) {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	}

	useEffect(() => {
		const target = targetRef.current;
		const options: IntersectionObserverInit = {
			root: null,
			rootMargin: '0px',
			threshold: +`${image ? 0.5 : 0}`,
		}
		const observer = new IntersectionObserver(intersectionCallback, options);
		if (target) observer.observe(target);
		if (image && isVisible) observer.disconnect();
		return () => {
			if (target) observer.unobserve(target)
		}
	}, [targetRef, image, isVisible])
	return isVisible;
}