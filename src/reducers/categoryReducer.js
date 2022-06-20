import { v4 as uuid } from 'uuid';
import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
} from '../constants/categoryConstants';

const categoryReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CATEGORY_REQUEST:
      return { loading: true, categories: [] };
    case CATEGORY_SUCCESS:
      return {
        loading: false,
        categories: [{ _id: uuid(), categoryName: 'all' }, ...payload],
      };
    case CATEGORY_FAIL:
      return { loading: false, error: payload };
    default:
      return state;
  }
};

export { categoryReducer };
