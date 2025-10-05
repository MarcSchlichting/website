import React, { useRef, useLayoutEffect, useState, useEffect } from "react";

const SkillPill = ({ skill, onHover, handleMouseLeave }) => {
    const pillRef = useRef(null);

    const handleMouseEnter = () => {
        const rect = pillRef.current.getBoundingClientRect();
        onHover(skill, rect);
    };

    return (
        <div
            ref={pillRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
        bg-gray-700
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

const SkillDetail = ({ skill, position, onMouseLeave, isLeaving }) => {
    const cardRef = useRef(null);
    const [cardHeight, setCardHeight] = useState(0);

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const cardWidth = 500;
    const padding = 20;

    // Measure card height dynamically
    useLayoutEffect(() => {
        if (cardRef.current) {
            setCardHeight(cardRef.current.offsetHeight);
        }
    }, [skill, isLeaving]);

    if (!skill && !isLeaving) return null; // safe now, hooks already called

    // Position calculation
    const pillCenterX = (position.left + position.right) / 2;
    const pillCenterY = (position.top + position.bottom) / 2;

    let left = pillCenterX - cardWidth / 2;
    let top = pillCenterY - (cardHeight || 280) - padding - 20;

    // Keep inside viewport horizontally
    if (left < padding) {
        left = padding;
    } else if (left + cardWidth > windowWidth - padding) {
        left = windowWidth - cardWidth - padding;
    }

    // Keep inside viewport vertically
    if (top < padding) {
        top = position.bottom + padding; // place below pill if not enough space above
    } else if (cardHeight && top + cardHeight > windowHeight - padding) {
        top = Math.max(windowHeight - cardHeight - padding, padding);
    }

    return (
        <div
            onMouseLeave={onMouseLeave}
            className="absolute z-50"
            style={{
                left: `${left}px`,
                top: `${top}px`,
                width: `min(${cardWidth}px, 100%)`,
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

// const SkillDetail = ({ skill, position, onMouseLeave, isLeaving }) => {
//     if (!skill && !isLeaving) return null;

//     // Calculate optimal position - ensure card covers the pill
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const cardWidth = 320;
//     const cardHeight = 280;
//     const padding = 20;

//     // Account for scroll position since we use fixed positioning
//     const scrollX = window.scrollX || window.pageXOffset;
//     const scrollY = window.scrollY || window.pageYOffset;

//     // Calculate pill center (position already includes scroll in getBoundingClientRect)
//     const pillCenterX = (position.left + position.right) / 2;
//     const pillCenterY = (position.top + position.bottom) / 2;

//     // Default: center the card over the pill
//     let left = pillCenterX - cardWidth / 2;
//     let top = pillCenterY - cardHeight - padding - 90;


//     // Adjust horizontally while keeping pill covered
//     if (left < padding) {
//         // Card would go off left edge - shift right but ensure pill stays covered
//         left = Math.min(padding, position.right - 60); // Keep at least 60px of card over pill
//     } else if (left + cardWidth > windowWidth - padding) {
//         // Card would go off right edge - shift left but ensure pill stays covered
//         left = Math.max(windowWidth - cardWidth - padding, position.left - cardWidth + 60);
//     }

//     //   // Adjust vertically while keeping pill covered
//     //   if (top < padding) {
//     //     // Card would go off top edge - shift down but ensure pill stays covered
//     //     top = Math.min(padding, position.bottom - 60);
//     //   } else if (top + cardHeight > windowHeight - padding) {
//     //     // Card would go off bottom edge - shift up but ensure pill stays covered
//     //     top = Math.max(windowHeight - cardHeight - padding, position.top - cardHeight + 60);
//     //   }

//     return (
//         <div
//             onMouseLeave={onMouseLeave}
//             className="absolute z-50"
//             style={{
//                 left: `${left}px`,
//                 top: `${top}px`,
//                 width: `${cardWidth}px`,
//             }}
//         >
//             <div className={`
//         flex
//         flex-col
//         bg-gray-300/10
//         text-gray-300 rounded-2xl p-6 shadow-2xl
//         border border-gray-300/10
//         backdrop-blur-xl
//         ${isLeaving ? 'animate-cardDisappear' : 'animate-cardAppear'}
//       `}>
//                 <h2 className="mb-4">{skill.name}</h2>

//                 <div className="space-y-4">
//                     <div>
//                         <div className="flex items-center justify-between mb-2">
//                             <span className="text-sm font-semibold opacity-90">Proficiency</span>
//                             <span className="text-sm font-bold">{skill.level}%</span>
//                         </div>
//                         <div className="bg-white/20 rounded-full h-3 overflow-hidden">
//                             <div
//                                 className="bg-gradient-to-r from-green-400 to-blue-400 h-full rounded-full transition-all duration-1000 ease-out"
//                                 style={{ width: `${skill.level}%` }}
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="text-sm font-semibold mb-3 opacity-90">Key Projects</div>
//                         <div className="space-y-2 max-h-36 overflow-y-auto">
//                             {skill.projects.map((project, idx) => (
//                                 <div
//                                     key={idx}
//                                     className="text-sm bg-white/10 rounded-lg px-3 py-2 backdrop-blur-sm
//                     hover:bg-white/20 transition-colors duration-200
//                     border border-white/10"
//                                     style={{
//                                         animation: `slideIn 0.3s ease-out forwards ${idx * 0.1}s`,
//                                         opacity: 0
//                                     }}
//                                 >
//                                     • {project}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

const SkillsShowcase = ({
    skills,
    title = "Skills & Experience",
    subtitle = "Hover over any skill to see details",
}) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [position, setPosition] = useState({ top: 0, left: 0, right: 0 });
    const [isLeaving, setIsLeaving] = useState(false);
    const [mounted, setMounted] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => {
            clearTimeout(timer);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleHover = (skill, rect) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsLeaving(false);
        setHoveredSkill(skill);
        setPosition(rect);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsLeaving(true);
            timeoutRef.current = setTimeout(() => {
                setHoveredSkill(null);
                setIsLeaving(false);
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
                                ? `pillFadeIn 0.5s ease-out forwards ${idx * 0.04+0.4}s`
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