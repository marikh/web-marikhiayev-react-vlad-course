import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom'

describe('Here will be App.js tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    const INITIAL_STATE = {
        showProtectedLinks : false
    };

    const mockedStore = createMockStore({ menu : INITIAL_STATE });
    let mountedApp;

    const appComponent = () => {
        if (!mountedApp) {
            mountedApp = mount(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <App />
                    </MemoryRouter>
                </Provider>
            );
        }
        return mountedApp
    }

    appComponent();
  });
})


