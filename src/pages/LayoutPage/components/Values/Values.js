import { CardList } from './CardList/CardList'
import dog from './images/dog.png'
export const Values = () => {
  return (
    <>
      <h2>
        {`We couldn’t find a pharmacy experience worthy of our best buds— so we
        created one.`}
      </h2>
      <div>
        <img src={dog} alt="dog" />
      </div>
      <CardList />
    </>
  )
}
