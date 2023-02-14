import { Text, Button, Stack, ScrollArea } from "@mantine/core";

export default function Index() {
  return (
    <ScrollArea h="100vh">
      <Stack align="center" mt={50} h="120vh">
        <Text size="xl" weight={500}>
          Welcome to Mantine!
        </Text>
        <Text>
          The ScrollBar component is visible in dev, but not in build mode. 😞
        </Text>
        <Button>Click the button</Button>
      </Stack>
    </ScrollArea>
  );
}
