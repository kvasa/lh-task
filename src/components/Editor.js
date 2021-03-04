import React from 'react';

// constants
import * as ELEMENTS from '../constants/ElementTypes';

// styles
import { Layout, Logo, Sidebar, Item, Canvas } from './Editor.styles';

const Editor = () => {
  return (
    <Layout>
      <Sidebar>
        <Logo>
          <img src="/logo.svg" alt="logo" />
        </Logo>

        <Item data-id={ELEMENTS.TEXT}>
          <i className="fa fa-pencil" />
        </Item>
        <Item data-id={ELEMENTS.IMAGE}>
          <i className="fa fa-image" />
        </Item>
        <Item data-id={ELEMENTS.VIDEO}>
          <i className="fa fa-video-camera" />
        </Item>
      </Sidebar>

      <Canvas />
    </Layout>
  );
};
export default Editor;
