import React from 'react'
import CardWithIcon from '../Cards/CardWithIcon'
import styles from './Home.scss'

const HomeServices = props => {
  
  return (
    <section className={styles.services}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <h2 className={styles.h2}>Nossos Serviços</h2>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <CardWithIcon>
              <div className={styles.icon}></div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Processo de Isenção de Condutor</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>
                  <ul>
                    <li>Perícia Médica</li>
                    <li>Suporte p/ CNH Especial</li>
                    <li>Laudo Médico de Isenção</li>
                    <li>Isenção de IPI</li>
                    <li>Isenção de IOF</li>
                    <li>Isenção de ICMS</li>
                    <li>Isenção de IPVA</li>
                  </ul>
                </span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-4">
            <CardWithIcon>
              <div className={styles.icon}></div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Processo de Isenção de Não Condutor</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>
                  <ul>
                    <li>Perícia Médica</li>
                    <li>Laudo Médico de Isenção</li>
                    <li>Isenção de IPI</li>
                    <li>Isenção de IOF</li>
                    <li>Isenção de ICMS</li>
                    <li>Isenção de IPVA</li>
                  </ul>
                </span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-2"></div>
          <div className={styles.line}></div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <CardWithIcon>
              <div className={styles.icon}></div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Licenciamento do seu Veículo</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>
                  <ul>
                    <li>Primeiro Registro</li>
                    <li>Emplacamento</li>
                    <li>Rodízio Municipal</li>
                    <li>Cartão DEFIS</li>
                    <li>Cartão IDOSO</li>
                  </ul>
                </span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-4">
            <CardWithIcon>
              <div className={styles.icon}></div>
              <div className={styles.title}>
                <h4 className={styles.h4}>Assessoria para:</h4>
              </div>
              <div className={styles.description}>
                <span className={styles.span}>
                  <ul>
                    <li>Auto Escola e CNH Especial</li>
                    <li>Venda do seu Veículo Usado</li>
                    <li>Seguro de Automóveis</li>
                    <li>Pacotes de Acessórios p/ seu Veículo 0 KM</li>
                    <li>Adaptações de Mobilidade do seu Veículo</li>
                  </ul>
                </span>
              </div>
            </CardWithIcon>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HomeServices 