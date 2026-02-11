import Link from "next/link"
import { Box, Button, Stack } from "@fidely-ui/react"
import { css } from "@fidely-ui/styled-system/css"

import { ColorModeButton } from "~/components/color-mode-button"
import { MenuLink } from "~/constant/menu-links"

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

export const Drawer = (props: DrawerProps) => {
  const { isOpen, closeDrawer } = props

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <Box
        className={css({
          position: "fixed",
          inset: 0,
          bg: "black/40",
          backdropFilter: "blur(6px)",
          zIndex: 40,
        })}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <Box
        className={css({
          position: "fixed",
          top: 0,
          right: 0,
          width: "70%",
          height: "100%",
          bg: "bg.default",
          p: "20px",
          zIndex: 50,
          boxShadow: "xl",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transform: "translateX(0)",
          transition: "transform 0.25s ease",
        })}
      >
        <Stack gap="4">
          {MenuLink.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              color="fg.default"
              size="sm"
              asChild
              onClick={props.closeDrawer}
            >
              <Link href={link.link}>
                {link.name}
              </Link>
            </Button>
          ))}
        </Stack>

        <Box mt="auto" pt="20px">
          <ColorModeButton />
        </Box>
      </Box>
    </>
  );
};
