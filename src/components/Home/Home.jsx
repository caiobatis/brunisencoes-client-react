import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky'
import Header from '../Header/Header'
import AsyncScriptLoader from '../../lib/AsyncScriptLoader'
import Logo from '../Logo/Logo'
import HomeServices from './HomeServices'
import Slider from 'react-slick'
import HomeWhy from './HomeWhy'
import HomeRight from './HomeRight'
import HomeChallenger from './HomeChallenger'
import Buttons from '../Buttons/Buttons'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

import styles from './Home.scss'

import Car1 from '../../images/CAR_1.png';
import Car2 from '../../images/CAR_2.png';
import Car3 from '../../images/CAR_3.png';
import Car4 from '../../images/CAR_4.png';
import Car5 from '../../images/CAR_5.png';
import Car6 from '../../images/CAR_6.png';
import Car7 from '../../images/CAR_7.png';
import Car8 from '../../images/CAR_8.png';
import Car9 from '../../images/CAR_9.png';
import Car10 from '../../images/CAR_10.png';
import Car11 from '../../images/CAR_11.png';
import Car12 from '../../images/CAR_12.png';
import Car13 from '../../images/CAR_13.png';
import Car14 from '../../images/CAR_14.png';
import Car15 from '../../images/CAR_15.png';
import Car16 from '../../images/CAR_16.png';
import Car17 from '../../images/CAR_17.png';
import Car18 from '../../images/CAR_18.png';
import Car19 from '../../images/CAR_19.png';
import Car20 from '../../images/CAR_20.png';
import Car21 from '../../images/CAR_21.png';
import Car22 from '../../images/CAR_22.png';
import Car23 from '../../images/CAR_23.png';
import Car24 from '../../images/CAR_24.png';
import Car25 from '../../images/CAR_25.png';
import Car26 from '../../images/CAR_26.png';
import Car27 from '../../images/CAR_27.png';
import Car28 from '../../images/CAR_28.png';
import Car29 from '../../images/CAR_29.png';


