export type AppId = "about" | "projects" | "skills" | "contact" | "easteregg";

export interface AppMetadata {
  readonly id: AppId;
  readonly title: string;
  readonly iconLabel: string;
  readonly filename: string;
  readonly defaultSize: { readonly width: number; readonly height: number };
  readonly defaultPosition: { readonly x: number; readonly y: number };
}

export interface WindowState {
  readonly id: AppId;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
}

export type SoundEffect = "click" | "chord" | "blip" | "error" | "minimize";

export interface StartMenuItem {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
  readonly onClick: () => void;
  readonly isDivider?: boolean;
}
