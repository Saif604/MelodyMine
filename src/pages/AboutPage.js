import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about-img" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Melody Mines has a rich and vibrant history that spans over{" "}
            {new Date().getFullYear() - 1996} years. Our journey commenced in
            1996 with a profound love for music, driving us to create a haven
            for musicians and music enthusiasts alike. Over time, we've
            meticulously curated a vast array of musical instruments, becoming a
            trusted source for musicians of all levels. Our commitment to
            nurturing talent and passion is woven into the very fabric of our
            existence. We've witnessed countless artists embark on their musical
            journeys, finding inspiration and the perfect instrument here at
            Melody Mines. Through {new Date().getFullYear() - 1996} years of
            unwavering dedication, we've not only supplied instruments but also
            fostered a thriving musical community. Our vision of music as a
            universal language continues to resonate, and we are excited to keep
            nurturing the world's musical talent for many years to come. Melody
            Mines: where melodies are born and talents are nurtured.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
