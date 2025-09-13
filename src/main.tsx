import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { DataSource } from './RetensaTurnoverAnalytics.ts';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <SisenseContextProvider
        url="https://aesandbox.sisensepoc.com"
        // VVV FIX: Updated API Token VVV
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjg2YmUwYmQxYzYzMTJiZmJhMWI0M2I3IiwiYXBpU2VjcmV0IjoiMjQ1NDAwZGUtYjA1My0zOWJkLTUzY2EtODg2MzhmOGZiYzNkIiwiYWxsb3dlZFRlbmFudHMiOlsiNjg2YmRhMjVlYzBmNzYwMDFjZTQxZTI1Il0sInRlbmFudElkIjoiNjg2YmRhMjVlYzBmNzYwMDFjZTQxZTI1IiwiZXhwIjoxNzU4MDM5NjM4fQ.OL0KBGyMp7SVvl8UNTvdaud6_cUnnWFgq5VPgeGPUqk"
        defaultDataSource={DataSource}
      >
        <App />
      </SisenseContextProvider>
    </DndProvider>
  </StrictMode>
);