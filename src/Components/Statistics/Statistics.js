import React from 'react'
import css from './Statistics.module.css'
import { BsArrowUp, BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data/data'
import StatisticalChart from '../../Components/StatisticalChart/StatisticalChart' 


const Statistics = () => {
  return (
    <div className={`${css.container} theme-container` }>
        <span className={css.title}> Overview of Statistics</span>

        <div className={`${css.cards} grey-container`}>

            <div>
                <div className={css.arrowIcon}> <BsArrowUpShort /> </div>

                <div className={css.card}>
                    <span>Top item this month</span>
                    <span>Office Components </span>
                </div>
            </div>


            <div className={css.card}>
        <span> Items</span>
        <span> $ {groupNumber (72.00)}</span>
        </div>


        <div className={css.card}>

            <span> Profit</span>
            <span> profit</span>

            <span> $ {groupNumber (7000)}</span>

        </div>

        <div className={css.card}>
        <span> Daily Avg </span>
        <span> $ {groupNumber (5244)}</span>

        </div>


        </div>

        <StatisticalChart />


      
    </div>
  )
}

export default Statistics
