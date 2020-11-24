class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :list_id, null: false
      t.string :body, null: false
      t.boolean :completed, null: false

      t.timestamps
    end
    add_index :tasks, :list_id
  end
end
