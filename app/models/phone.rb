class Phone < ActiveRecord::Base
  belongs_to :brand

  validates :brand_id, :model, presence: true
end
