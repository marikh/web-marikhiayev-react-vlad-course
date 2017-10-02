import Layout from './Layout';
import { mount, shallow, dive } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Header, Body, Footer, Menu } from './';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createMockStore } from 'redux-test-utils';

const INITIAL_STATE = {
        showProtectedLinks : false
    };

const mockedStore = createMockStore({ menu : INITIAL_STATE });

describe('Layout outer tests', () => {
    let props;
    let mountedlayoutComponent;

    const layoutComponent = () => {
        if (!mountedlayoutComponent) {
            mountedlayoutComponent = mount(
                <Provider store={mockedStore}>
                    <MemoryRouter>
                        <Layout  />
                    </MemoryRouter>
                </Provider>
            );
        }
        return mountedlayoutComponent
    }

    beforeEach(() => {
        props = {};
        if(mountedlayoutComponent != null){
            mountedlayoutComponent.unmount();
            mountedlayoutComponent = undefined;
        }
        
    });

    it("always renders a section", () => {

        const sections = layoutComponent().find("section");
        expect(sections.length).toBeGreaterThan(0);
    });

    it("has Header", () => {
        expect(layoutComponent().find(Header).length).toBeGreaterThan(0)
    })
    
    it("has Body Component", () => {
        expect(layoutComponent().find(Body).length).toBeGreaterThan(0)
    })

    it("has Footer component", () => {
        expect(layoutComponent().find(Footer).length).toBeGreaterThan(0)
    })

    it('Layout triggers menu open when clicked on menu', () => {
        layoutComponent().find(Menu).find('.hamburger-icon').simulate('click')
        expect(layoutComponent().find(Menu).props().menuConfig.menuState).toBeTruthy();
    })
})

describe('Layout snapshot tests', () => {
    it('test weird snapshot', () => {

        const tree = renderer.create(
            <Provider store={mockedStore}>
                <MemoryRouter>
                    <Layout  />
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    })
 })

describe('Layout shallow tests', () => {

    it(`Layout has menu state and it's false`, () => {
        const layout = shallow(<Layout />)
        expect(layout.state().menuState).toBe(false);
    })

    it(`Layout manages menu close on click`, () => {
        const layout = shallow(<Layout />)
        layout.state().menuState = true;
        expect(
            layout.simulate('click')
                .state()
                    .menuState
        ).toBe(false);
    })

})


