export const fetchLists = () => (
    $.ajax({
        method: 'GET',
        url: '/api/lists',
    })
);

export const fetchList = listId => (
    $.ajax({
        method: 'GET',
        url: `/api/lists/${listId}`,
    })
);

export const createList = list => (
    $.ajax({
        method: 'POST',
        url: '/api/lists/',
        data: { list: list },
    })
);

export const updateList = list => (
    $.ajax({
        method: 'PATCH',
        url: `/api/lists/${list.id}`,
        data: { list: list },
    })
);

export const deleteList = listId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/lists/${listId}`,
    })
);



//  api_lists GET / api / lists(.: format)                                                                     api / lists#index {: format =>: json }
//            POST / api / lists(.: format)                                                                     api / lists#create {: format =>: json }
//   api_list GET / api / lists /: id(.: format)                                                                 api / lists#show {: format =>: json }
//            PATCH / api / lists /: id(.: format)                                                                 api / lists#update {: format =>: json }
//            PUT / api / lists /: id(.: format)                                                                 api / lists#update {: format =>: json }
//            DELETE / api / lists /: id(.: format)                                                                 api / lists#destroy {: format =>: json }
