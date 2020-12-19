class AddDoublesRolledToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :doubles_rolled, :integer
  end
end
