import { EdnaProvider } from '../Context';
import AppUI from './AppUI';

function App() {

  return (
    <>
      <EdnaProvider>
        <AppUI />
      </EdnaProvider>
    </>
  )
}

export default App;