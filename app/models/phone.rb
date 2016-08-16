class Phone < ActiveRecord::Base
  belongs_to :brand

  enum :compatibility => { full: 1, good: 2, medium: 3, poor: 4, unknown: nil }

  validates :brand_id, :model, presence: true
end
