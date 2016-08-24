import React from 'react'
import Classnames from 'classnames'

class GalleryView extends React.Component {
  constructor () {
    super()
    this.state = {
      direction: 'right',
      previousIndex: 0,
      currentIndex: 0
    }
  }

  directionClickHandler (direction) {
    let currentIndex = parseInt(this.state.currentIndex, 10)
    let numItems = this.props.images.length - 1
    let newIndex = 0
    switch (direction) {
      case 'left':
        newIndex = currentIndex > 0 ? currentIndex - 1 : numItems
        break
      case 'right':
        newIndex = currentIndex < numItems ? currentIndex + 1 : 0
        break
    }

    this.setState({
      direction: direction,
      previousIndex: currentIndex,
      currentIndex: newIndex
    })
  }

  render () {
    return (<div id='reactCarousel' className='carousel slide'>
              <div className='carousel-inner'>
                {this.props.images.map(function (image, index) {
                   let itemClasses = Classnames({
                     item: true,
                     active: this.state.currentIndex === index
                   })
                   return (
                     <div className={itemClasses} key={index}>
                       <img src={image.url} style={{ height: 500 + 'px', margin: 'auto' }} />
                     </div>
                   )
                 }, this)}
              </div>
              <a className='left carousel-control' onClick={this.directionClickHandler.bind(this, 'left')}><span className='glyphicon glyphicon-chevron-left'></span></a>
              <a className='right carousel-control' onClick={this.directionClickHandler.bind(this, 'right')}><span className='glyphicon glyphicon-chevron-right'></span></a>
            </div>)
  }
}
export default GalleryView
