import css from './modal.module.css';
import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  handleClose = e => {
    if (e.code === 'Escape') {
      this.props.handleModalClose();
    }
  };

  handleModalClose = e => {
    if (e.currentTarget === e.target) {
      this.props.handleModalClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div onClick={this.handleModalClose} className={css.overlay}>
        <div className={css.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
