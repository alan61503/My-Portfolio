"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import styles from "./HeroSpotlight.module.scss";

type HeroSpotlightProps = {
	children: React.ReactNode;
};

const colors = ["#58898a", "#545882", "#457ec4", "#356fdb"];
const BASE_SIZE = 30;
const ACTIVE_SIZE = 400;
const BLUR_ACTIVE = 20;
const BLUR_IDLE = 2;

export const HeroSpotlight = ({ children }: HeroSpotlightProps) => {
	const [isActive, setIsActive] = useState(false);
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const circlesRef = useRef<Array<HTMLDivElement | null>>([]);
	const mouse = useRef({ x: 0, y: 0 });
	const delayedMouse = useRef({ x: 0, y: 0 });
	const rafId = useRef<number | null>(null);

	useEffect(() => {
		const lerp = (start: number, end: number, amount: number) =>
			start + (end - start) * amount;
		const clamp = (value: number, min: number, max: number) =>
			Math.min(Math.max(value, min), max);

		const moveCircles = (x: number, y: number) => {
			if (circlesRef.current.length < 1) return;
			circlesRef.current.forEach((circle) => {
				if (!circle) return;
				gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
			});
		};

		const animate = () => {
			const { x, y } = delayedMouse.current;

			delayedMouse.current = {
				x: lerp(x, mouse.current.x, 0.075),
				y: lerp(y, mouse.current.y, 0.075),
			};

			moveCircles(delayedMouse.current.x, delayedMouse.current.y);
			rafId.current = window.requestAnimationFrame(animate);
		};

		const handleMouseMove = (event: MouseEvent) => {
			if (!wrapperRef.current) return;
			const rect = wrapperRef.current.getBoundingClientRect();
			const radius = (isActive ? ACTIVE_SIZE : BASE_SIZE) / 2;
			const x = clamp(event.clientX - rect.left, radius, rect.width - radius);
			const y = clamp(event.clientY - rect.top, radius, rect.height - radius);
			mouse.current = {
				x,
				y,
			};
		};

		const node = wrapperRef.current;
		if (!node) return undefined;

		node.addEventListener("mousemove", handleMouseMove, { passive: true });
		rafId.current = window.requestAnimationFrame(animate);

		return () => {
			node.removeEventListener("mousemove", handleMouseMove);
			if (rafId.current) {
				window.cancelAnimationFrame(rafId.current);
			}
		};
	}, [isActive]);

	const size = isActive ? ACTIVE_SIZE : BASE_SIZE;

	return (
		<div
			ref={wrapperRef}
			className={styles.wrapper}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<div className={styles.content}>{children}</div>
			<div className={styles.circles} aria-hidden="true">
				{colors.map((color, index) => (
					<div
						key={color}
						ref={(node) => {
							circlesRef.current[index] = node;
						}}
						className={styles.circle}
						style={{
							backgroundColor: color,
							width: size,
							height: size,
							filter: `blur(${isActive ? BLUR_ACTIVE : BLUR_IDLE}px)`,
							transition: `transform ${(4 - index) * 0.08}s linear, height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
						}}
					/>
				))}
			</div>
		</div>
	);
};
