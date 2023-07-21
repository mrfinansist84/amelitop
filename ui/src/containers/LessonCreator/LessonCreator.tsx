import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Card, ListGroup } from 'react-bootstrap';

import { defaultElement, addingBtn, defaultLesson } from './constants';
import { Heading, Loader, SideNav } from '~/components';
import { Widget } from './components';
import { type IRootReducer } from '~/rootReducer';
import { saveLessonRequest } from './actions';

import './LessonCreator.scss';

export const LessonCreator: React.FC = () => {
  const dispatch = useDispatch();
  const [elementsList, setElementsList] = useState([]);
  const [generalInfo, setGeneralInfo] = useState(defaultLesson);
  const { loading } = useSelector((state: IRootReducer) => state.lessonCreatorReducer);
  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  const getTemporaryId = () => String(Date.now() * Math.random());

  const addElement = (type: string) => {
    const updatedElementsList = structuredClone(elementsList);
    const element = defaultElement[type as keyof typeof defaultElement];
    element.index = elementsList.length + 1;
    element.elementId = getTemporaryId();
    updatedElementsList.push(element);

    setElementsList(updatedElementsList);
  };

  const availableElementsList = () => {
    return addingBtn.map((item: any) => (
      <div
        className="side-nav__element d-flex align-items-center justify-content-center"
        key={item.id}
        onClick={() => addElement(item.type)}
      >
        <h3 className="side-nav__element-title">{item.title}</h3>
      </div>
    ));
  };

  const changeOrder = (filteredList: any) =>
    filteredList.forEach((item: any, index: number) => {
      item.index = index + 1;
    });

  const deleteItem = (id: string) => {
    const filteredList = elementsList.filter((item) => item.elementId !== id);

    changeOrder(filteredList);
    setElementsList(filteredList);
  };

  const handleCancel = () => navigate('/lessons');

  const getDataByType = (type: string) => {
    const list = elementsList.filter((item) => item.type === type);
    list.forEach((item) => {
      delete item.elementId;
      return item;
    });
    return list;
  };

  const transformLessonData = () => ({
    ...generalInfo,
    text: getDataByType('text'),
    picture: getDataByType('picture'),
    video: getDataByType('video')
  });

  const handleSave = () => {
    dispatch(saveLessonRequest(transformLessonData()));
  };

  const handleChange = (e: any, field: string) => {
    setGeneralInfo({
      ...generalInfo,
      [field]: e.target.value
    });
  };

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
                      onChange={(e) => handleChange(e, 'title')}
                      type="text"
                      className="form-control"
                      id="lessonTitle"
                      placeholder="Enter title of the lesson"
                    />
                  </Form.Group>
                </Form>
              </ListGroup.Item>
              <ListGroup.Item>
                {elementsList.map((element: any) => (
                  <Widget
                    deleteItem={deleteItem}
                    element={element}
                    key={getTemporaryId()}
                    elementId={element.elementId}
                  />
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default LessonCreator;
