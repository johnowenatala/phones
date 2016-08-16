class CreateBrands < ActiveRecord::Migration
  def change
    create_table :brands do |t|
      t.string :name, null: false, limit: 191

      t.timestamps null: false
    end
    add_index :brands, :name
  end
end
