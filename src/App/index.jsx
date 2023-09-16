import { EdnaProvider } from '../Context';
import AppUI from './AppUI'
import './App.scss'

function App() {

  return (
    <>
      <EdnaProvider>
        <AppUI />
      </EdnaProvider>
    </>
  )
}

export default App