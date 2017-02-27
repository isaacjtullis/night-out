Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'homes#index'
  resources :home

  #namespace :api do
  #  namespace :v1 do
  #    resources :weathers, only: [:index]
  #  end
  #end
end
