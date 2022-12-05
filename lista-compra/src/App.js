import './App.css';

import HeaderComponent from "./components/HeaderComponent";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";
import ImageComponent from "./components/ImageComponent";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialList = [];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        list: state.list.concat({ name: action.name, id: action.id }),
      };
    default:
      throw new Error();
  }
};

function App() {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });
    setName('');
  }

  return (
    <div className="App">
      <HeaderComponent/>
      <FormComponent
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />

      <ListComponent list={listData.list} />
      <ImageComponent/>

    </div>
  );
}

export default App;
