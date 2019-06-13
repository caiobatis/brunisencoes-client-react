import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import {
  sendContact
} from '../../actions/contactActions'
import ContactForm from '../Contact/ContactForm'
import styles from './Contact.scss'

class Contact extends Component {
  constructor (props) {
    super(props)

    this.submit = this.submit.bind(this)
  }

  submit = values => {
    if(typeof(values['name']) == 'undefined' || typeof(values['email']) == 'undefined' || typeof(values['phone']) == 'undefined' || typeof(values['notes']) == 'undefined') {
      alert('Você deve preencher todos os campos!')
      return false
    }

    this.props.sendContact(values)
  }

  render() {

    const {
      contact
    } = this.props

    return (
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className={styles.h2}>Contato</h2>
              <p className={styles.title}>Aguardamos o seu contato por qualquer que seja o canal</p>
            </div>
            <div className="col-md-6">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.234608717478!2d-46.32996308476481!3d-23.952142682024785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03745d931789%3A0xe39d01e5e54271ad!2sAv.+Senador+Feij%C3%B3%2C+686+-+Encruzilhada%2C+Santos+-+SP%2C+11050-220!5e0!3m2!1sen!2sbr!4v1559266884654!5m2!1sen!2sbr"
              width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="form">
                <br/>
                <div className="text-center">
                  <p className={styles.p}><b>Escreva para nós que <br/> responderemos logo em seguida</b></p>
                </div>
                <ContactForm
                  onSubmit={this.submit}
                  loading={contact.loading}
                  success={contact.success}
                  error={contact.error}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


const mapStateToProps = state => ({
  ...state,
  contact: state.contactReducer
})

const mapDispatchToProps = dispatch => bindActionCreators({
  sendContact
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Contact);