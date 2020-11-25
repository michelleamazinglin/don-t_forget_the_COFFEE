import * as APIUtil from '../util/task';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

const receiveTasks = tasks => {
    return {
        type: RECEIVE_ALL_TASKS,
        tasks: tasks
    }
};

const receiveTask = task => {
    return {
        type: RECEIVE_TASK,
        task: task
    }
};

const removeTask = taskId => {
    return {
        type: REMOVE_TASK,
        taskId: taskId
    }
};

export const fetchTasks = (listId) => dispatch => {
    return APIUtil.fetchTasks(listId)
        .then(tasks => dispatch(receiveTasks(tasks)))

}

export const fetchTask = (listId, taskId) => dispatch => {
    return APIUtil.fetchTask(listId, taskId)
        .then(task => dispatch(removeTask(task)))
}

export const createTask = (task, listId) => dispatch => {
    // debugger
    return APIUtil.createTask(task, listId)
        .then(createdTask => dispatch(receiveTask(createdTask)))
}

export const updateTask = (task, listId) => dispatch => {
    return APIUtil.updateTask(task, listId)
        .then(updatedTask => dispatch(receiveTask(updatedTask)))
}

export const deleteTask = (taskId, listId) => dispatch => {
    return APIUtil.deleteTask(taskId, listId)
        .then(() => dispatch(removeTask(taskId)))
}
