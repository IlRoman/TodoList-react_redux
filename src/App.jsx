import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import TodoList from './components/Todolist'

export const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}

export default App;