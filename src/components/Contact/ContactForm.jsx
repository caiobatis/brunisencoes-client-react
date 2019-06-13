import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import Buttons from '../Buttons/Buttons'
import styles from './Contact.scss'

let ContactForm = props => {
  const { 
    handleSubmit,
    success,
    error,
    loading,
    vehicle = 'teste'
  } = props


  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.textField}>
        <Field name="name" component="input" type="text" />
        <label htmlFor="name">Nome</label>
      </div>
      <div className={styles.textField}>
        <Field name="email" component="input" type="email" />
        <label htmlFor="email">E-mail</label>
      </div>
      <div className={styles.textField}>
        <Field name="phone" component="input" type="text" />
        <label htmlFor="phone">Telefone</label>
      </div>
      <div className={styles.textField}>
        <Field name="vehicle" component="input" type="text" />
        <label htmlFor="name">Veículo PCD</label>
        <Field name="vehicleId" component="input" type="hidden" />
      </div>
      <div className={styles.textField}>
        <Field name="notes" component="textarea" />
        <label htmlFor="phone">Escreva o motivo do contato</label>
      </div>
      {
        loading && (
          <div className={styles.textField}>
            <label>carregando...</label>
          </div>
        )
      }
      {
        error && (
          <div className={styles.textField}>
            <label>Aconteceu algo de errado, tente novamente</label>
          </div>
        )
      }
      {
        success && (
          <div className={styles.textField}>
            <label>Sucesso, mensagem enviada ;)</label>
          </div>
        )
      }

      <Buttons
        type='secundary'
        clear={true}
        full={true}
        uppercase={true}
        label='Enviar'
      />
    </form>
  )
}

const mapStateToProps = (state, props) => ({
  initialValues: {
    vehicle: props.vehicle ? `${props.vehicle.brand} ${props.vehicle.model}`: '',
    vehicleId: props.vehicle ? props.vehicle.id : ''
  }
})

export default connect(mapStateToProps)(reduxForm({
  form: 'contact',
  enableReinitialize: true
})(ContactForm))