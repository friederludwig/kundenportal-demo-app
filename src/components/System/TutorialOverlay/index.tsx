import { FC } from "preact/compat";
import { useState } from "react";
import { X } from "react-feather";
import { PageRoutes, useRouterStore } from "../../../lib/store/router.store";
import SystemButton from "../Button";
import { XyzTransition } from "@animxyz/react";

interface TutorialOverlayProps {
  title?: string;
  description?: string;
  tooltip?: {
    arrow?: "top" | "bottom";
    top?: string;
    left?: string;
    icon?: JSX.Element;
  };
  clipPath?: string;
  clipHeight?: string;
  forPage?: PageRoutes;
}

const TutorialOverlay: FC<TutorialOverlayProps> = ({
  title,
  description,
  tooltip,
  forPage,
  clipPath,
  clipHeight,
}) => {
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
    <div className="absolute top-0 left-0 z-30 w-full h-full bg-black/60">
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          clipPath: clipPath,
          height: clipHeight || "900px",
          backdropFilter: "brightness(180%)",
        }}
      ></div>
      <XyzTransition appear xyz="fade">
        <div
          className="absolute max-w-[520px] p-6 pr-8 bg-white rounded-md"
          style={{
            top: tooltip?.top || "40%",
            left: tooltip?.left || "40%",
          }}
        >
          <div className="relative z-10">
            <h4 className="flex items-center gap-3 mb-3 text-lg font-semibold">
              {tooltip.icon && (
                <div className="p-1.5 rounded bg-primary-50 text-primary-300">
                  {tooltip.icon}
                </div>
              )}
              {title}
            </h4>
            <p className="mb-5 text-sm text-gray-500">{description}</p>
            <SystemButton onClick={() => handleOnClose()}>Alles klar!</SystemButton>
          </div>
          <div className="absolute text-gray-400 top-2 right-2">
            <button className="p-1" onClick={() => handleOnClose()}>
              <X size={20} />
            </button>
          </div>
          <div
            className={`${
              tooltip?.arrow === "top" ? "-top-4 rounded-tl" : "-bottom-4 rounded-br"
            } 
          absolute z-0 w-8 h-8 rotate-45 -translate-x-1/2 bg-white left-1/2`}
          ></div>
        </div>
      </XyzTransition>
    </div>
  );
};

export default TutorialOverlay;
