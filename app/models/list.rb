# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord

    validates :title, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: "User"

    has_many :tasks, 
        primary_key: :id,
        foreign_key: :list_id,
        class_name: "Task"
    

end
