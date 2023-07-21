import * as React from 'react';
import Row from 'react-bootstrap/Row';

import './Video.scss';

interface IProps {
  state: any;
  handleElementChange: () => void;
  editMode: boolean;
  handleChange: any;
}

const Video = (props: IProps) => {
  const { state, handleElementChange, handleChange, editMode } = props;

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
                onBlur={handleElementChange}
                placeholder="Enter title of the element"
                onChange={(e) => handleChange(e, 'title')} />
            </label>
          </Row>
          <Row>
            <label className='form-control-labels'>
              Video`s Link
              <input
                value={state.link}
                type="text"
                className="form-control"
                onBlur={handleElementChange}
                onChange={(e) => handleChange(e, 'link')}
                placeholder="Enter link to the video" />
            </label>
          </Row>
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

export default Video;
