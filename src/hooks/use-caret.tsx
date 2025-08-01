import { useCallback, useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export function useCaret() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  function getCaretPosition(node: HTMLDivElement) {
    if (!window) {
      return position;
    }

    const selection = window.getSelection();

    // If there's no selection range, return
    if (!selection?.rangeCount) {
      return position;
    }
    // Make sure the selection is in the node
    if (!selection.anchorNode?.parentElement?.isEqualNode(node)) {
      return position;
    }

    // Current range
    const rangeClone = selection.getRangeAt(0).cloneRange();
    rangeClone.collapse(true); // collapse to the start of the range

    // Get the bounding rect of the range (caret position)
    const rangeRect = rangeClone.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    // Calculate the position of the caret
    const x = rangeRect.left - nodeRect.left;
    const y = rangeRect.top - nodeRect.top;

    return { x, y };
  }

  const updatePosition = useCallback(() => {
    const node = ref.current;
    if (!node || !window) return;

    const position = getCaretPosition(node);
    setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !window) return;

    window.addEventListener("resize", updatePosition);
    document.addEventListener("selectionchange", updatePosition);

    const handleBeforeInput = (e: InputEvent) => {
      const { inputType } = e;

      switch (inputType) {
        case "insertParagraph":
        case "formatBold":
        case "formatItalic":
        case "formatUnderline":
        case "formatStrikethrough":
        case "formatSuperscript":
        case "formatSubscript":
        case "formatAlignLeft":
        case "formatAlignCenter":
        case "formatAlignRight":
        case "formatAlignJustify":
        case "formatIndent":
        case "formatOutdent":
        case "formatListBulleted":
        case "insertLineBreak":
          e.preventDefault();
          return;

        case "deleteWordBackward":
        case "deleteWordForward":
        case "deleteWord":
        case "insertText":
        case "insertFromPaste":
        case "insertFromDrop":
        case "insertFromYank":
        case "insertFromCut":
        case "insertFromLineBreak":
        case "insertFromSelect":
        case "insertFromSelectMany":
        case "insertFromSelectMany":
          updatePosition();
          return;
      }
    };
    node.addEventListener("beforeinput", handleBeforeInput);

    return () => {
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("selectionchange", updatePosition);
      node.removeEventListener("beforeinput", handleBeforeInput);
    };
  }, [updatePosition]);

  return { position, ref, updatePosition };
}
