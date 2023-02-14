// Based on the example here: https://www.radix-ui.com/docs/primitives/components/scroll-area
import * as ScrollArea from "@radix-ui/react-scroll-area";
import type { ReactNode } from "react";

interface RadixScrollAreaProps {
  children: ReactNode;
}
const RadixScrollArea = ({ children }: RadixScrollAreaProps) => {
  return (
    <ScrollArea.Root className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};

export default RadixScrollArea;
