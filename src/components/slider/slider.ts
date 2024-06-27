import { theme, themes } from "../../state";

export type SliderSettings = {
  bgColorHoverToken: `--${string}`;
  bgColorToken: `--${string}`;
  borderColorToken: `--${string}`;
  borderColorHoverToken: `--${string}`;
  borderRadius: `--${string}`;
  borderWidth: `--${string}`;
  colorHoverToken: `--${string}`;
  colorToken: `--${string}`;
};

export const DEFAULT_SLIDER_SETTINGS: SliderSettings = {
  bgColorHoverToken: "--background-100",
  bgColorToken: "--background-100",
  borderColorToken: "--foreground-100",
  borderColorHoverToken: "--foreground-200",
  borderRadius: "--border-radius-500",
  borderWidth: "--border-width-100",
  colorHoverToken: "--foreground-500",
  colorToken: "--foreground-500",
};

export const sliderStyleSheet = new CSSStyleSheet();

export const renderSliderStyleSheet = () => {
  const settings = theme.get() !== "none" ? themes.get()[theme.get()].slider : DEFAULT_SLIDER_SETTINGS;

  return sliderStyleSheet.replaceSync(`
.slider { 
  --slider-bg-color: var(${settings.bgColorToken}, black);
  --slider-bg-color-hover: var(${settings.bgColorHoverToken}, rgba(0, 0, 0, 0.1));
  --slider-border-color: var(${settings.borderColorToken}, black);
  --slider-border-radius: ${settings.borderRadius}ch;
  --slider-border-width: ${settings.borderWidth}ch;
  --slider-color: var(${settings.colorToken}, white);
  --slider-color-hover: var(${settings.colorHoverToken}, black);
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  background: var(--slider-bg-color);
  border-radius: var(--slider-border-radius);
  height: 20px;
  width: 100%;
}

.slider:hover {
  background: var(--slider-bg-color-hover);
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--slider-color);
  cursor: pointer;
}

.slider::-webkit-slider-thumb:hover {
  background: var(--slider-color-hover);
}
`);
};
