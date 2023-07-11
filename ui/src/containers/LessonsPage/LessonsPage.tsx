import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { LessonPreview } from './components';
import { Heading, Loader, SideNav } from '../../components';
import { type IRootReducer } from '../../rootReducer';
import { getAllLessonsRequest } from './actions';

import './LessonsPage.scss';

export const LessonsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { lessonsList, loading } = useSelector(
    (state: IRootReducer) => state.lessonsReducer);

  React.useEffect(() => {
    dispatch(getAllLessonsRequest());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  const getLessonsList = () => {
    return lessonsList.map((lesson: any, index: number) => (
      <div className="side-nav__element" key={lesson.id}>
        <h3 className="side-nav__element-title">{lesson.title}</h3>
        <p className="side-nav__element-label">{`Lesson ${++index}`}</p>
      </div>
    ));
  };

  return (
    <div className="lessons">
      <section className="lessons__title">
        <Heading text="Lessons" />
      </section>
      <section className="lessons__content">
        <SideNav items={getLessonsList()} />
        <Card className="lessons__list-container">
          <Card.Body className="lessons__list-body">
            {lessonsList.map((lesson: any, index: number) => (
              <LessonPreview {...lesson} index={index} key={lesson.id} />
            ))}
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default LessonsPage;
