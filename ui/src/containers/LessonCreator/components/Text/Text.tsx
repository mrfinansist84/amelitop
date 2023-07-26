import * as React from 'react';
import { useState, useEffect } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromHTML, convertToHTML } from 'draft-convert';
import Row from 'react-bootstrap/Row';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Text.scss';

interface IProps {
  state: any;
  editMode: boolean;
  handleChange: any;
}

const Text = (props: IProps) => {
  const { state, handleChange, editMode } = props;
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromHTML(state.text as string)));

  useEffect(() => {
    const html = convertToHTML(editorState.getCurrentContent());
    handleChange({ target: { value: html } }, 'text');
  }, [editorState]);

  return (
    <>
      {editMode && (
        <>
          <Row>
            <label className='form-control-labels'>
              Element`s Title
              <input
                value={state.title}
                type="text"
                className="form-control"
                placeholder="Enter title of the element"
                onChange={(e) => handleChange(e, 'title')} />
            </label>
          </Row>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={{
              options: ['inline', 'blockType', 'list'],
              inline: { inDropdown: false, options: ['bold', 'italic', 'underline'] },
              list: { inDropdown: false, options: ['unordered', 'ordered'] },
              blockType: { inDropdown: false, options: ['Normal', 'H1', 'H2', 'H6'] }
            }}
          />
        </>
      )}

      {!editMode && (
        <>
        <h2 className="element__title">{state.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: state.text }} />
      </>
      )}
    </>
  );
};

export default Text;
