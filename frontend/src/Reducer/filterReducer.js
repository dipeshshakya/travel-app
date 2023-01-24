const filterReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_TOURS':
      return {
        ...state,
        filter_tours: [...action.payload],
        all_tours: [...action.payload],
      };

    
    case 'GET_SORT_VALUE':
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);
      return {
        ...state,
        sorting_value: action.payload,
      };

    case 'SORTING_TOURS':
      let newSortData;
      let tempSortTour = [...action.payload];

      function sortingTour(a, b) {
        if (state.sorting_value === 'lowest') {
          console.log('call');
          return a.price - b.price;
        }

        if (state.sorting_value === 'highest') {
          console.log('call');
          return b.price - a.price;
        }

        if (state.sorting_value === 'a-z') {
          return a.name.localeCompare(b.name);
        }

        if (state.sorting_value === 'z-a') {
          return b.name.localeCompare(a.name);
        }
      }

      newSortData = tempSortTour.sort(sortingTour);
      console.log('newsoprt dat' + newSortData[0]);

      return {
        ...state,
        filter_tours: newSortData,
      };

    case 'UPDATE_FILTERS_VALUE':
      const { name, value } = action.payload;

      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };


    default:
      return state;
  }
};

export default filterReducer;
