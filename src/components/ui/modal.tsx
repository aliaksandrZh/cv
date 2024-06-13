"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  BehaviorSubject,
  delay,
  filter,
  of,
  pairwise,
  switchMap,
  tap,
} from "rxjs";

const useModalAnimationRx = (show: boolean) => {
  const { current: show$ } = useRef(new BehaviorSubject<boolean>(false));
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [styles, setStyles] = useState("");

  useEffect(() => {
    const s$ = show$
      .pipe(
        pairwise(),
        filter(([prev, cur]) => prev !== cur),
        switchMap(([prev, cur]) =>
          cur
            ? of(cur).pipe(
                tap(() => setIsVisible(true)),
                delay(1000),
                tap(() =>
                  setStyles("scale-x-0 scale-y-[0.01] animate-unfoldIn"),
                ),
              )
            : of(cur).pipe(
                tap(() => setStyles("scale-100 animate-unfoldOut")),
                delay(1500),
                tap(() => setIsVisible(false)),
                tap(() => setStyles("")),
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
  children: any;
}) => {
  const { isVisible, styles } = useModalAnimationRx(show);

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
              "fixed left-0 top-0 z-20 table h-full w-full scale-0",
              "text-white",
              styles,
            )}
          >
            <div
              className={cn(
                "modal-background bg-black-light top-2/3 table-cell text-center align-middle",
              )}
            >
              <div className="modal relative flex h-full w-full items-center justify-center rounded-[3px] p-[50px] font-light">
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
