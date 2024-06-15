"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  BehaviorSubject,
  delay,
  filter,
  map,
  of,
  pairwise,
  switchMap,
  tap,
} from "rxjs";

const useModalAnimationRx = (show: boolean) => {
  const { current: show$ } = useRef(new BehaviorSubject<boolean>(false));
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [styles, setStyles] = useState({
    modal: "",
    container: "",
    bg: "",
  });

  useEffect(() => {
    const s$ = show$
      .pipe(
        pairwise(),
        filter(([prev, cur]) => prev !== cur),
        map(([prev, cur]) => cur),
        switchMap((show) =>
          show
            ? of(show).pipe(
                tap(() => setIsVisible(true)),
                delay(1000),
                tap(() =>
                  setStyles({
                    container: "scale-x-0 scale-y-[0.01] animate-unfoldIn",
                    modal: "scale-0 animate-zoomIn",
                    bg: "animate-bgIn",
                  }),
                ),
              )
            : of(show).pipe(
                tap(() =>
                  setStyles({
                    container: "scale-100 animate-unfoldOut",
                    modal: "animate-zoomOut",
                    bg: "animate-bgOut",
                  }),
                ),
                delay(1500),
                tap(() => setIsVisible(false)),
                tap(() => setStyles((s) => ({ ...s, container: "" }))),
              ),
        ),
      )
      .subscribe();
    return () => s$.unsubscribe();
  }, [show$]);

  useEffect(() => {
    show$.next(show);
  }, [show, show$]);

  return { styles, isVisible };
};

const useModalAnimation = (show: boolean) => {
  const { current: timers } = useRef<NodeJS.Timeout[]>([]);
  const [styles, setStyles] = useState("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (show === isVisible) {
      return;
    }

    if (show) {
      setIsVisible(show);
      timers.push(
        setTimeout(() => {
          setStyles("scale-x-0 scale-y-[0.01] animate-unfoldIn");
        }, 1000),
      );
      return;
    }

    setStyles("scale-100 animate-unfoldOut");
    timers.push(
      setTimeout(() => {
        setIsVisible(show);
        setStyles("");
      }, 1000),
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [show, isVisible, timers]);

  return {
    styles,
    isVisible,
  };
};

export const Modal = ({
  show,
  onCloseButtonClick,
  children,
}: {
  show: boolean;
  onCloseButtonClick: () => void;
  //TODO: FIX
  children: any;
}) => {
  const {
    isVisible,
    styles: { container, modal, bg },
  } = useModalAnimationRx(show);

  return (
    <>
      {isVisible &&
        createPortal(
          <div
            id="modal-container"
            onClick={(e) => {
              e.stopPropagation();
              onCloseButtonClick();
            }}
            className={cn(
              "fixed left-0 top-0 z-20 table h-full w-full scale-0 cursor-pointer",
              container,
            )}
          >
            <div
              className={cn(
                "modal-background h-dvh bg-black backdrop-blur-sm",
                bg,
              )}
            >
              <div
                className={cn(
                  "modal relative flex h-full w-full items-center justify-center",
                  modal,
                )}
              >
                {/* <h2 className="mb-[15px] text-[25px] leading-[25px]">
                  I`m a Modal
                </h2>
                <p className="text-lg leading-[22px]">Hear me roar.</p>
                <svg
                  className="modal-svg absolute left-0 top-0 h-full w-full rounded-[3px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <rect
                    className="stroke-white stroke-[2px]"
                    strokeDasharray="778"
                    strokeDashoffset="778"
                    x="0"
                    y="0"
                    fill="none"
                    width="226"
                    height="162"
                    rx="3"
                    ry="3"
                  ></rect>
                </svg> */}
                {children}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
