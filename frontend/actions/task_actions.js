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

export const fetchTasks = () => dispatch => {
    return APIUtil.fetchTasks()
        .then(tasks => dispatch(receiveTasks(tasks)))
}

export const fetchTask = taskId => dispatch => {
    return APIUtil.fetchTask(taskId)
        .then(task => dispatch(removeTask(task)))
}

export const createTask = task => dispatch => {
    return APIUtil.createTask(task)
        .then(createdTask => dispatch(receiveTask(createdTask))),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )
}

export const updateTask = task => dispatch => {
    return APIUtil.updateTask(task)
        .then(updatedTask => dispatch(receiveTask(updatedTask))),
        err => (
            dispatch(receiveErrors(err.responseJSON))
        )
}

export const deleteTask = taskId => dispatch => {
    return APIUtil.deleteTask(taskId)
        .then(() => dispatch(removeTask(taskId)))
}