class Routes extends Component {
  render() {

    const settings = {
      dots: false,
      infinite: false,
      centerPadding: 0,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    }
  
    AsyncScriptLoader('https://www.powr.io/powr.js?platform=html')

    const vehicles = [
      {
        id: 1,
        image: Car1,
        brand: 'Nissan',
        model: 'March'
      },
      {
        id: 2,
        image: Car2,
        brand: 'Nissan',
        model: 'Versa'
      },
      {
        id: 3,
        image: Car3,
        brand: 'Nissan',
        model: 'Kicks'
      },
      {
        id: 4,
        image: Car4,
        brand: 'Citrôen',
        model: 'C3'
      },
      {
        id: 5,
        image: Car5,
        brand: 'Citrôen',
        model: 'Air Cross'
      },
      {
        id: 6,
        image: Car6,
        brand: 'Citrôen',
        model: 'C4 Cactus'
      },
      {
        id: 7,
        image: Car7,
        brand: 'Renault',
        model: 'Duster'
      },
      {
        id: 8,
        image: Car8,
        brand: 'Renault',
        model: 'Captur'
      },
      {
        id: 9,
        image: Car9,
        brand: 'Jeep',
        model: 'Renegade'
      },
      {
        id: 10,
        image: Car10,
        brand: 'Toyota',
        model: 'Ethios'
      },
      {
        id: 11,
        image: Car11,
        brand: 'Toyota',
        model: 'Yaris'
      },
      {
        id: 12,
        image: Car12,
        brand: 'Honda',
        model: 'City'
      },
      {
        id: 13,
        image: Car13,
        brand: 'Honda',
        model: 'Fit'
      },
      {
        id: 14,
        image: Car14,
        brand: 'Ford',
        model: 'Ka'
      },
      {
        id: 15,
        image: Car15,
        brand: 'Ford',
        model: 'Eco Sport'
      },
      {
        id: 16,
        image: Car16,
        brand: 'GM/Chevrolet',
        model: 'Ônix'
      },
      {
        id: 17,
        image: Car17,
        brand: 'GM/Chevrolet',
        model: 'Spin'
      },
      {
        id: 18,
        image: Car18,
        brand: 'GM/Chevrolet',
        model: 'Cobalt'
      },
      {
        id: 19,
        image: Car19,
        brand: 'GM/Chevrolet',
        model: 'Prisma'
      },
      {
        id: 20,
        image: Car20,
        brand: 'Volkswagem',
        model: 'Virtus'
      },
      {
        id: 21,
        image: Car21,
        brand: 'Volkswagem',
        model: 'Polo'
      },
      {
        id: 22,
        image: Car22,
        brand: 'Fiat',
        model: 'Argo'
      },
      {
        id: 23,
        image: Car23,
        brand: 'Fiat',
        model: 'Cronos'
      },
      {
        id: 24,
        image: Car24,
        brand: 'Fiat',
        model: 'Mobi'
      },
      {
        id: 25,
        image: Car25,
        brand: 'Pegeout',
        model: 'Allure 2008'
      },
      {
        id: 26,
        image: Car26,
        brand: 'Pegeout',
        model: '208'
      },
      {
        id: 27,
        image: Car27,
        brand: 'Cherry',
        model: 'Tiggo 2'
      },
      {
        id: 28,
        image: Car28,
        brand: 'Hyundai',
        model: 'Creta'
      },
      {
        id: 29,
        image: Car29,
        brand: 'Hyundai',
        model: 'HB20'
      }
    ]

    return (
      <div className={styles.home}>
        <StickyContainer>
          <Header/>
          <HomeWhy/>
          <HomeServices/>
          <HomeRight/>
          {/*<HomeChallenger/>*/}
          <section id="about" className={styles.aboutUs}>
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className={styles.logoCenter}>
                    <Logo
                      type={'secundary'}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <h2 className={styles.h2}>Quem somos</h2>
                  <div className={styles.text}>
                    <i>A BRÜN Isenções é uma empresa de Santos, especializada no processo de isenções que conta com uma equipe de atendimento qualificada e empenhada em garantir que os direitos de seus clientes sejam exercidos de acordo com a legislação brasileira.</i> <br/> <br/>
                    <p className={styles.p}>
                      <b>Nossa missão</b> é proporcionar um atendimento eficiente e eficaz a nossos clientes, garantindo sua satisfação acerca de nossos serviços. <br/> <br/>
                      <b>Nossa visão</b> é ser referência no mercado de assessoria ao público PCD acerca de isenção. <br/> <br/>
                      Buscamos proporcionar a <b>facilidade e agilidade</b> a nossos clientes acerca da burocracia que envolve esse tipo de processo. <br/> <br/>
                      O respeito e exercício de nossos direitos como cidadãos é a nossa preocupação! <br/><br/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.socials}>
            <div className="container">
              <div className="text-center">
                <h2 className={styles.h2}>Acompanhe as novidades da BRÜN Isenções nas midias sociais</h2>
              </div>
            </div>
            <div className="container">
              <div className="powr-social-feed" id="488e7818_1558212176"></div>
            </div>
            <div className="container">
              <div className={styles.flex}>
                <h4 className={styles.h4}>curta no face</h4>
                <div className={styles.iconfacebook}>
                  <a href="https://www.facebook.com/isencoes.brun/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
                <div className={styles.iconinstagram}>
                  <a href="https://www.instagram.com/isencoes.brun/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <h4 className={styles.h4}>curta no insta</h4>
              </div>
            </div>
          </section>
          <section id="vehicles" className={styles.vehicles}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className={styles.h2}>Veículos PCD</h2>
                </div>
                <div className="col-md-12">
                  <div className={styles.items}>
                    <Slider {...settings}>
                      {
                        vehicles.map((item, i) => (
                          <div className={styles.item} key={i}>
                            <div className={styles.image}>
                              <img src={item.image} alt=""/>
                            </div>
                            <div className={styles.text}>
                              <div className={styles.brand}>{item.brand}</div>
                              <div className={styles.model}>{item.model}</div>
                            </div>
                            <div className={styles.actions}>
                              <Buttons
                                label='Eu quero'
                                type='primary'
                              />
                            </div>
                          </div>
                        ))
                      }
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Contact/>
          <Footer/>
        </StickyContainer>
      </div>
    )
  }
}

export default Routes