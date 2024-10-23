import { FC } from "preact/compat";
import SystemButton from "../Button";
import { X } from "react-feather";
import { useState } from "react";
import { PageRoutes, useRouterStore } from "../../../lib/store/router.store";

interface TutorialOverlayProps {
    title?: string;
    description?: string;
    focusPoint?: {
        size?: number;
        top?: number;
        left?: number;
    };
    forPage?: PageRoutes;
}

const TutorialOverlay: FC<TutorialOverlayProps> = ({ title, description, focusPoint, forPage }) => {
    const routerStore = useRouterStore();
    const hasVisited = routerStore.visitedLinks.includes(forPage);
    const [visible, setVisible] = useState<boolean>(hasVisited || true);

    const handleOnClose = () => {
        setVisible(false);
        routerStore.addVisitedLink(forPage);
    };

    if (!visible || hasVisited) {
        return null;
    }
    
    return (
        <div className="fixed top-0 left-0 bg-black/60 w-full h-dvh z-30">
            <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                    clipPath: `circle(${focusPoint.size}px at ${focusPoint.left}px ${focusPoint.top}px)`,
                    backdropFilter: "brightness(200%)",
                }}
            ></div>
            <div
                className="absolute max-w-[450px] p-5 pr-8 bg-white rounded-md"
                style={{
                    top: `calc(${focusPoint.top - focusPoint.size / 2}px - 2rem)`,
                    left: `calc(${focusPoint.left + focusPoint.size}px + 3rem)`,
                }}
            >
                <div className="relative z-10">
                    <h4 className="font-semibold text-lg mb-2">{title}</h4>
                    <p className="text-sm mb-4 text-gray-500">{description}</p>
                    <SystemButton onClick={() => handleOnClose()}>Verstanden</SystemButton>
                </div>
                <div className="absolute top-1.5 right-1.5 text-gray-500">
                    <button className="p-1" onClick={() => handleOnClose()}>
                        <X size={18} />
                    </button>
                </div>
                <div className="w-10 h-10 bg-white absolute -left-5 top-1/2 -translate-y-1/2 rotate-45 rounded-bl z-0"></div>
            </div>
        </div>
    );
};

export default TutorialOverlay;
