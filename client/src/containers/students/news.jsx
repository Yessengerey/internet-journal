import React, { Component } from 'react';

import NewsFeed from '../../components/utility/newsfeed/newsfeed.jsx'
;
export default class News extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('NEWS', this.props.quarters);
  }

  render() {
    return (
      <NewsFeed title={'Новости/Ивенты за'} quarters={this.props.quarters}/>
    )
  }
}
