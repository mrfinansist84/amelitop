import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

import { Video } from '../';
import './Widget.scss';
import { useSelector, useDispatch } from 'react-redux';
import { type IRootReducer } from '~/rootReducer';
import { setWidgetsList } from '../../actions';

interface IProps {
  deleteItem: (id: string) => void;
  element: any;
  editMode: boolean;
}

const WidgetComponent = (props: IProps) => {
  const dispatch = useDispatch();
  const widgetsList: any[] = useSelector(
    (state: IRootReducer) => state.lessonCreatorReducer.widgetsList);
  const { element, editMode, deleteItem } = props;
  const [state, setState] = useState(element);

  React.useEffect(() => {
    const updatedList = structuredClone(widgetsList);
    const targetElementIndex = widgetsList.findIndex(item => item.elementId === element.elementId);

    setState(updatedList[targetElementIndex] || element)
  }, []);

  const handleChange = (e: any, field: string) => {
    const updatedState = {
      ...state,
      [field]: e.target.value
    }
    setState({
      ...updatedState
    });

    handleElementChange(updatedState);
  };

  const handleElementChange = (state: any) => {
    const updatedList = structuredClone(widgetsList);
    const targetElementIndex = widgetsList.findIndex(item => item.elementId === element.elementId);

    if (targetElementIndex === -1) {
      updatedList.push(state);
    } else {
      updatedList[targetElementIndex] = {
        ...updatedList[targetElementIndex],
        ...state
      };
    }

    dispatch(setWidgetsList(updatedList));
  };

  const getElement = () => {
    let result;

    // if (element.type === 'text') {
    //   result = (<Text {...props} />);
    // };

    if (element.type === 'video') {
      result = (<Video
        editMode={editMode}
        handleChange={handleChange}
        state={state}
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
        <div className='card-header-container' id={String(element.elementId)}>
          <span>Element {element.type}</span>
          <Button variant="outline-danger" onClick={() => deleteItem(element.elementId)}>Delete</Button>
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
