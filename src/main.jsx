import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
   <ConfigProvider
  theme={{
    components: {
      Card: {
        actionsBg: '#fafafa', // or any hex / css variable
      },
    },
  }}
>
  <App />
</ConfigProvider>
)
