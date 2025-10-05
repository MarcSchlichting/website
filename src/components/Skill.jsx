import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

const SkillPill = ({ skill, onHover, handleMouseLeave }) => {
    const pillRef = useRef(null);

    const handleMouseEnter = () => {
        const rect = pillRef.current.getBoundingClientRect();
        onHover(skill, rect, pillRef.current); // Pass the element too
    };

    return (
        <div
            ref={pillRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
        bg-gray-800
        text-gray-300 rounded-full cursor-pointer
        transition-all duration-300 ease-out
        flex items-center justify-center
        shadow-lg hover:shadow-2xl hover:scale-105
        px-3 py-1.5
        font-light text-sm
        whitespace-nowrap
      "
        >
            {skill.name}
        </div>
    );
};

const SkillDetail = ({ skill, position, onMouseLeave, isLeaving, containerRef }) => {
    const cardRef = useRef(null);
    const [cardHeight, setCardHeight] = useState(280);

    const gap = 20; // Gap between card bottom and pill top

    // Measure card height dynamically
    useLayoutEffect(() => {
        if (cardRef.current && skill && !isLeaving) {
            const height = cardRef.current.offsetHeight;
            if (height !== cardHeight) {
                setCardHeight(height);
            }
        }
    }, [skill]);

    if (!skill && !isLeaving) return null;

    const containerRect = containerRef?.current?.getBoundingClientRect() || { 
        top: 0, 
        left: 0, 
        width: window.innerWidth, 
        height: window.innerHeight 
    };

    const scrollTop = containerRef?.current?.scrollTop || 0;

    // Tailwind responsive padding: px-4 sm:px-6 lg:px-8
    const windowWidth = window.innerWidth;
    let horizontalPadding = 16; // default px-4
    
    if (windowWidth >= 1024) {
        horizontalPadding = 32; // lg:px-8
    } else if (windowWidth >= 640) {
        horizontalPadding = 24; // sm:px-6
    }

    // max-w-5xl = 64rem = 1024px
    const maxWidth = 1024;
    
    // Calculate the actual content width considering max-width
    const actualContentWidth = Math.min(windowWidth, maxWidth);
    
    // Calculate available width for the card (accounting for padding on both sides)
    const availableWidth = actualContentWidth - (horizontalPadding * 2);
    
    // Card width: 500px or available width, whichever is smaller
    const cardWidth = Math.min(500, availableWidth);
    
    // If window is wider than max-width, content is centered (mx-auto)
    // This is the offset from the left edge of the window to the content area
    const contentOffsetX = windowWidth > maxWidth ? (windowWidth - maxWidth) / 2 : 0;

    // Calculate positions relative to container
    const pillCenterX = (position.left + position.right) / 2 - containerRect.left;
    const pillTop = position.top - containerRect.top + scrollTop;

    // Position card: centered horizontally, bottom edge at gap distance above pill
    let left = pillCenterX - cardWidth / 2;
    let top = pillTop - cardHeight - gap;

    // Constrain horizontally within the max-width content area
    // The minimum left position accounts for the content offset and padding
    const minLeft = contentOffsetX + horizontalPadding;
    
    // The maximum left position ensures the card doesn't exceed the content area
    const maxLeft = contentOffsetX + actualContentWidth - horizontalPadding - cardWidth;

    if (left < minLeft) {
        left = minLeft;
    } else if (left > maxLeft) {
        left = maxLeft;
    }

    // Ensure card doesn't go negative (extra safety check)
    left = Math.max(minLeft, left);

    return (
        <div
            onMouseLeave={onMouseLeave}
            className="absolute z-50"
            style={{
                left: `${left}px`,
                top: `${top}px`,
                width: `${cardWidth}px`,
            }}
        >
            <div
                ref={cardRef}
                className={`
          flex flex-col
          bg-gray-300/10 text-gray-300 rounded-2xl p-6 shadow-2xl
          border border-gray-300/10 backdrop-blur-xl
          ${isLeaving ? "animate-cardDisappear" : "animate-cardAppear"}
        `}
            >
                <h2 className="mb-4" style={{ marginTop: "0rem" }}>{skill?.name}</h2>

                <div className="space-y-4">
                    {/* Proficiency */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 font-normal opacity-90">
                                Proficiency
                            </span>
                            <span className="text-gray-300 font-normal">{skill?.level}%</span>
                        </div>
                        <div className="bg-gray-500/20 rounded-full h-3 overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-sky-700/80 to-emerald-500/90 h-full rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill?.level || 0}%` }}
                            />
                        </div>
                    </div>

                    {/* Key Projects */}
                    <div>
                        <div className="text-gray-300 font-normal mb-3 opacity-90">
                            Key Experiences
                        </div>
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                            {skill?.projects?.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="text-sm bg-gray-900/20 rounded-lg px-3 py-2 backdrop-blur-sm"
                                    style={{
                                        animation: `slideIn 0.3s ease-out forwards ${idx * 0.1}s`,
                                        opacity: 0,
                                    }}
                                >
                                    {project}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const SkillsShowcase = ({
    skills,
    scrollContainerRef,
    bioContainerRef,
    title = "Skills & Experience",
    subtitle = "Hover over any skill to see details",
}) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [position, setPosition] = useState({ top: 0, left: 0, right: 0, bottom: 0 });
    const [isLeaving, setIsLeaving] = useState(false);
    const [mounted, setMounted] = useState(false);
    const timeoutRef = useRef(null);
    const pillRef = useRef(null); // Add this to track the current pill
    const containerRef = scrollContainerRef;

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => {
            clearTimeout(timer);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    // Add scroll listener to update position
    useEffect(() => {
        const updatePosition = () => {
            if (pillRef.current && hoveredSkill) {
                const rect = pillRef.current.getBoundingClientRect();
                setPosition(rect);
            }
        };

        const scrollContainer = containerRef?.current || window;
        scrollContainer.addEventListener('scroll', updatePosition, { passive: true });
        window.addEventListener('scroll', updatePosition, { passive: true });

        return () => {
            scrollContainer.removeEventListener('scroll', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, [hoveredSkill, containerRef]);

    const handleHover = (skill, rect, element) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsLeaving(false);
        setHoveredSkill(skill);
        setPosition(rect);
        pillRef.current = element; // Store the pill element
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsLeaving(true);
            timeoutRef.current = setTimeout(() => {
                setHoveredSkill(null);
                setIsLeaving(false);
                pillRef.current = null; // Clear the ref
            }, 300);
        }, 100);
    };

    return (
        <>
            <div className="flex flex-wrap gap-1.5 justify-start">
                {skills.map((skill, idx) => (
                    <div
                        key={skill.id}
                        style={{
                            opacity: 0,
                            animation: mounted
                                ? `pillFadeIn 0.5s ease-out forwards ${idx * 0.04 + 0.4}s`
                                : "none",
                        }}
                    >
                        <SkillPill
                            skill={skill}
                            onHover={handleHover}
                            handleMouseLeave={handleMouseLeave}
                        />
                    </div>
                ))}
            </div>

            <SkillDetail
                skill={hoveredSkill}
                position={position}
                onMouseLeave={handleMouseLeave}
                isLeaving={isLeaving}
                containerRef={containerRef}
                bioContainerRef={bioContainerRef}
            />

            <style jsx>{`
        @keyframes pillFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAppear {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(-20px);
          }
          60% {
            transform: scale(1.02) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes cardDisappear {
          0% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          100% {
            opacity: 0;
            transform: scale(0.9) translateY(-10px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-cardAppear {
          animation: cardAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-cardDisappear {
          animation: cardDisappear 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
        </>
    );
};


export default SkillsShowcase;