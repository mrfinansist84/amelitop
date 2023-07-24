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
  elementId: string;
  editMode: boolean;
}

const WidgetComponent = (props: IProps) => {
  const dispatch = useDispatch();
  const widgetsList = useSelector((state: IRootReducer) => state.lessonCreatorReducer.widgetsList);
  const { element, elementId, editMode, deleteItem } = props;
  const [state, setState] = useState(element);

  React.useEffect(() => {
    const updatedList = structuredClone(widgetsList);
    const targetElementIndex = widgetsList.findIndex(item => item.elementId === elementId);
    console.log(elementId, updatedList, updatedList[targetElementIndex])
    setState(updatedList[targetElementIndex] ? updatedList[targetElementIndex] : element)
  }, [element]);

  const handleChange = (e: any, field: string) => {
    const updatedState = {
      ...state,
      [field]: e.target.value
    }
    setState({
      updatedState
    });

    handleElementChange(updatedState);
  };

  const handleElementChange = (state: any) => {
    const updatedList = structuredClone(widgetsList);
    const targetElementIndex = widgetsList.findIndex(item => item.elementId === elementId);
    updatedList[targetElementIndex !== -1 ? targetElementIndex : 0] = {
      ...updatedList[targetElementIndex],
      ...state
    };

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
        <div className='card-header-container' id={String(elementId)}>
          <span>Element {element.type}</span>
          <Button variant="outline-danger" onClick={() => deleteItem(elementId)}>Delete</Button>
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
