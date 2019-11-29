import { Injectable } from '@angular/core';

@Injectable()
export class AlgoService {
  algorithms = [{
    id: '1',
    name: 'A + B problem solver',
    image: 'https://previews.123rf.com/images/convisum/convisum1402/convisum140200006/25747743-a-plus-b-=-c.jpg',
    slug: 'a_plus_b',
    description: 'Данный алгоритм решает величайшую проблему современности. Какова сумма двух чисел?',
    fields: [
      {type: 'number', name: "a"},
      {type: 'number', name: "b"}
    ],
    pricing: 1,
    status: 'online',
    tags: ['a + b', 'sum', 'test'],
  }, {
    id: '2',
    name: 'YoloV3 Object Detection',
    image: 'https://pjreddie.com/media/image/Screen_Shot_2018-03-24_at_10.48.42_PM.png',
    slug: 'yolov3_obd',
    description: 'Распознавание объектов на изображении',
    fields: [
      {type: 'number', name: "a"},
      {type: 'number', name: "b"}
    ],
    pricing: 1,
    status: 'online',
    tags: ['object detection', 'yolov3', 'cv'],
  }, {
    id: '3',
    name: 'What color is?',
    image: 'https://experience.sap.com/fiori-design-web/wp-content/uploads/sites/5/2017/11/Sequential-Palette-1-52-1.png',
    slug: 'what_color_is',
    description: 'Определение доминирующего цвета на изображении',
    fields: [
      {type: 'file', name: "image"}
    ],
    pricing: 1,
    status: 'online',
    tags: ['image', 'color'],
  }];

  getAlgo(algoId: string) {
    return this.algorithms.find(algo => algo.id === algoId);
  }

  all() {
    return [...this.algorithms];
  }
}
