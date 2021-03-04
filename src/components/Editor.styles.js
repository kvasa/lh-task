import styled from '@emotion/styled';

const SIDEBAR_WIDTH = '80px';

export const Layout = styled.div`
  display: flex;
  height: 100%;
`;

export const Sidebar = styled.div`
  width: ${SIDEBAR_WIDTH};
  padding: 10px 0;
`;

export const Item = styled.div`
  background-color: #f5f5f5;
  width: ${SIDEBAR_WIDTH};
  height: ${SIDEBAR_WIDTH};

  display: flex;
  align-items: center;
  justify-content: center;

  color: #282c34;
  font-size: 2em;
  margin: 1px 0;

  cursor: move;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;

export const Canvas = styled.div`
  flex: 1;
  border: 1px dashed #f5f5f5;
  margin: 10px;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: ${SIDEBAR_WIDTH};
  height: ${SIDEBAR_WIDTH};

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 3em;
    pointer-events: none;
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
