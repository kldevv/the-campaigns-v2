import useTranslation from "next-translate/useTranslation";
import { Header, Icon } from "semantic-ui-react";
import { color } from "^@styles/global";

export interface LogoProps {
  /**
   * Variant for the log color display
   */
  variant?: "dark" | "light";
  /**
   * Customized styles
   */
  styles?: object;
}

export const Logo = ({ variant = "light", styles }: LogoProps) => {
  const { t } = useTranslation("common");
  return (
    <Header
      style={{
        color: variant === "light" ? color["white"] : color["dark-purple"],
        ...styles,
      }}
    >
      <Icon
        name={variant === "light" ? "paper plane outline" : "paper plane"}
        size="large"
      />
      <Header.Content
        style={{
          color: variant === "dark" && color["black"],
        }}
      >
        {t("logo.name")}
      </Header.Content>
    </Header>
  );
};
