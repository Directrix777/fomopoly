class AddInJailToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :in_jail, :boolean
  end
end
