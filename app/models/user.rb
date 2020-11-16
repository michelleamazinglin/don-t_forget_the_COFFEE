# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :email, :username, :password_digest, :session_token, presence: true
    validates :email, :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    attr_reader :password

end
