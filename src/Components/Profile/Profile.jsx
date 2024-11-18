import React, { useEffect, useRef } from 'react';
import './profile.css'
import profileImg from '../../assets/Images/ProfileSectionImages/profileImg.png';
import DesignationCube from './DesignationCube/DesignationCube';
import DownloadButton from './DownloadButton/DownloadButton';
import SocialButton from './SocialButtons/SocialButton';
import AboutMe from './AboutMe/AboutMe';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
    const profileRef = useRef(null);
    const imageContainerRef = useRef(null);
    const nameRef = useRef(null);
    const designationCubeRef = useRef(null);
    const downloadButtonRef = useRef(null);
    const socialButtonRef = useRef(null);

    useEffect(() => {
        const profile = profileRef.current;
        const imageContainer = imageContainerRef.current;
        const name = nameRef.current;
        const designationCube = designationCubeRef.current;
        const downloadButton = downloadButtonRef.current;
        const socialButton = socialButtonRef.current;

        const runAnimation = () => {
            const tl = gsap.timeline({ delay: 0.5 });

            // Fade in the entire profile
            tl.to(profile, { opacity: 1, duration: 0.5 });

            // Image container animation
            tl.fromTo(imageContainer, 
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
            );

            // Name animation
            tl.fromTo(name,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
            );

            // DesignationCube animation
            tl.fromTo(designationCube,
                { rotationY: -90, opacity: 0 },
                { rotationY: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
            );

            // DownloadButton animation
            tl.fromTo(downloadButton,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
            );

            // SocialButton animation
            tl.fromTo(socialButton,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
            );

            return tl;
        };

        // Run initial animation
        const initialAnimation = runAnimation();

        // Set up ScrollTrigger
        const trigger = ScrollTrigger.create({
            trigger: profile,
            start: "top 80%",
            end: "bottom 20%",
        });

        // Cleanup function
        return () => {
            initialAnimation.kill();
            trigger.kill();
        };
    }, []);

    return (
        <div className="content-layout" ref={profileRef} style={{ opacity: 0 }}>
            <div className="card">
                <div className="profile-content">
                    <div className="image-container" ref={imageContainerRef}>
                        <img src={profileImg} loading='lazy' width="150" height="150" alt="profile" />
                    </div>
                    <div className="profile-details">
                        <h1 className="name" ref={nameRef}>D.Arunpandian</h1>
                        <DesignationCube ref={designationCubeRef} />
                        <DownloadButton ref={downloadButtonRef} />
                        <SocialButton ref={socialButtonRef} />
                    </div>
                </div>
            </div>
            <AboutMe />
        </div>
    );
};

export default Profile;