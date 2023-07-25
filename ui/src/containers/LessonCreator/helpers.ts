const setOrder = (currentWidgetData: any) =>
  currentWidgetData.map((item: any, index: number) => {
    item.index = index + 1;
    return item;
  });

const getDataByType = (list: any[], type: string) => {
  const filteredList = list.filter((item) => item.type === type);
  filteredList.forEach((item) => {
    delete item.elementId;
    return item;
  });
  return filteredList;
};

export const transformLessonData = (widgetsList: any[], action: any) => {
  const copyList = structuredClone(widgetsList);

  const filteredWidgetsList = copyList.filter((item: any) =>
    action.payload.initialListData.some(
      (element: any) => {
        return item.elementId === element.elementId
      })
  );

  const list = setOrder(filteredWidgetsList);
  return {
    ...action.payload.generalInfo,
    text: getDataByType(list, 'text'),
    picture: getDataByType(list, 'picture'),
    video: getDataByType(list, 'video')
  };
};
