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
          <div className={styles.container}>
          <div
            className={styles.close}
            onClick={() => this.toggleModal(false)}
          >
            <i className="fa fa-times"></i>
          </div>
            <div className={styles.pathologyContent}>
              <h3 className="h3">Todos diagnósticos que podem ter direito</h3>
              <div className={styles.items}>
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
                <ul className="list">
                  <li>Mastectomia (Retirada da Mama)</li>
                  <li>Membros com Deformidades Congênitas ou Adquiridas</li>
                  <li>Monoparesia</li>
                  <li>Monoplegia</li>
                  <li>Má Formação</li>
                  <li>Nanismo (homens menores que '145cm' e mulheres menores que '140cm')</li>
                  <li>Neuropatias Diabéticas</li>
                  <li>Ostomia</li>
                  <li>Paralisia Cerebral</li>
                  <li>Paraparesia</li>
                  <li>Paraplegia</li>
                  <li>Parkinson</li>
                  <li>Poliomielite</li>
                  <li>Problemas Graves de Coluna</li>
                  <li>Prótese Interna ou Externa</li>
                  <li>Renal Crônico (Fístula)</li>
                  <li>Síndrome de Deficiência Imunológica (HIV)</li>
                  <li>Síndrome do Túnel do Carpo crônica com sequelas</li>
                  <li>Talidomida</li>
                  <li>Tendinite Crônica</li>
                  <li>Tetraparesia</li>
                  <li>Tetraplegia</li>
                  <li>Triparesia</li>
                  <li>Triplegia</li>
                </ul>
              </div>
              <h3 onClick={() => this.toggleModal(false)}>fechar</h3>
            </div>
          </div>
        </div>
        <section id="howcan" className={styles.whoTitle}>
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
                    className={styles.buttonModal}
                    onClick={() => this.toggleModal(true)}
                  >
                    Ver todas as patologias
                  </button>
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