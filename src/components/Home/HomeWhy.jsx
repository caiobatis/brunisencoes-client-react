import React from 'react'
import CardWithIcon from '../Cards/CardWithIcon'
import styles from './Home.scss'

const HomeWhy = props => {
  
  return (        
  <section className={styles.why}>
    <div className="container">
      <div className="text-center">
        <h2 className={styles.h2}>Porque escolher a BRÜN Isenções?</h2>
      </div>
    </div>
    <div className={styles.icons}>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <CardWithIcon >
              <div className={styles.icon}>
                <i className="far fa-thumbs-up"></i>
              </div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Confiança e Credibilidade</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>Acompanhe seu processo de perto.</span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-2">
            <CardWithIcon >
              <div className={styles.icon}>
                <i className="far fa-thumbs-up"></i>
              </div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Assessoria Completa</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>Oferecemos todos os serviços necessários para você obter seu carro 0 KM.</span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-2">
            <CardWithIcon >
              <div className={styles.icon}>
                <i className="far fa-thumbs-up"></i>
              </div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Avaliação Gratuita</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>Envie seu laudo médico e nós avaliamos gratuitamente.</span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-2">
            <CardWithIcon >
              <div className={styles.icon}>
                <i className="far fa-thumbs-up"></i>
              </div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Alto índice de aprovação</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>Parcerias chaves que propiciam grande possibilidade de aprovação.</span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HomeWhy 