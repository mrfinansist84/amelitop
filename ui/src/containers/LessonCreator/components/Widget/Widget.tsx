import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Video } from '../';
import './Widget.scss';

interface IProps {
  deleteItem: (id: string) => void;
  element: any;
  elementId: string;
  handleElementChange: (state: any, elementId: string) => void;
  editMode: boolean;
}

const WidgetComponent = (props: IProps) => {
  const { element, elementId, editMode } = props;
  const [state, setState] = useState(element);

  const handleElementChange = () => {
    props.handleElementChange(state, elementId);
  };

  const handleChange = (e: any, field: string) => {
    setState({
      ...state,
      [field]: e.target.value
    })
  };

  const getElement = () => {
    let result;

    // if (element.type === 'text') {
    //   result = (<Text {...props} />);
    // };

    if (element.type === 'video') {
      result = (<Video
        editMode={editMode}
        state={state}
        handleChange={handleChange}
        handleElementChange={handleElementChange}
        />
      )
    };

    // if (element.type === 'picture') {
    //   result = (<Picture {...props} />);
    // }

    return result;
  };

  return (
    <Card className="widget-container">
      <Card.Header>
        <div className='card-header-container' id={String(elementId)}>
          <span>Element №{element.index}</span>
          <Button variant="outline-danger" onClick={() => props.deleteItem(elementId)}>Delete</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="element">
          <section className="element__body">
            { getElement() }
          </section>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WidgetComponent;
