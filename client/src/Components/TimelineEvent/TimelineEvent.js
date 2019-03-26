import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

class TimelineEvent extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const {
      id,
      children,
      icon,
      iconStyle,
      iconOnClick,
      primaryDate,
      position,
      style,
      className,
      visibilitySensorProps,
      type,
      name,
      director,
      location,
      concertSeason,
      description,
      imageURL
    } = this.props;

    const { visible } = this.state;

    return (
      <div
        id={id}
        className={classNames(className, 'vertical-timeline-element', {
          'vertical-timeline-element--left': position === 'left',
          'vertical-timeline-element--right': position === 'right',
          'vertical-timeline-element--no-children': children === ''
        })}
        style={style}
      >
        <VisibilitySensor
          {...visibilitySensorProps}
          onChange={this.onVisibilitySensorChange}
        >
          <div>
            <span // eslint-disable-line jsx-a11y/no-static-element-interactions
              style={iconStyle}
              onClick={iconOnClick}
              className={`vertical-timeline-element-icon ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              {icon}
            </span>

            <div
              className={`vertical-timeline-element-content ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              <div className='imageBlock'>
                <img
                  className='responsive eventImg'
                  src={imageURL}
                  alt={name}
                />
              </div>
              <h3 className='vertical-timeline-element-title'>{name}</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Directed by {director}
              </h4>
              <p>{description}</p>
              <p>
                {type} {location} {concertSeason}
              </p>
              <span className='vertical-timeline-element-primaryDate'>
                {primaryDate}
              </span>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

TimelineEvent.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  icon: PropTypes.element,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  style: PropTypes.shape({}),
  primaryDate: PropTypes.node,
  position: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({}),
  type: PropTypes.string,
  name: PropTypes.string,
  director: PropTypes.string,
  location: PropTypes.string,
  concertSeason: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string
};

TimelineEvent.defaultProps = {
  id: '',
  children: '',
  className: '',
  icon: null,
  iconStyle: null,
  style: null,
  primaryDate: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 80 } },
  type: '',
  name: '',
  director: '',
  location: '',
  concertSeason: '',
  description: '',
  imageURL:
    'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png'
};

export default TimelineEvent;
