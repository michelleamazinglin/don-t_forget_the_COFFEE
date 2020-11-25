class Api::TasksController < ApplicationController

    def index
        # debugger
        @tasks = List.find(params[:list_id]).tasks
        render :index
    end

    def show 
        @task = List.find(params[:list_id]).Task.find(params[:id])
    end

    def create
        @task = Task.new(task_params)
        @task.list_id = task_params[:list_id]
        # debugger
        if @task.save
            render :show
        else
            render json: ['invalid, please try again :(']
        end
    end

    def update
        @task = current_user.tasks.find_by(id: params[:id])

        if @task.update_attributes(task_params)
            render :show
        else
            render json: ['invalid, please try again :(']
        end
    end

    def destroy
        # debugger
        @task = List.find(params[:list_id]).tasks.find(params[:id])
        @task.destroy
        render :show
    end

    private

    def task_params
        params.require(:task).permit(:list_id, :body, :completed)
    end
end
