import React from 'react';
import Line from '../assets/lines.svg';
import VerticalLine from '../assets/VerticalLines.svg';
import CrossLine from '../assets/CrossLines.svg';
import Curv from '../assets/curv.svg';
import Regtangle from '../assets/rectangle.svg';
import Square from '../assets/square.svg';
import Triangle from '../assets/triangle.svg';
import Circle from '../assets/circle.svg';
import Ellipsis from '../assets/ellipsis.svg';
import Polygons from '../assets/polygons.svg';
import Cube from '../assets/cube.svg';
import Prism from '../assets/prism.svg';
import Prisma from '../assets/prisma.svg';
import Cylinder from '../assets/cylinder.svg';
import Coffee from '../assets/coffee.svg';
import Chemical from '../assets/chemical.svg';
import Astronaut from '../assets/astronaut.svg';

const images = [
  <Line witdh="65%" height="65%" />,
  <VerticalLine witdh="70%" height="70%" />,
  <CrossLine witdh="65%" height="65%" />,
  <Curv witdh="70%" height="70%" />,
  <Regtangle witdh="70%" height="70%" />,
  <Square witdh="70%" height="70%" />,
  <Triangle witdh="70%" height="70%" />,
  <Circle witdh="70%" height="70%" />,
  <Ellipsis witdh="70%" height="70%" />,
  <Polygons witdh="70%" height="70%" />,
  <Cube witdh="70%" height="70%" />,
  <Prism witdh="50%" height="50%" />,
  <Prisma witdh="60%" height="60%" />,
  <Cylinder witdh="80%" height="80%" />,
  <Coffee witdh="80%" height="80%" />,
  <Chemical witdh="80%" height="80%" />,
  <Astronaut witdh="80%" height="80%" />,
];

export const drawings = {
  horizontalLines: {
    name: 'horizontalLines',
    code: '#FED992',
    steps: [
      [0, 1],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[0],
  },

  verticalLines: {
    name: 'verticalLines',
    code: '#ADD8CE',
    steps: [
      [0, 1],
      [0.27, 5],
      [0.35, 1],
      [0.5, 5],
      [0.63, 7],
      [0.87, 7],
      [1, 5],
    ],
    image: images[1],
  },

  crossLines: {
    name: 'crossLines',
    code: '#B2CEB2',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[2],
  },

  curv: {
    name: 'curv',
    code: '#FDA697',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[3],
  },

  rectangle: {
    name: 'rectangle',
    code: '#FED992',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 5],
      [0.63, 3],
      [0.87, 3],
      [1, 1],
    ],
    image: images[4],
  },

  square: {
    name: 'square',
    code: '#ADD8CE',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 5],
      [0.63, 3],
      [0.87, 3],
      [1, 1],
    ],
    image: images[5],
  },

  triangle: {
    name: 'triangle',
    code: '#B2CEB2',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 5],
      [0.63, 7],
      [0.87, 5],
      [1, 1],
    ],
    image: images[6],
  },

  circles: {
    name: 'circles',
    code: '#FDA697',
    steps: [
      [0, 5],
      [0.27, 5],
      [0.35, 5],
      [0.5, 5],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[7],
  },

  ellipsis: {
    name: 'ellipsis',
    code: '#FED992',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[8],
  },

  polygons: {
    name: 'polygons',
    code: '#ADD8CE',
    steps: [
      [0, 1],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[9],
  },

  cube: {
    name: 'cube',
    code: '#B2CEB2',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[10],
  },

  prism: {
    name: 'prism',
    code: '#FDA697',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[11],
  },

  prisma: {
    name: 'prisma',
    code: '#FED992',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[12],
  },

  cylinder: {
    name: 'cylinder',
    code: '#ADD8CE',
    steps: [
      [0, 3],
      [0.27, 3],
      [0.35, 1],
      [0.5, 1],
      [0.63, 1],
      [0.87, 1],
      [1, 1],
    ],
    image: images[13],
  },

  coffee: {
    name: 'coffee',
    code: '#B2CEB2',
    steps: [
      [0, 7],
      [0.27, 5],
      [0.35, 5],
      [0.5, 5],
      [0.63, 5],
      [0.7, 5],
      [0.75, 2],
      [0.9, 5],
      [1, 5],
    ],
    image: images[14],
  },

  chemicals: {
    name: 'chemicals',
    code: '#FDA697',
    steps: [
      [0, 8],
      [0.165, 14],
      [0.335, 3],
      [0.418, 3],
      [0.502, 4],
      [0.587, 3],
      [0.67, 2],
      [0.72, 3],
      [0.784, 2],
      [0.834, 1],
      [0.853, 1],
      [0.893, 1],
      [0.93, 1],
      [0.97, 1],
      [1, 1],
    ],
    image: images[15],
  },

  astronaut: {
    name: 'astronaut',
    code: '#FED992',
    steps: [
      [0, 3],
      [0.09, 2],
      [0.148, 1],
      [0.166, 1],
      [0.185, 3],
      [0.258, 1],
      [0.276, 1],
      [0.295, 3],
      [0.35, 1],
      [0.37, 3],
      [0.424, 2],
      [0.463, 2],
      [0.5, 2],
      [0.554, 3],
      [0.645, 1],
      [0.665, 2],
      [0.68, 1],
      [0.695, 2],
      [0.72, 1],
      [0.76, 1],
      [0.794, 1],
      [0.832, 1],
      [0.85, 1],
      [0.87, 1],
      [0.91, 1],
      [0.92, 1],
      [0.96, 1],
      [0.98, 1],
      [1, 1],
    ],
    image: images[16],
  },
};
