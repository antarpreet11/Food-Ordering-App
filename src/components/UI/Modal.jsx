import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.toggleCartHandler}></div>
  )
}

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalIdElement = document.getElementById('overlays')

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop toggleCartHandler={props.toggleCartHandler}/>, portalIdElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalIdElement)}
    </>
  )
}

export default Modal