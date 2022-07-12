import { PancakeTheme } from "@pancakeswap/uikit";
import type {} from "styled-jsx";
import { useMemo } from "react";
import { darkTheme, lightTheme } from "./theme";

export const STARGATE_JS = {
  src: "https://unpkg.com/@layerzerolabs/stargate-ui@0.0.25-testnet.3/element.js",
  integrity: "sha384-K8N0WDxN1yeS55ZRa8OaJADDBITp4qyMoG0r1hKKTTZ++GgTFnUweuM0qLWreE25",
};

const stringDarkTheme = JSON.stringify(darkTheme);
const stringLightTheme = JSON.stringify(lightTheme);

export const StargateWidget = ({ theme }: { theme: PancakeTheme }) => {
  const widgetTheme = useMemo(() => {
    return theme.isDark ? stringDarkTheme : stringLightTheme;
  }, [theme]);

  return (
    <>
      <style jsx global>{`
        .MuiScopedCssBaseline-root {
          background-color: transparent !important;
        }
        .StgHeader {
          border-bottom: 1px solid ${theme.colors.cardBorder} !important;
        }
        .MuiScopedCssBaseline-root .StgMaxButton {
          border-color: ${theme.colors.primary}!important;
          background-color: transparent;
        }
        .MuiFormLabel-root.Mui-focused {
          color: ${theme.colors.text} !important;
        }
      `}</style>
      {/* @ts-ignore */}
      <stargate-widget
        partnerId="105"
        feeCollector="0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6"
        theme={widgetTheme}
        tenthBps={0.4}
      />
    </>
  );
};
