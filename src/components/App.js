import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import Annotation from "./Annotation";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  let annotate = true;

  if (html !== "" || css !== "" || js !== "") {
    annotate = false;
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script> ${js} </script>
      </body>
      </html>
    `);
    }, 950);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JAVASCRIPT"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane bottom-pane">
        {annotate ? <Annotation /> : ""}

        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
