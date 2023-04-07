import Editor, { OnMount } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import React from "react";

function MonacoEditor({
  editorRef,
}: {
  editorRef: React.MutableRefObject<null | monaco.editor.IStandaloneCodeEditor>;
}) {
  const handleEditorMount: OnMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <Editor
        height="50vh"
        width="50vw"
        defaultLanguage="python"
        onMount={handleEditorMount}
        defaultValue={`print("Hello World")`}
        theme="vs-dark"
      />
    </div>
  );
}

export default MonacoEditor;
