import { TextCard } from '../TextCard/TextCard'
import styles from './CardList.module.css'

export const CardList = () => {
  const cardList = [
    {
      title: 'Patients first, always',
      description:
        'We know how stressful it can be when your pet needs meds. That’s why we offer free next-day delivery and even do same-day in NYC and LA. We got you.',
    },
    {
      title: 'Tailored care',
      description:
        'We’ll work with you and your veterinarian to find the very best solution for your pet. With our custom compounded options, we can change the dosage, flavor and form. We even have a flavor guarantee with over 40 options!',
    },
    {
      title: 'Support, 7 days a week',
      description:
        'You’re not alone. Text, call, or email us 7 days a week - we’ll answer and do our best to sprinkle in a bit of sunshine. ☀️',
    },
  ]

  return (
    <>
      <ul className={styles.cardList}>
        {cardList &&
          cardList.map((card, index) => {
            return (
              <li className={styles.textCardLine} key={index}>
                <TextCard
                  textCardTitle={card.title}
                  textCardDescription={card.description}
                />
              </li>
            )
          })}
      </ul>
    </>
  )
}
