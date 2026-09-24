import React, { useRef, useLayoutEffect, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "./Skill.css";

const GAP = 12;          // space between pill and card
const EDGE = 16;         // minimum distance from the viewport edge
const NAV_HEIGHT = 64;   // fixed navbar (h-16)
const CLOSE_DELAY = 150;
const LEAVE_DURATION = 250;

const SkillPill = ({ skill, isActive, onOpen, onToggle, onScheduleClose }) => {
    const pointerTypeRef = useRef("mouse");

    return (
        <button
            type="button"
            aria-expanded={isActive}
            aria-controls={isActive ? "skill-detail" : undefined}
            onPointerDown={(e) => { pointerTypeRef.current = e.pointerType; }}
            onPointerEnter={(e) => { if (e.pointerType === "mouse") onOpen(skill, e.currentTarget); }}
            onPointerLeave={(e) => { if (e.pointerType === "mouse") onScheduleClose(); }}
            onClick={(e) => {
                // Mouse users already opened the card on hover; touch and keyboard (detail 0) toggle it.
                if (e.detail === 0 || pointerTypeRef.current !== "mouse") onToggle(skill, e.currentTarget);
            }}
            onBlur={onScheduleClose}
            className={`skill-pill ${isActive ? "skill-pill-active" : ""}`}
        >
            {skill.name}
        </button>
    );
};

const SkillDetail = ({ skill, anchor, isLeaving, onMouseEnter, onMouseLeave }) => {
    const cardRef = useRef(null);
    const [pos, setPos] = useState(null);

    const updatePosition = useCallback(() => {
        if (!anchor || !cardRef.current) return;
        const rect = anchor.getBoundingClientRect();
        const vw = document.documentElement.clientWidth;
        const width = Math.min(500, vw - 2 * EDGE);
        const height = cardRef.current.offsetHeight;

        const left = Math.min(Math.max(rect.left + rect.width / 2 - width / 2, EDGE), vw - EDGE - width);
        let top = rect.top - GAP - height;
        let placement = "above";
        if (top < NAV_HEIGHT + GAP) {
            top = rect.bottom + GAP;
            placement = "below";
        }
        setPos({ left, top, width, placement });
    }, [anchor]);

    useLayoutEffect(() => {
        updatePosition();
    }, [skill, updatePosition]);

    useEffect(() => {
        window.addEventListener("scroll", updatePosition, { passive: true });
        window.addEventListener("resize", updatePosition);
        return () => {
            window.removeEventListener("scroll", updatePosition);
            window.removeEventListener("resize", updatePosition);
        };
    }, [updatePosition]);

    return createPortal(
        <div
            id="skill-detail"
            role="tooltip"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="fixed z-50"
            style={{
                left: pos?.left ?? 0,
                top: pos?.top ?? 0,
                width: pos?.width ?? 500,
                visibility: pos ? "visible" : "hidden",
            }}
        >
            <div
                ref={cardRef}
                className={`
          flex flex-col
          bg-blue-200/15 text-gray-300 rounded-2xl p-6 shadow-2xl
          border border-gray-300/10 backdrop-blur-3xl
          ${pos?.placement === "below" ? "origin-top" : "origin-bottom"}
          ${isLeaving ? "animate-cardDisappear" : "animate-cardAppear"}
        `}
            >
                <h2 className="mb-4" style={{ marginTop: 0 }}>{skill.name}</h2>
                <div className="text-gray-300 font-normal mb-3 opacity-90">
                    Key Experiences
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                    {skill.projects.map((project, idx) => (
                        <div
                            key={`${skill.id}-${idx}`}
                            className="skill-experience text-sm bg-gray-900/20 rounded-lg px-3 py-2 border-1 border-gray-400/10 backdrop-blur-sm"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            {project}
                        </div>
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
};

const SkillsShowcase = ({ skills }) => {
    const [active, setActive] = useState(null); // { skill, anchor }
    const [isLeaving, setIsLeaving] = useState(false);
    const timeoutRef = useRef(null);

    const clearTimer = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
    };

    const open = useCallback((skill, anchor) => {
        clearTimer();
        setIsLeaving(false);
        setActive({ skill, anchor });
    }, []);

    const close = useCallback(() => {
        clearTimer();
        setIsLeaving(true);
        timeoutRef.current = setTimeout(() => {
            setActive(null);
            setIsLeaving(false);
        }, LEAVE_DURATION);
    }, []);

    const scheduleClose = useCallback(() => {
        clearTimer();
        timeoutRef.current = setTimeout(close, CLOSE_DELAY);
    }, [close]);

    const toggle = (skill, anchor) => {
        if (active?.skill.id === skill.id && !isLeaving) close();
        else open(skill, anchor);
    };

    useEffect(() => clearTimer, []);

    useEffect(() => {
        if (!active) return;
        const onKey = (e) => { if (e.key === "Escape") close(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [active, close]);

    return (
        <>
            <div className="flex flex-wrap gap-1.5 justify-start">
                {skills.map((skill, idx) => (
                    <div
                        key={skill.id}
                        className="skill-pill-wrapper"
                        style={{ animationDelay: `${idx * 0.04 + 0.4}s` }}
                    >
                        <SkillPill
                            skill={skill}
                            isActive={active?.skill.id === skill.id && !isLeaving}
                            onOpen={open}
                            onToggle={toggle}
                            onScheduleClose={scheduleClose}
                        />
                    </div>
                ))}
            </div>

            {active && (
                <SkillDetail
                    skill={active.skill}
                    anchor={active.anchor}
                    isLeaving={isLeaving}
                    onMouseEnter={clearTimer}
                    onMouseLeave={scheduleClose}
                />
            )}
        </>
    );
};

export default SkillsShowcase;
