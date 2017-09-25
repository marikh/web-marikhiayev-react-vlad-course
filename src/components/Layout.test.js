import Layout from './Layout';
import { mount, shallow } from "enzyme";
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { Header, Body, Footer, Menu } from './';
import renderer from 'react-test-renderer';

describe('Layout outer tests', () => {
    let props;
    let mountedlayoutComponent;

    const layoutComponent = () => {
        if (!mountedlayoutComponent) {
            mountedlayoutComponent = mount(
                <MemoryRouter>
                    <Layout  />
                </MemoryRouter>
            );
        }
        return mountedlayoutComponent
    }

    beforeEach(() => {
        props = {};
        mountedlayoutComponent = undefined;
    });

    it('is Layout', () => {
        const LayoutComponent = <Layout />;
        expect(LayoutComponent.type).toBe(Layout)
    })

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
            <MemoryRouter>
                <Layout />
            </MemoryRouter>
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


