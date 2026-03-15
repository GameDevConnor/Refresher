import { Box } from "@chakra-ui/react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeNode } from "@lexical/code";
import { css } from "@emotion/css";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";

function Section() {
  function onError(error: Error) {
    console.error(error);
  }

  const initialConfig = {
    namespace: "MyEditor",
    theme: {},
    onError: onError,
    nodes: [HeadingNode, QuoteNode, CodeNode],
  };

  return (
    <Box>
      <LexicalComposer initialConfig={initialConfig}>
        <Box
          className={css({
            position: "relative",
          })}
        >
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className={css({
                  height: 120,
                  fontSize: 12,
                  padding: 8,
                  overflow: "auto",
                  outline: "none",
                  border: "1px solid black",
                  borderRadius: "4px",
                })}
              />
            }
            placeholder={
              <Box
                className={css({
                  position: "absolute",
                  top: 8,
                  left: 8,
                  color: "#999",
                })}
              >
                Enter some text...
              </Box>
            }
            ErrorBoundary={LexicalErrorBoundary}
          ></RichTextPlugin>
        </Box>
        <AutoFocusPlugin />
      </LexicalComposer>
    </Box>
  );
}

export default Section;
