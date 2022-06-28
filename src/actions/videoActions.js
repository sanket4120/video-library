import axios from 'axios';
import {
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
  VIDEO_LIST_FAIL,
  VIDEO_DETAILS_REQUEST,
  VIDEO_DETAILS_SUCCESS,
  VIDEO_DETAILS_FAIL,
} from '../constants/videoConstants';

const getAllVideos = async (dispatch) => {
  dispatch({ type: VIDEO_LIST_REQUEST });
  try {
    const res = await axios.get('/api/videos');
    let videos = res.data.videos;
    dispatch({ type: VIDEO_LIST_SUCCESS, payload: videos });
  } catch (e) {
    dispatch({ type: VIDEO_LIST_FAIL, payload: 'Server Error' });
  }
};

export const getVideoDetails = async (dispatch, videoId) => {
  dispatch({ type: VIDEO_DETAILS_REQUEST });
  try {
    const res = await axios.get(`/api/video/${videoId}`);
    let video = res.data.video;
    dispatch({ type: VIDEO_DETAILS_SUCCESS, payload: video });
  } catch (e) {
    dispatch({ type: VIDEO_DETAILS_FAIL, payload: 'e.message' });
  }
};

export { getAllVideos };
