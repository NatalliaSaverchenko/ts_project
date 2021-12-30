import { RouterView } from './routes/Routes'

import { MainLayout } from './components/MainLayout/MainLayout'
import './App.css'

function App() {
  return (
    <MainLayout>
      <RouterView />
    </MainLayout>
  )
}

export default App
