import * as React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './Text.scss';

interface IProps {
  state: any;
  handleElementChange: () => void;
  editMode: boolean;
  handleChange: any;
}

const Text = (props: IProps) => {
  const { state, handleElementChange, handleChange, editMode } = props;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <>
      {editMode && (
        <>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              toolbar={{
                options: ['inline', 'fontSize', 'list', 'colorPicker'],
                inline: { inDropdown: false, options: ['bold', 'italic', 'underline'] },
                list: { inDropdown: false, options: ['unordered', 'ordered'] },
                fontSize: { inDropdown: true, options: [10, 11, 12, 14, 16, 18] },
                colorPicker: {
                  inDropdown: true,
                  colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
                    'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
                    'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                    'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
                    'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
                    'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)']
                }
              }}
            />
        </>
      )}

      {!editMode && (
        <>
        <h2 className="element__title">{state.title}</h2>
        <iframe
          width="100%"
          height="720"
          src={state.link}
          title={state.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
      </iframe>
      </>)}
    </>
  );
};

export default Text;
