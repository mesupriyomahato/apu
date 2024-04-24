"use client"
import { useState, useEffect, useRef } from 'react';
import styles from './triggerbanner.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const TriggerBanner = () => {

    // GSAP Starts Here

    const triggerElement = useRef(null)
    const slider = useRef(null)
    let direction = -1

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: event => direction = event.direction * -1
            },
            x: "-=260px"
        })
    }, [])


    // GSAP Ends Here

    return (
        <>
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.Slider}>
                    <img className={styles.TechBanner} src="https://ik.imagekit.io/localstore/tech.svg?updatedAt=1713874187879" ref={triggerElement} draggable="false" />
                    <img className={styles.TechBanner} src="https://ik.imagekit.io/localstore/tech.svg?updatedAt=1713874187879" ref={triggerElement} draggable="false" />
                    <img className={styles.TechBanner} src="https://ik.imagekit.io/localstore/tech.svg?updatedAt=1713874187879" ref={triggerElement} draggable="false" />
                    <img className={styles.TechBanner} src="https://ik.imagekit.io/localstore/tech.svg?updatedAt=1713874187879" ref={triggerElement} draggable="false" />
                </div>
            </div>
        </>
    )
}

export default TriggerBanner
