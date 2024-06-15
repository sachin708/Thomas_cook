// actions/index.js
export const ADD_GROUP = 'ADD_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const UPDATE_GROUP_RANGE = 'UPDATE_GROUP_RANGE';
export const SET_TODO_STATUSES = 'SET_TODO_STATUSES';

export const addGroup = () => ({
  type: ADD_GROUP,
});

export const deleteGroup = (index) => ({
  type: DELETE_GROUP,
  index,
});

export const updateGroupRange = (index, range) => ({
  type: UPDATE_GROUP_RANGE,
  index,
  range,
});

export const setTodoStatuses = (statuses) => ({
  type: SET_TODO_STATUSES,
  statuses,
});

export const fetchTodoStatuses = (groups) => async (dispatch) => {
  try {
    const statusPromises = groups.map(group =>
      Promise.all(
        Array.from({ length: group.to - group.from + 1 }, (_, i) =>
          fetch(`https://jsonplaceholder.typicode.com/todos/${group.from + i}`)
            .then(res => res.json())
        )
      )
    );

    const statuses = await Promise.all(statusPromises);
    dispatch(setTodoStatuses(statuses));
  } catch (error) {
    console.error('Failed to fetch todo statuses', error);
  }
};

