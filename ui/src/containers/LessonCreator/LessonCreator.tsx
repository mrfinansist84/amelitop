import * as React from 'react';
import { useState } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Card, ListGroup } from 'react-bootstrap';

import { defaultElement, addingBtn, defaultLesson } from './constants';
import { Heading, Loader, SideNav } from '~/components';
import { Widget } from './components';
import { type IRootReducer } from '~/rootReducer';
import { saveLessonRequest } from './actions';

import './LessonCreator.scss';

// this component will be for all states - read, create, edit lesson
export const LessonCreator: React.FC = () => {
  const dispatch = useDispatch();
  const [initialListData, setInitialListData] = useState([]);
  const [generalInfo, setGeneralInfo] = useState(defaultLesson);
  const loading = useSelector((state: IRootReducer) => state.lessonCreatorReducer.loading,
    shallowEqual);
  const navigate = useNavigate();

  const getTemporaryId = () => String(Date.now() * Math.random());

  const addElement = (type: string) => {
    const updatedinitialListData = structuredClone(initialListData);
    const element = defaultElement[type as keyof typeof defaultElement];
    element.elementId = getTemporaryId();
    updatedinitialListData.push(element);
    setInitialListData(updatedinitialListData);
  };

  const availableElementsList = () => addingBtn.map((item: any) => (
      <div
        className="side-nav__element d-flex align-items-center justify-content-center"
        key={item.id}
        onClick={() => addElement(item.type)}
      >
        <h3 className="side-nav__element-title">{item.title}</h3>
      </div>
  ));

  const deleteItem = (id: string) => {
    const filteredList = initialListData.filter((item) => item.elementId !== id);
    setInitialListData(filteredList);
  };

  const handleCancel = () => navigate('/lessons');

  const handleSave = () => {
    dispatch(saveLessonRequest({ generalInfo, initialListData }));
  };

  const handleChangeGeneralInfo = (e: any, field: string) => {
    setGeneralInfo({
      ...generalInfo,
      [field]: e.target.value
    });
  };

  const widgetList = React.useMemo(
    () => initialListData.map((element: any) => (
    <Widget
      deleteItem={deleteItem}
      element={element}
      key={getTemporaryId()}
      editMode={true} // temporary value, next step - editMode depens on user's actions - read/create/edit lesson.
    />
    )), [initialListData]
  )

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lessons">
      <section className="lessons__title">
        <Heading text="Create lesson" withIcon withActions reject={handleCancel} resolve={handleSave} />
      </section>
      <section className="lessons__content">
        <SideNav items={availableElementsList()} />
          <Card className="lessons__list-container">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Lesson`s Title</Form.Label>
                      <Form.Control
                        value={generalInfo.title}
                        onChange={(e) => handleChangeGeneralInfo(e, 'title')}
                        type="text"
                        className="form-control"
                        id="lessonTitle"
                        placeholder="Enter title of the lesson" />
                    </Form.Group>
                  </Form>
                </ListGroup.Item>
                  <ListGroup.Item>
                  { widgetList }
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
      </section>
    </div>
  );
};

export default LessonCreator;
