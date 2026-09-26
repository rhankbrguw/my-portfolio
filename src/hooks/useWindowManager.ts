"use client";

import { useState, useCallback } from "react";
import { AppId, WindowState } from "@/types/os";
import { appMetadataList } from "@/constants/tokens";
import { soundService } from "@/services/soundService";

const createInitialWindows = (): Record<AppId, WindowState> => {
  const initial: Partial<Record<AppId, WindowState>> = {};
  appMetadataList.forEach((app, index) => {
    initial[app.id] = {
      id: app.id,
      isOpen: app.id === "about",
      isMinimized: false,
      isMaximized: false,
      zIndex: app.id === "about" ? 50 : 10 + index,
      position: { x: app.defaultPosition.x, y: app.defaultPosition.y },
    };
  });
  return initial as Record<AppId, WindowState>;
};

export function useWindowManager() {
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(createInitialWindows);
  const [activeAppId, setActiveAppId] = useState<AppId | null>("about");
  const [maxZIndex, setMaxZIndex] = useState<number>(55);

  const focusApp = useCallback((id: AppId) => {
    setActiveAppId(id);
    setMaxZIndex((prevZ) => {
      const nextZ = prevZ + 1;
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], isMinimized: false, zIndex: nextZ },
      }));
      return nextZ;
    });
  }, []);

  const openApp = useCallback((id: AppId) => {
    soundService.play("chord");
    setActiveAppId(id);
    setMaxZIndex((prevZ) => {
      const nextZ = prevZ + 1;
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: nextZ },
      }));
      return nextZ;
    });
  }, []);

  const closeApp = useCallback((id: AppId) => {
    soundService.play("click");
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
    setActiveAppId((current) => (current === id ? null : current));
  }, []);

  const minimizeApp = useCallback((id: AppId) => {
    soundService.play("minimize");
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
    setActiveAppId((current) => (current === id ? null : current));
  }, []);

  const toggleMaximizeApp = useCallback((id: AppId) => {
    soundService.play("click");
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
    }));
  }, []);

  return {
    windows,
    activeAppId,
    openApp,
    closeApp,
    minimizeApp,
    toggleMaximizeApp,
    focusApp,
  };
}
