class Audio < ApplicationRecord
  include FragUploader[:frag]
  belongs_to :user
  validates :title, :filename, presence: true
end
