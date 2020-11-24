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
require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
