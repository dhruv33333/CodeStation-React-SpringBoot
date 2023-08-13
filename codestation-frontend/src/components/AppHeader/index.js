import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// assets
import CodeStationLogo from "../../assets/codestation-logo.png";

// context, hooks
import { useAppContext } from "../../contexts/AppProvider";
import { useDisclosure } from "@chakra-ui/hooks";

// components
import {
  Avatar,
  Box,
  Image,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
} from "@chakra-ui/react";

// styles
import { NavLink, NavLinkWrapper } from "./styled";

const navItems = [
  { label: "Explore", link: "/explore", slug: "explore" },
  { label: "Problems", link: "/problemset-all", slug: "problems" },
];

const AppHeader = () => {
  const { user } = useAppContext();
  const history = useHistory();
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  useEffect(() => {
    const currentUrl = pathname.split("/")[1];
    const selectedTab = navItems.find(
      (item) => item.link.split("/")[1] === currentUrl
    );
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
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Image src={CodeStationLogo} alt="logo" boxSize="52px" />
        <Text color="white" fontSize={20} fontWeight={500} letterSpacing={1}>
          CodeStation
        </Text>
      </Box>
      <Box ml={12} display="flex" gap={6}>
        {navItems.map((item) => (
          <NavLinkWrapper isActive={selectedTab?.slug === item.slug}>
            <NavLink to={item.link}>{item.label}</NavLink>
          </NavLinkWrapper>
        ))}
      </Box>

      <Box>
        <Avatar
          name={user?.name}
          src={user?.pic}
          onClick={onOpen}
          cursor="pointer"
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Profile</DrawerHeader>

            <DrawerBody>
              <Box border="1px solid #e5e5e5" borderRadius={8}>
                <Box
                  display="flex"
                  p="16px 20px"
                  gap="16px"
                  alignItems="center"
                >
                  <Avatar name={user?.name} src={user?.pic} />
                  <Text fontSize={20} fontWeight="500">
                    {user?.name}
                  </Text>
                </Box>

                <Box borderTop="1px solid #e5e5e5" p="16px 20px">
                  <Button
                    bg="#1E2D40"
                    color="white"
                    width="100%"
                    borderRadius={0}
                    _hover={{ opacity: "0.9" }}
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Button>
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
};

export default AppHeader;
