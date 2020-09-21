import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { ReactComponent as Compress } from "../compress.svg";
import { ReactComponent as Expand } from "../expand.svg";

export default function Editor(props) {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div class={`editor-container ${open ? "opened" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          {open ? (
            <Compress className="custom-icon" />
          ) : (
            <Expand className="custom-icon" />
          )}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
