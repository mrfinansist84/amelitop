/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { getAllLessonsRequest } from './actions';
import { LessonPreview } from './components';
import { Heading, Loader, SideNav } from '~/components';
import { ILesson, type ILessonPreview } from '~/global/types';
import { type IRootReducer } from '~/rootReducer';

import './LessonsPage.scss';

export const LessonsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { lessonsList, loading } = useSelector((state: IRootReducer) => state.lessonsReducer);

  React.useEffect(() => {
    dispatch(getAllLessonsRequest());
  }, [dispatch]);

  const getLessonsPreviews = (lessons: ILesson[]): ILessonPreview[] => {
    return lessons.map((lesson: ILesson, idx: number) => ({ id: lesson.id, title: lesson.title, index: idx }));
  };

  const lessonsPreviews = getLessonsPreviews(lessonsList);

  const getNavContent = () => {
    return lessonsPreviews.map((lesson: ILessonPreview) => (
      <div className="side-nav__element" key={lesson.id}>
        <h3 className="side-nav__element-title">{lesson.title}</h3>
        <p className="side-nav__element-label">{`Lesson ${lesson.index + 1}`}</p>
      </div>
    ));
  };

  return (
    <div className="lessons">
      {loading && <Loader />}
      <section className="lessons__title">
        <Heading text="Lessons" />
      </section>
      <section className="lessons__content">
        <SideNav items={getNavContent()} />
        <Card className="lessons__list-container">
          <Card.Body className="lessons__list-body">
            {lessonsPreviews.map((lesson: ILessonPreview) => (
              <LessonPreview {...lesson} index={lesson.index} key={lesson.id} />
            ))}
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default LessonsPage;
