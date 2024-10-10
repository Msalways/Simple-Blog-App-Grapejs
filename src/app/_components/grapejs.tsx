import React from "react";
import { GrapesjsReact } from "grapesjs-react";
import type GrapesJS from "grapesjs";
import gjsNewsLetter from "grapesjs-preset-newsletter";
import gjsPostCssParser from "grapesjs-parser-postcss";
// @ts-ignore
import gjsTailwind from "grapesjs-tailwind";
import "grapesjs/dist/css/grapes.min.css";

interface GrapeJsProps {
  html?: string;
  style?: string;
  onInit?: (editor: GrapesJS.Editor) => void;
}

function Grapejs(props: GrapeJsProps) {
  function myPlugin(editor: GrapesJS.Editor) {
    // Use the API: https://grapesjs.com/docs/api/
    editor.Blocks.add("my-first-block", {
      label: "Simple block",
      content: '<div class="my-block">This is a simple block</div>',
      category: "My Plugin",
    });
  }
  return (
    <GrapesjsReact
      id="grapesjs-react"
      onInit={props.onInit}
      plugins={[gjsNewsLetter, gjsPostCssParser, gjsTailwind, myPlugin]}
    ></GrapesjsReact>
  );
}

export default Grapejs;
