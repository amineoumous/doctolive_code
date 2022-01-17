
import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import closeImg from './close.svg'

// import { Transition } from 'react-transition-group';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class ReactFancyBox extends Component {
  state = {
    show: false,
    maxHeight:  0
  }

  setShow = () => {
    this.setState({
      show: true,
    })
    // this.props.onOpen()
  }

  handleClickBox = (event) => {
    if (this.box.contains(event.target)) {
      return
    }
    this.close()
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  renderThumbnail = () => {
    const {thumbnail, image, defaultThumbnailWidth, defaultThumbnailHeight} = this.props

    if (!thumbnail) {
      return (
        <div onClick={this.setShow} className="thumbnail">
          <img
            style={{width: defaultThumbnailWidth, height: defaultThumbnailHeight, objectFit: 'cover'}}
            className="img-fluid"
            src={image} alt="thumbnail"/>
        </div>
      )
    }

    return (
      <div onClick={this.setShow} className="thumbnail">
        <img src={thumbnail} className="img-fluid" alt="thumbnail"/>
      </div>
    )
  }
  componentDidMount(){
    this.setState({maxHeight: window.innerHeight * 0.7})

  }

  render () {
    const {image, caption} = this.props

    const imageStyle = {
      maxHeight: this.state.maxHeight,
      height: "100%",
      width: 'auto'
    }

    return (
      <div className="react-fancybox">
        {this.renderThumbnail()}
   
        <TransitionGroup >
          {this.state.show?  (
            <CSSTransition
              timeout={500}
              classNames="item"
            >
              <div className="box">
                <div ref={box => this.box = box} className="image-box">
                     <img onClick={this.close} className="img-fluid" className="close-btn" src="/image/close.svg" alt="close"/>
                    <img style={imageStyle} className="img-fluid" src={image} alt="original"/>
                    {caption && <div className="caption">{caption}</div>}
                  </div>
              </div>
             
            </CSSTransition>
          ): null}
        </TransitionGroup>


      </div>
    )
  }
}

ReactFancyBox.defaultProps = {
  thumbnail: '',
  image: '',
  defaultThumbnailWidth: 300,
  defaultThumbnailHeight: 250,
  caption: '',
  onOpen: () => {},
  onClose: () => {},
  showCloseBtn: true,
}

ReactFancyBox.propTypes = {
  thumbnail: PropTypes.string,
  image: PropTypes.string,
  defaultThumbnailWidth: PropTypes.number,
  defaultThumbnailHeight: PropTypes.number,
  caption: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  showCloseBtn: PropTypes.bool,
}

export default ReactFancyBox
