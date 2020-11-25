# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  list_id    :integer          not null
#  body       :string           not null
#  completed  :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Task < ApplicationRecord
    validates :body, :list_id, presence: true

    belongs_to :list,
        primary_key: :id,
        foreign_key: :list_id,
        class_name: "List"

    has_one :user,
        through: :list,
        source: :user
end
