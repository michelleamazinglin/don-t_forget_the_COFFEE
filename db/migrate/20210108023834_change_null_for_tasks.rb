class ChangeNullForTasks < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :list_id, :integer, null: true
  end
end
