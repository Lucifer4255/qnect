import React from 'react'
import s, { layout } from '../style'
import { AnswerCard } from './AnswerCard'
import beb from '../assets/bebnath.jpg'

export const Hero = () => {
  return (
    <div className={`${layout.hero} `}>
      <div className={`${layout.ask}`}>
        <button className='w-1/12'>
          <img src={beb} alt="beb" className="w-12 h-auto rounded-full " />
        </button>
        <div className={`w-11/12 `}>
          <input placeholder="what are your doubts today?" className={`${s.search_text1} `} />
        </div>
      </div>
      <AnswerCard/>
      <AnswerCard/>

    </div>
  )
}
