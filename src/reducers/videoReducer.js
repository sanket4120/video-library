import {
  VIDEO_LIST_REQUEST,
  VIDEO_LIST_SUCCESS,
  VIDEO_LIST_FAIL,
  VIDEO_LIST_APPLY_FILTER,
  VIDEO_LIST_REMOVE_FILTER,
} from '../constants/videoConstants';

const initialState = {
  videos: [],
  filters: {
    searchQuery: '',
    category: 'all',
  },
};

const videoListReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case VIDEO_LIST_REQUEST:
      return { ...state, error: null, loading: true, videos: [] };
    case VIDEO_LIST_SUCCESS:
      return { ...state, loading: false, videos: payload };
    case VIDEO_LIST_FAIL:
      return { ...state, loading: false, videos: [], error: payload };
    case VIDEO_LIST_APPLY_FILTER:
      return { ...state, filters: { ...state.filters, ...payload } };
    case VIDEO_LIST_REMOVE_FILTER:
      return { ...state, filters: { ...initialState.filters } };
    default:
      return state;
  }
};

export { initialState, videoListReducer };
