# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session GET    /api/session(.:format)                                                                   api/sessions#show {:format=>:json}
#                           DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                 api_lists GET    /api/lists(.:format)                                                                     api/lists#index {:format=>:json}
#                           POST   /api/lists(.:format)                                                                     api/lists#create {:format=>:json}
#                  api_list GET    /api/lists/:id(.:format)                                                                 api/lists#show {:format=>:json}
#                           PATCH  /api/lists/:id(.:format)                                                                 api/lists#update {:format=>:json}
#                           PUT    /api/lists/:id(.:format)                                                                 api/lists#update {:format=>:json}
#                           DELETE /api/lists/:id(.:format)                                                                 api/lists#destroy {:format=>:json}
#                      root GET    /                                                                                        static_pages#root
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]

    resources :lists, only: [:index, :show, :create, :update, :destroy] do
      resources :tasks, only: [:create, :index, :show, :update, :destroy]
    end

    resources :tasks, only: [:index, :create]

    
  end

  root to: "static_pages#root"
end
