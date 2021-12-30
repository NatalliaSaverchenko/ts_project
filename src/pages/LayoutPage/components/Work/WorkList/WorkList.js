import parrot from '../images/parrot.png'
import dog from '../images/dog.png'
import rabbit from '../images/rabbit.png'
import { WorkCard } from '../WorkCard/WorkCard'
export const WorkList = () => {
  const workList = [
    {
      image: parrot,
      title: 'We receive your prescription',
      description:
        'Either your veterinarian sends us a prescription or we reach out to them for you. Whatever is easiest!',
    },
    {
      image: rabbit,
      title: 'We deliver your care package',
      description:
        'Fast and free next-day delivery, straight to your door. Same-day in NYC and LA.',
    },
    {
      image: dog,
      title: 'You treat your pet',
      description:
        'Give your pet the care they need to feel better. Plus they can play with our included toy!',
    },
  ]
  return (
    <>
      <ul>
        {workList &&
          workList.map(({ image, title, description }, index) => {
            return (
              <li key={index}>
                <WorkCard
                  image={image}
                  title={title}
                  description={description}
                />
              </li>
            )
          })}
      </ul>
    </>
  )
}
