import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import API from './../../utils/API';
import VisibilitySensor from 'react-visibility-sensor';

class TimelineEvent extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  editEvent(eventId) {
    API.getEvent(eventId).then(res =>
      this.setState({ selectedEvent: res }, () => console.log(this.state))
    );
  }

  render() {
    const {
      id,
      isLoggedIn,
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
      imgURL
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
                  src={
                    !imgURL
                      ? 'https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png'
                      : imgURL
                  }
                  alt={name}
                />
              </div>
              <h3 className='vertical-timeline-element-title'>{name}</h3>
              {!director ? (
                <h4 className='vertical-timeline-element-subtitle'>
                  Directed by {director}
                </h4>
              ) : null}

              <p>{description}</p>
              <p>
                {type} at {location}, {concertSeason}
              </p>
              <span className='vertical-timeline-element-primaryDate'>
                {primaryDate}{' '}
                {isLoggedIn ? (
                  <span id='editButton'>
                    ||{' '}
                    <i
                      className='material-icons'
                      onClick={() => this.editEvent(id)}
                    >
                      edit
                    </i>
                  </span>
                ) : null}
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
  primaryDate: PropTypes.string,
  position: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({}),
  type: PropTypes.string,
  name: PropTypes.string,
  director: PropTypes.string,
  location: PropTypes.string,
  concertSeason: PropTypes.string,
  description: PropTypes.string,
  imgURL: PropTypes.string
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
  imgURL: ''
};

export default TimelineEvent;
