class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :host_name

      t.timestamps
    end
  end
end
