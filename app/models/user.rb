class User < ApplicationRecord
  has_many :audios, dependent: :delete_all
  validates :email, :name, presence: true
end
