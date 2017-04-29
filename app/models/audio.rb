class Audio < ApplicationRecord
  belongs_to :user
  validates :title, :filename, presence: true
end
