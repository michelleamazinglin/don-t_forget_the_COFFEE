class Api::ListsController < ApplicationController

    # shows all lists
    def index
        @lists = current_user.lists
        render :index
    end

    # show each list
    def show
        @list = current_user.lists.find_by(id: params[:id])
        render :show
    end

    # create a list
    def create
        @list = List.new(list_params)
        @list.user_id = current_user.id;

        if @list.save
            render :show
        else
            render json: ['No name entered. Please choose a name. :D']
        end
    end

    # edit a list
    def update
        @list = current_user.list.find_by(id: params[:id])

        if @list.update_attributes(list_params)
            render :show
        else
            render json: ['No name entered. Please choose a name. :D']
        end
    end

    # delete a list
    def destroy
        list = current_user.list.find_by(id: params[:id])
        list.destroy
        render json: {}
    end

    private
    def list_params
        params.require(:list).permit(:user_id, :title)
    end
end