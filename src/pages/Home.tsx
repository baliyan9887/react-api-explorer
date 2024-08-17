import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';
import { Overlay, Container } from '../globalStyles';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <Container style={{ alignItems: 'center' }}>
      <Button onClick={() => setSidebarOpen((prev) => !prev)}>
        Toggle Sidebar
      </Button>
      <SidebarWrapper>
        {sidebarOpen && <Sidebar toggleSidebar={sidebarOpen} />}
        {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}
      </SidebarWrapper>
    </Container>
  );
};

const SidebarWrapper = styled.div`
  position: relative;
`;

export default App;
