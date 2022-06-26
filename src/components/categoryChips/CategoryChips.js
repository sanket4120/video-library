import { useEffect } from 'react';
import { getCategories } from '../../actions/categoryActions';
import { VIDEO_LIST_APPLY_FILTER } from '../../constants/videoConstants';
import { useCategory } from '../../context/categoryContext';
import { useVideos } from '../../context/videosContext';
import { CategoryChip } from './CategoryChip';

const CategoryChips = () => {
  const {
    videoListState: { filters },
    setVideoList,
  } = useVideos();

  const {
    categoryState: { categories },
    setCategory,
  } = useCategory();

  useEffect(() => {
    getCategories(setCategory);
  }, [setCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVideoList({
      type: VIDEO_LIST_APPLY_FILTER,
      payload: { [name]: value },
    });
  };

  return (
    <ul className='mt-2 mb-4'>
      {categories &&
        categories.map((category) => (
          <li className=' txt-capitalize inline-block' key={category._id}>
            <input
              type='radio'
              name='category'
              value={category.categoryName}
              id={category.categoryName}
              checked={
                filters.category.toLowerCase() ===
                category.categoryName.toLowerCase()
              }
              className='hide'
              onChange={handleChange}
            />

            <label htmlFor={category.categoryName}>
              <CategoryChip
                category={category.categoryName}
                isActive={
                  filters.category.toLowerCase() ===
                  category.categoryName.toLowerCase()
                }
              />
            </label>
          </li>
        ))}
    </ul>
  );
};

export { CategoryChips };
