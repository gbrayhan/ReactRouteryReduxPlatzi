import React, { useEffect } from 'react';
import '../assets/styles/components/Player.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideoSource, resetVideoSource } from '../actions';

const Player = (props) => {
  const { match: { params: { id } }, history, getVideoSource, playing, resetVideoSource } = props;
  const hasPlaying = playing !== null;
  debugger;

  const handlePlay = (idPlayer) => {
    getVideoSource(idPlayer);
  };

  useEffect(() => {
    handlePlay(id);
    return () => {
      resetVideoSource();
    };
  }, []);

  return (
    hasPlaying && (
      <div className='Player'>
        <video type='video/mp4' controls autoPlay>
          <source src={playing.source} type='video/mp4' />
        </video>
        <div className='Player-back'>
          <button type='button' onClick={() => history.goBack()}>Regresar</button>
        </div>
      </div>
    ));
};

Player.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  getVideoSource: PropTypes.func.isRequired,
  resetVideoSource: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getVideoSource,
  resetVideoSource,
};
const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);

