import { EntityManager } from './EntityManager.js';

export const assets = {
  images: {
    background: '/assets/Background.jpg'
  }
}

export const players = [
  {
    name: 'Player 1',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=1719285195844&format=viewer_avatar'
  },
  {
    name: 'Player 2',
    avatar: 'https://static.codingame.com/servlet/fileservlet?id=1717001354716&format=viewer_avatar'
  }
];

export const modules = [
  {name: 'entitymanager', class: EntityManager}
];