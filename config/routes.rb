Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'audios#index'
  resources :audios
  get 'upload/', to: 'audios#new', as: 'upload'
  post 'upload/', to: 'audios#create', as: 'upload_data'
end
