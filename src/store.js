import React from 'react'

const Store = React.createContext([
  {
    taskname: 'studying',
    isDone: true,
    checked: false
  },
  {
    taskname: 'swimming',
    isDone: false,
    checked: false
  },
  {
    taskname: 'writing',
    isDone: true,
    checked: false
  }
]);

export default Store;