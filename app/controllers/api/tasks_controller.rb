class Api::TasksController < ApplicationController

    def index
        @tasks = current_user.tasks
        render :index
    end

    def show
        @task = Task.find(params[:id])
    end

    def create
        @task = Task.new(task_params)
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
        @task = current_user.tasks.find(params[:id])
        @task.destroy
        render :show
    end

    private

    def task_params
        params.require(:task).permit(:list_id, :body, :completed)
    end
end
