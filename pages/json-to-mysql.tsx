import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import gs from "generate-schema";

export default function() {
  const transformer = useCallback(({ value }) => {
    return gs.mysql(JSON.parse(value));
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="Mongoose Schema"
      resultLanguage={"sql"}
    />
  );
}
