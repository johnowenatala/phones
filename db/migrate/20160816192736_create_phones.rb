class CreatePhones < ActiveRecord::Migration
  def change
    create_table :phones do |t|
      t.references :brand, null: false, index: true, foreign_key: true
      t.string :model, null: false
      t.string :photo
      t.integer :compatibility
      t.text :comments

      t.timestamps null: false
    end
  end
end
