class AddPlantTypeColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :plant_type, :string
  end
end
