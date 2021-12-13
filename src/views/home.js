import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Future Optimization Specialist</title>
        <meta property="og:title" content="Future Optimization Specialist" />
      </Helmet>
    </div>
  )
}

export default Home
