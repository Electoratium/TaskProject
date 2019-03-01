import {
  FETCH_TASKS, ADD_TASK, EDIT_TASK, SET_SORT,
} from '../actions/tasks';

const initialState = {
  page: 1,
  sortField: null,
  sortByDesk: true,
};

let maxNmbTabs, nmbTasks, newTasks, sortedTasks, isSortByDesk, result;

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        currTaskTab: action.payload.currTasks,
        totalTasks: parseInt(action.payload.total, 10),
        page: parseInt(action.payload.page, 10),
      };
    case ADD_TASK:
      nmbTasks = parseInt(state.totalTasks, 10) + 1;

      maxNmbTabs = (nmbTasks / 3) % 1 === 0
        ? parseInt(nmbTasks / 3, 10)
        : parseInt(nmbTasks / 3, 10) + 1;

      return {
        ...state,
        currTaskTab: maxNmbTabs === state.page
          ? [
            ...state.currTaskTab,
            action.payload,
          ]
          : state.currTaskTab,
        totalTasks: nmbTasks,
      };
    case SET_SORT:
      isSortByDesk = !state.sortField || state.sortField === action.payload
        ? !state.sortByDesk
        : false;


      sortedTasks = [...state.currTaskTab].sort((taskA, taskB) => {
        if (action.payload === 'status') {
          return isSortByDesk
            ? taskA[action.payload] - taskB[action.payload]
            : taskB[action.payload] - taskA[action.payload];
        }

        if (isSortByDesk) {
          result = taskA[action.payload] > taskB[action.payload]
            ? -1
            : taskA[action.payload] < taskB[action.payload]
              ? 1
              : 0;
        } else {
          result = taskA[action.payload] > taskB[action.payload]
            ? 1
            : taskA[action.payload] < taskB[action.payload]
              ? -1
              : 0;
        }

        return result;
      });

      return {
        ...state,
        currTaskTab: sortedTasks,
        sortField: action.payload,
        sortByDesk: isSortByDesk,
      };
    case EDIT_TASK:
      newTasks = state.currTaskTab.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload,
          };
        }
        return task;
      });

      return {
        ...state,
        currTaskTab: newTasks,
      };
    default:
      return { ...state };
  }
}
