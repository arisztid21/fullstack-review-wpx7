import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setMemes } from '../redux/reducer';

class Memes extends Component {
  componentDidMount() {
    axios.get('/api/memes').then(response => {
      this.props.setMemes(response.data);
    });
  }

  render() {
    const { memesList } = this.props;
    const mappedList = memesList.map(meme => {
      return <img key={meme.url} src={meme.url} />;
    });

    return (
      <div>
        <h1>Memes</h1>
        {mappedList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { memesList } = state;
  return { memesList };
}

const mapDispatchToProps = {
  setMemes
}

export default connect(mapStateToProps, mapDispatchToProps)(Memes);