export const fetchTasks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/tasks',
    })
);

export const fetchTask = taskId => (
    $.ajax({
        method: 'GET',
        url: `/api/tasks/${taskId}`,
    })
);

export const createTask = (task) => {
    return $.ajax({
        url: "/api/tasks",
        method: "POST",
        data: { task },
    });
};

export const updateTask = task => (
    $.ajax({
        method: 'PATCH',
        url: `/api/tasks/${task.id}`,
        data: { task: task },
    })
);

export const deleteTask = taskId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/tasks/${taskId}`,
    })
);
