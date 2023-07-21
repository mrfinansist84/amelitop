import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Text, Video, Picture } from '../';
import './Widget.scss';

interface IProps {
  deleteItem: (id: string) => void;
  element: any;
  elementId: string;
}

const WidgetComponent = (props: IProps) => {
  const { element, elementId } = props;

  const getElement = () => {
    let result;

    if (element.type === 'text') {
      result = <Text {...element} />;
    }

    if (element.type === 'video') {
      result = <Video {...element} />;
    }

    if (element.type === 'picture') {
      result = <Picture {...element} />;
    }

    return result;
  };

  return (
    <Card className="widget-container">
      <Card.Header>
        <div className="card-header-container" id={String(elementId)}>
          <span>{element.type}</span>
          <Button variant="outline-danger" onClick={() => props.deleteItem(elementId)}>
            Delete
          </Button>
        </div>
      </Card.Header>
      <Card.Body>{getElement()}</Card.Body>
    </Card>
  );
};

export default WidgetComponent;
