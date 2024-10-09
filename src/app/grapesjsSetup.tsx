"use client";
import React, { useState } from "react";
import type GrapesJs from "grapesjs";
import Grapejs from "./_components/grapejs";

function GrapesjsSetup() {
  const [editor, setEditor] = useState<GrapesJs.Editor | null>(null);

  const initGrapesJs = (editor: GrapesJs.Editor) => {
    console.log(editor);
    setEditor(editor);
  };

  const saveEditor = () => {
    console.log(editor?.getHtml());
    console.log(editor?.getCss());
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      {/* Toolbar with Save Button */}
      <div className="flex items-center justify-between bg-gray-800 p-4 shadow-lg">
        <h1 className="text-lg font-bold text-white"></h1>
        <button
          className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
          onClick={saveEditor}
        >
          Save
        </button>
      </div>

      {/* GrapeJS Editor */}
      <div className="flex-grow overflow-auto bg-gray-100 p-4">
        <div className="h-full rounded-lg border border-gray-300">
          <Grapejs onInit={initGrapesJs} />
        </div>
      </div>
    </div>
  );
}

export default GrapesjsSetup;
