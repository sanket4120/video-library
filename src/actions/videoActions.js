import axios from 'axios';
import {
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
  VIDEO_LIST_FAIL,
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

export { getAllVideos };
