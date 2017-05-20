class Audio < ApplicationRecord
  Include FragUploader[:frag]
  belongs_to :user
  validates :title, :filename, presence: true
end
