import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LessonPreview } from './components';
import { Heading, Loader, SideNav } from '../../components';
import { type IRootReducer } from '../../rootReducer';
import { getAllLessonsRequest } from './actions';

import './LessonsPage.scss';

export const LessonsPage: React.FC = () => {
  const dispatch = useDispatch();
  const { error, lessonsList, loading } = useSelector((state: IRootReducer) => state.lessonsReducer);

  React.useEffect(() => {
    dispatch(getAllLessonsRequest());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="lessons">
      <section className="lessons__title">
        <Heading text="Lessons" />
      </section>
      <section className="lessons__content">
        <SideNav items={lessonsList.map((lesson: any) => ({ id: lesson.id, title: lesson.title }))} />
        <section className="lessons__list-container">
          {lessonsList.map((lesson: any, index: number) => (
            <LessonPreview {...lesson} index={index} key={lesson.id} />
          ))}
        </section>
      </section>
    </div>
  );
};

export default LessonsPage;
