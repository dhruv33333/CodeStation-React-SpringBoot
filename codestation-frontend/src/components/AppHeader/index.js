import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// assets
import CodeStationLogo from "../../assets/codestation-logo.png";

// components
import { Box, Image, Text } from "@chakra-ui/react";

// styles
import { NavLink, NavLinkWrapper } from "./styled";

const navItems = [
  { label: "Explore", link: "explore", slug: "explore" },
  { label: "Problems", link: "problemset-all", slug: "problems" },
];
const AppHeader = () => {
  const { pathname } = useLocation();
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    const currentUrl = pathname.split("/")[1];
    const selectedTab = navItems.find((item) => item.link === currentUrl);
    if (selectedTab) {
      setSelectedTab(selectedTab);
    }
  }, [pathname]);

  return (
    <Box
      height="72px"
      py={2}
      px={12}
      bg="#1E2D40"
      display="flex"
      alignItems="center"
    >
      <Image src={CodeStationLogo} alt="logo" boxSize="52px" />
      <Text color="white" fontSize={20} fontWeight={500} letterSpacing={1}>
        CodeStation
      </Text>
      <Box ml={12} display="flex" gap={6}>
        {navItems.map((item) => (
          <NavLinkWrapper isActive={selectedTab?.slug === item.slug}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </NavLinkWrapper>
        ))}
      </Box>
    </Box>
  );
};

export default AppHeader;
