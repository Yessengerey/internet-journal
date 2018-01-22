import React, { Component } from 'react';

import InteractiveTitle from '../interactiveTitle.jsx';

// every news segment needs a title, image, description, readOnly depending on user
// the newsfeed needs a newsfeedTitle which will have an interactive element

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('NEWSFEED PROPS', this.props.quarters);
  }

  render() {
    return (
      <div>
        <InteractiveTitle title={this.props.title} type={'news'} dropDownItems={this.props.quarters}/>
        <div>

        </div>
      </div>
    )
  }
}
