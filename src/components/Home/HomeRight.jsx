import React, { Component } from 'react'
import styles from './Home.scss'
import classNames from 'classnames'
import Buttons from '../Buttons/Buttons'

class HomeRight extends Component {
  
  
  state = {
    modal: false
  }


  toggleModal = (open) => {
    console.log(open)
    this.setState({
      modal: open
    });
  }

  render () {


    const _class = classNames(styles.modal, {
      [styles.open]: this.state.modal
    })

    return (
      <div>
        <div className={_class}>
          <div
            className={styles.close}
            onClick={()=>this.toggleModal(false)}
          />
          <div className={styles.container}>
            <h3 className="h3">Todos diagnósticos que podem ter direito</h3>

            <ul className="list">
              <li>Alguns Tipos de Câncer</li>
              <li>Amputação</li>
              <li>Artrite Reumatoide</li>
              <li>Artrodese</li>
              <li>Artrogripose</li>
              <li>Artrose</li>
              <li>Ausência de Membros</li>
              <li>Autismo</li>
              <li>AVC (Acidente Vascular Cerebral)</li>
              <li>AVE (Acidente Vascular Encefálico)</li>
              <li>Cardiopatia grave</li>
              <li>Doenças Degenerativas</li>
              <li>Deficiência Visual</li>
              <li>Deficiência Mental Severa e Grave</li>
              <li>Doenças Neurológicas</li>
              <li>DORT (Distúrbio Osteomuscular Relacionado ao Trabalho)</li>
              <li>Encurtamento de Membros</li>
              <li>Esclerose Múltipla</li>
              <li>Escoliose Acentuada</li>
              <li>Espondilite Anquilosante</li>
              <li>Hemiparesia</li>
              <li>Hemiplegia</li>
              <li>LER (Lesão Por Esforço Repetitivo)</li>
              <li>Linfomas</li>
              <li>Manguito Rotator</li>
            </ul>

          </div>
        </div>
        <section className={styles.whoTitle}>
          <div className="container">
            <h2 className={styles.h2}>Quem tem Direito?</h2>
          </div>
        </section>
        <section className={styles.whoItems}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className={styles.list}>
                  <li>
                    <p className={styles.p}>Deficiência Fisica</p>      
                    <div className={styles.icon}></div>
                  </li>
                  <li>
                    <p className={styles.p}>Deficiência visual</p>      
                    <div className={styles.icon}></div>
                  </li>
                  <li>
                    <p className={styles.p}>Deficiência intelectual</p>      
                    <div className={styles.icon}></div>
                  </li>
                  <li>
                    <p className={styles.p}>autismo</p>      
                    <div className={styles.icon}></div>
                  </li>
                </ul>
              </div>
              <div className="col-md-12">
                <div className="text-center">
                  <button
                    type="secundary"
                    border={true}
                    label="Ver todas as patologias"
                    uppercase={true}
                    onClick={()=>this.toggleModal(true)}
                  />
                </div>
                <br/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default HomeRight 