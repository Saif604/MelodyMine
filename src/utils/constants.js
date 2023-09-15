import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Empowering musical journeys by providing exceptional instruments, expertise, and inspiration to every musician, at every stage of their melodic adventure.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To be the heartbeat of the global music community, where every artist finds their unique voice and every listener discovers the magic of melodies",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: `Founded in 1996, we've been instrumental in shaping the musical landscape. With a rich legacy of ${
      new Date().getFullYear() - 1996
    } years, we've harmonized countless lives with the gift of music.`,
  },
];

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/singleProduct?id=`
