import React, { Component } from 'react';

import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import IconButton from 'material-ui/IconButton';

import style from '../../../../../styles/utility/newsitem.css';

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.tile_outer_container}>
        <div className={style.img_container} style={{backgroundImage: `url(${this.props.img})`}}>
          <div className={style.info_button}>
            <IconButton
              tooltip='Посмотреть'
              tooltipPosition='bottom-left'>
              <InfoIcon color={'rgb(111, 111, 111)'}/>
            </IconButton>
          </div>
          <div className={style.title_container}>
            <span>{this.props.title}</span>
          </div>

        </div>
        <div className={style.description_container}>
          <span>{this.props.description}</span>
        </div>
      </div>
    )
  }
}
