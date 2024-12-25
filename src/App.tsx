import style from './app.module.scss'
import { Main } from '@/pages/Main'
import { Area } from '@/shared/ui/Area'

function App() {
  return (
    <div className={style.layout}>
      <div className={style.container}>
        <Area background="white">klklkl</Area>
        <Main />
      </div>
    </div>
  )
}

export default App
