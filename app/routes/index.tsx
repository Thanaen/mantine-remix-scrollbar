import {
  Text,
  Stack,
  ScrollArea as MantineScrollArea,
  Box,
} from "@mantine/core";
import RadixScrollArea from "../component/RadixScrollArea";

export default function Index() {
  return (
    <>
      <Box id="radix-scrollbar" bg="green.1">
        <RadixScrollArea>
          <Stack align="center" mt={50} h="100vh">
            <Text size="xl" weight={500}>
              ScrollArea imported from @radix-ui/react-scroll-area (v1.0.2)
            </Text>
            <Text>
              The ScrollArea component is visible in dev and in build mode! 🎉
            </Text>
            <Text>
              I've copy-pasted the code from{" "}
              <a
                href="https://codesandbox.io/p/sandbox/bnoymn?file=/App.jsx"
                target="_blank"
                rel="noreferrer"
              >
                this codesandbox
              </a>{" "}
              to setup the ScrollArea.
            </Text>
          </Stack>
        </RadixScrollArea>
      </Box>
      <Box id="mantine-scrollbar" bg="red.1">
        <MantineScrollArea h="50vh">
          <Stack align="center" mt={50} h="100vh">
            <Text size="xl" weight={500}>
              ScrollArea imported from @mantine/core (v5.10.3)
            </Text>
            <Text>
              The ScrollBar component is visible in dev, but not in build mode.
              😞
            </Text>
          </Stack>
        </MantineScrollArea>
      </Box>
    </>
  );
}
