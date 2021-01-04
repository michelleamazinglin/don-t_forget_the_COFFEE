export const fetchTasks = (listId) => (
    $.ajax({
        method: 'GET',
        url: `/api/lists/${listId}/tasks`,
    })
);

export const fetchAllTasks = () => (
    $.ajax({
        method: 'GET',
        url: `/api/tasks`,
    })
);


export const fetchTask = ( listId, taskId ) => (
    $.ajax({
        method: 'GET',
        url: `/api/lists/${listId}/tasks/${taskId}`,
    })
);

export const createTask = (task, listId) => {
    return $.ajax({
        url: `/api/lists/${listId}/tasks`,
        method: "POST",
        data: { task },
    });
};

export const updateTask = (task, listId) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/lists/${listId}/tasks/${task.id}`,
        data: { task: task },
    })
);

export const deleteTask = (taskId, listId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}/tasks/${taskId}`,
    })
);
