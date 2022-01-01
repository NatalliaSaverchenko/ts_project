import { WildCard } from '../WildCard/WildCard'

import blackDog from '../images/black_dog.png'
import picture from '../images/picture.png'
export const WildList = () => {
  const wildList = [
    {
      image: blackDog,
      data: 'May 3, 2021',
      title: 'What is compounding?',
      description:
        'Compounding is the art and science of preparing personalized medications.',
      link: 'Read the article',
    },
    {
      image: picture,
      data: 'June 15, 2021',
      title: 'Anxiety in Pets',
      description: 'An interview with a top behavioral specialist in NYC.',
      link: 'Read the article',
    },
  ]
  return (
    <>
      {wildList &&
        wildList.map(({ image, data, title, description, link }) => (
          <WildCard
            key={title}
            image={image}
            data={data}
            title={title}
            descriptionk={description}
            link={link}
          />
        ))}
    </>
  )
}
