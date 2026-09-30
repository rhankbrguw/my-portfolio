"use client";

import React, { useState } from "react";
import { useWindowManager } from "@/hooks/useWindowManager";
import { appMetadataList } from "@/constants/tokens";
import { DesktopIcon } from "./DesktopIcon";
import { WindowFrame } from "./WindowFrame";
import { Taskbar } from "./Taskbar";
import { StartMenu } from "./StartMenu";
import { DesktopCanvas } from "./DesktopCanvas";
import { DesktopDecor } from "./DesktopDecor";
import { TopCyberNavbar } from "./TopCyberNavbar";
import { Slide3DExhibit } from "./Slide3DExhibit";
import { RetroPlayerWidget } from "./RetroPlayerWidget";
import { SystemGaugeWidget } from "./SystemGaugeWidget";
import { WorldClockBar } from "./WorldClockBar";
import { VirusPopups } from "./VirusPopups";
import { PhishingGimmick } from "./PhishingGimmick";
import { RetroGazetteNews } from "./RetroGazetteNews";
import { RetroTipOfTheDay } from "./RetroTipOfTheDay";
import { RetroShutdownScreen } from "./RetroShutdownScreen";
import { RetroRunDialog } from "./RetroRunDialog";
import { AlertModal } from "./AlertModal";
import { ComputerIcon, FolderIcon, HardwareIcon, MailIcon, FloppyIcon } from "./RetroIcons";
import { AboutApp } from "../apps/AboutApp";
import { ProjectsApp } from "../apps/ProjectsApp";
import { SkillsApp } from "../apps/SkillsApp";
import { ContactApp } from "../apps/ContactApp";
import { EasterEggApp } from "../apps/EasterEggApp";
import { AppId } from "@/types/os";

const ICONS: Record<AppId, React.ReactNode> = {
  about: <ComputerIcon size={32} />, projects: <FolderIcon size={32} />,
  skills: <HardwareIcon size={32} />, contact: <MailIcon size={32} />,
  easteregg: <FloppyIcon size={32} />,
};

export const DesktopWorkspace: React.FC = () => {
  const { windows, activeAppId, openApp, closeApp, minimizeApp, toggleMaximizeApp, focusApp } =
    useWindowManager();
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isSlide3DOpen, setIsSlide3DOpen] = useState(false);
  const [virusTrigger, setVirusTrigger] = useState(0);
  const [isTipsOpen, setIsTipsOpen] = useState(true);
  const [isShutDown, setIsShutDown] = useState(false);
  const [isRunOpen, setIsRunOpen] = useState(false);
  const [alertInfo, setAlertInfo] = useState<{ isOpen: boolean; title: string; message: string; tip?: string }>({
    isOpen: false, title: "", message: "",
  });

  const showAlert = (title: string, message: string, tip?: string) => {
    setAlertInfo({ isOpen: true, title, message, tip });
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    if (el.closest("#start-menu-panel") || el.closest("#taskbar-start-button")) return;
    setIsStartOpen(false);
  };

  const renderAppContent = (id: AppId) => {
    if (id === "about") return <AboutApp onOpenProjects={() => openApp("projects")} />;
    if (id === "projects") return <ProjectsApp />;
    if (id === "skills") return <SkillsApp onClose={() => closeApp("skills")} />;
    if (id === "contact") return <ContactApp />;
    return <EasterEggApp />;
  };

  return (
    <div onClick={handleDesktopClick} className="relative h-[100dvh] w-full overflow-hidden bg-[#000000] select-none">
      <DesktopCanvas />
      <DesktopDecor onOpenProjects={() => openApp("projects")} />

      <div className="absolute top-0 left-0 right-0 z-30">
        <TopCyberNavbar onOpenApp={openApp} onOpenSlide3D={() => setIsSlide3DOpen(true)} onTriggerVirus={() => setVirusTrigger((c) => c + 1)} />
      </div>

      <WorldClockBar />
      <RetroPlayerWidget />
      <SystemGaugeWidget />

      <div className="absolute top-9 sm:top-10 left-1.5 sm:left-3 z-10 flex flex-col gap-1 sm:gap-1.5 pointer-events-auto">
        {appMetadataList.map((app) => (
          <DesktopIcon key={app.id} id={app.id} label={app.iconLabel} icon={ICONS[app.id]} onOpen={() => openApp(app.id)} />
        ))}
        <DesktopIcon id="slide3d" label="3D Exhibit" icon={<ComputerIcon size={32} />} onOpen={() => setIsSlide3DOpen(true)} />
      </div>

      <div className="absolute inset-0 pt-7 pb-9 overflow-hidden pointer-events-none">
        {appMetadataList.map((app) => (
          <div key={app.id} className="pointer-events-auto">
            <WindowFrame
              app={app} state={windows[app.id]} isFocused={activeAppId === app.id}
              onFocus={() => focusApp(app.id)} onClose={() => closeApp(app.id)}
              onMinimize={() => minimizeApp(app.id)} onToggleMaximize={() => toggleMaximizeApp(app.id)}
              onShowInfo={showAlert}
            >
              {renderAppContent(app.id)}
            </WindowFrame>
          </div>
        ))}
      </div>

      <Slide3DExhibit isOpen={isSlide3DOpen} onClose={() => setIsSlide3DOpen(false)} />
      <VirusPopups triggerCount={virusTrigger} />
      <PhishingGimmick onClaim={() => openApp("projects")} />
      <RetroGazetteNews onOpenProjects={() => openApp("projects")} onOpenAbout={() => openApp("about")} />
      <RetroTipOfTheDay isOpen={isTipsOpen} onClose={() => setIsTipsOpen(false)} />
      <RetroShutdownScreen isOpen={isShutDown} onRestart={() => setIsShutDown(false)} />
      <RetroRunDialog
        isOpen={isRunOpen} onClose={() => setIsRunOpen(false)} onOpenApp={openApp}
        onTriggerVirus={() => setVirusTrigger((c) => c + 1)} onOpenSlide3D={() => setIsSlide3DOpen(true)}
        onCommandError={(cmd) => showAlert("COMMAND NOT FOUND", `Cannot find '${cmd}'. Make sure you typed the name correctly.`, "Valid commands: about, projects, skills, contact, 3d, virus")}
      />
      <AlertModal isOpen={alertInfo.isOpen} title={alertInfo.title} message={alertInfo.message} tip={alertInfo.tip} onClose={() => setAlertInfo((p) => ({ ...p, isOpen: false }))} />

      <StartMenu
        isOpen={isStartOpen} onClose={() => setIsStartOpen(false)} onOpenApp={openApp}
        onResetLayout={() => openApp("about")} onOpenNotice={() => setIsSlide3DOpen(true)}
        onOpenTips={() => setIsTipsOpen(true)} onOpenRun={() => setIsRunOpen(true)} onShutDown={() => setIsShutDown(true)}
      />

      <Taskbar
        windows={windows} activeAppId={activeAppId} isStartOpen={isStartOpen} onToggleStart={() => setIsStartOpen((prev) => !prev)}
        onSelectApp={(id) => { if (windows[id].isMinimized || activeAppId !== id) { focusApp(id); } else { minimizeApp(id); } }}
      />
    </div>
  );
};
