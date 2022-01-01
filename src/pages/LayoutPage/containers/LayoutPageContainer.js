import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { Values } from '../components/Values/Values'
import { Work } from '../components/Work/Work'
import { Veterinaians } from '../components/Veterinarians/Veterinarians'
import { MySwiper } from '../components/MySwiper/MySwiper'
import { WildList } from '../components/Wild/WildList/WildList'

export const LayoutPageContainer = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Values />
      <Work />
      <Veterinaians />
      <MySwiper />
      <WildList />
    </div>
  )
}
