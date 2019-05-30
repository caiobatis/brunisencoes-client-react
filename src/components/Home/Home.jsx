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
        image: 'https://img2.static.reweb.io/tiny/0/0/dealers.rewebmkt.com/images/20181129041042-miniatura-creta.png',
        brand: 'Hyundai',
        model: 'Creta'
      },
      {
        id: 1,
        image: 'https://production.autoforce.com/uploads/version/profile_image/2576/model_main_comprar-1-6-s-mt5_f20a97d6b6.png',
        brand: 'Nissan',
        model: 'Kicks'
      },
      {
        id: 1,
        image: 'https://production.autoforce.com/uploads/version/profile_image/3053/model_main_comprar-1-8-at-flex_6264ed281f.png',
        brand: 'Jeep',
        model: 'Renegade'
      },
      {
        id: 1,
        image: 'https://www.chevroletnova.com.br/Upload/CorReferente_16112017084454.png',
        brand: 'Renault',
        model: 'Captur'
      },
      {
        id: 1,
        image: 'https://www.chevroletnova.com.br/Upload/CorReferente_16112017084454.png',
        brand: 'Citrôen',
        model: 'C4 Cactus'
      },
      {
        id: 1,
        image: 'https://www.chevroletnova.com.br/Upload/CorReferente_16112017084454.png',
        brand: 'GM/Chevrolet',
        model: 'Spin'
      },
      {
        id: 1,
        image: 'https://www.chevroletnova.com.br/Upload/CorReferente_16112017084454.png',
        brand: 'Volkswagem',
        model: 'Virtus'
      },
      {
        id: 1,
        image: 'https://catalogo.webmotors.com.br/imagens/prod/347716/TOYOTA_YARIS_1.3_16V_FLEX_XL_MANUAL_3477160825488953.png?s=fill&w=440&h=330&q=80&t=true',
        brand: 'Toyota',
        model: 'Yaris'
      },
      {
        id: 1,
        image: 'https://carros2019.com.br/wp-content/uploads/2018/01/lx_honda_sensing_10456_crystal_black_pearl_front.png',
        brand: 'Honda',
        model: 'Fit'
      },
      {
        id: 1,
        image: 'https://www.chevroletnova.com.br/Upload/CorReferente_16112017084454.png',
        brand: 'Pegeout',
        model: 'Allure 2008'
      },
      {
        id: 1,
        image: 'https://catalogo.webmotors.com.br/imagens/prod/347716/TOYOTA_YARIS_1.3_16V_FLEX_XL_MANUAL_3477160825488953.png?s=fill&w=440&h=330&q=80&t=true',
        brand: 'Ford',
        model: 'Eco Sport'
      },
      {
        id: 1,
        image: 'https://carros2019.com.br/wp-content/uploads/2018/01/lx_honda_sensing_10456_crystal_black_pearl_front.png',
        brand: 'Cherry',
        model: 'Tiggo 2'
      },
      {
        id: 1,
        image: 'https://carros2019.com.br/wp-content/uploads/2018/01/lx_honda_sensing_10456_crystal_black_pearl_front.png',
        brand: 'Fiat',
        model: 'Cronos'
      }
    ]

    return (
      <div className={styles.home}>
        <StickyContainer>
          <Header/>
          <HomeWhy/>
          <HomeServices/>
          <HomeRight/>
          <HomeChallenger/>
          <section className={styles.aboutUs}>
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
                    <i>A Brun Isenções é uma empresa de Santos, especializada no processo de isenções que conta com uma equipe de atendimento qualificada e empenhada em garantir que os direitos de seus clientes sejam exercidos de acordo com a legislação brasileira.</i> <br/> <br/>
                    <p className={styles.p}>
                      <b>Nossa missão</b> é proporcionar um atendimento eficiente e eficaz a nossos clientes, garantindo sua satisfação acerca de nossos serviços. <br/> <br/>
                      <b>Nossa visão</b> é ser referência no mercado de assessoria ao público PCD acerca de isenção. <br/> <br/>
                      Buscamos proporcionar a <b>facilidade e agilidade</b> a nossos clientes acerca da burocracia que envolve esse tipo de processo. <br/> <br/>
                      O respeito e exercício de nossos direitos como cidadãos é a nossa preocupação! <br/><br/>
                      <strong>Você tem o direito e a Free, isenções.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.socials}>
            <div className="container">
              <div className="text-center">
                <h2 className={styles.h2}>Acompanhe as novidades da Brun Isenções nas midias sociais</h2>
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
          <section className={styles.vehicles}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className={styles.h2}>Veículos PCD</h2>
                </div>
                <div className="col-md-12">
                  <div className={styles.items}>
                    <Slider {...settings}>
                      {
                        vehicles.map((item, i)=> (
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