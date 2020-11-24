class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :token
      t.integer :cash
      t.integer :current_location 
      #This value is the id of a space. Not one they necessarily own, but the one they are currently on. 
      t.integer :game_id

      t.timestamps
    end
  end
end
