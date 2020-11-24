class CreateSpaces < ActiveRecord::Migration[6.0]
  def change
    create_table :spaces do |t|
      t.string :color
      t.integer :houses
      t.string :name
      t.integer :flat_rent
      t.integer :one_house_rent
      t.integer :two_house_rent
      t.integer :three_house_rent
      t.integer :four_house_rent
      t.integer :hotel_rent
      t.integer :mortgage_value
      t.integer :unmortgage_price
      t.integer :house_price
      t.integer :user_id

      t.timestamps
    end
  end
end
