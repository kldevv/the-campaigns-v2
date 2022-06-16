import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { routes } from "routes/routes";
import { Icon, Menu } from "semantic-ui-react";
import { Logo } from "^@components/common";
import { WalletButton } from "^@containers/common";
import { color, font } from "^@styles/global";

export const Header = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  interface MenuButtonProps {
    /**
     * Url on to direct on click.
     */
    href: string;
    /**
     * Content to show on the button.
     */
    content: string;
  }

  const CustomizedMenuItem = ({ href, content }: MenuButtonProps) => {
    const onSwitchItem = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      router.push(href);
    }, []);

    const selected = router.pathname.startsWith(href);

    return (
      <Menu.Item
        active={selected}
        content={content}
        onClick={onSwitchItem}
        style={{
          border: "1px solid rgb(4, 17, 29)",
          borderColor: color["dark-purple"],
          borderWidth: "0.25em",
          ...(selected
            ? { borderStyle: "none none solid none" }
            : { borderStyle: "none none none none" }),
          fontSize: "15px",
          fontFamily: font.poppins,
          fontWeight: "bold",
          backgroundColor: color.white,
          ...(selected
            ? { color: color["dark-purple"] }
            : { color: color["dark-grey"] }),
        }}
      />
    );
  };

  return (
    <Menu
      borderless
      size="huge"
      tabular
      fixed="top"
      style={{
        borderRadius: "0px",
        backgroundColor: color.white,
        marginBottom: "1rem",
        boxShadow: "1px 1px 15px rgb(150, 150, 150, 0.3) !important",
        fontFamily: font.poppins,
        zIndex: "200000",
      }}
    >
      <Link href="/">
        <Menu.Item>
          <Logo variant="dark" />
        </Menu.Item>
      </Link>
      {/* {walletStatus === "connected" ? (
        <Menu.Item
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "10px",
            fontWeight: "bold",
            color: chainIDNameEnum[chainID]
              ? "rgb(95, 95, 95)"
              : "rgb(195, 195, 195)",
          }}
        >
          <Icon
            name="circle"
            style={{
              color:
                chainIDNameEnum[chainID] === "Rinkeby"
                  ? "rgb(246,195,67)"
                  : chainIDNameEnum[chainID] === "Ropsten"
                  ? "rgb(255,75,141)"
                  : "rgb(195, 195, 195)",
            }}
          />
          {chainIDNameEnum[chainID]
            ? `${chainIDNameEnum[chainID]} Test Network`
            : "Not Supported Network"}
        </Menu.Item>
      ) : null} */}
      <Menu.Menu position="right">
        <CustomizedMenuItem
          content={t("layout.header.menuItems.explore")}
          href={routes.common.explore}
        />
        <CustomizedMenuItem
          content={t("layout.header.menuItems.create")}
          href={routes.common.create}
        />
        <CustomizedMenuItem
          content={t("layout.header.menuItems.about")}
          href={routes.common.about}
        />
        <Menu.Item>
          <span>
            <WalletButton size="small" />
          </span>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            href={routes.external.github}
            rel="noopener noreferrer"
          >
            <Icon name="github" size="large" color="black" />
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
