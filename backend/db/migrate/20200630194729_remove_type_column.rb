class RemoveTypeColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :type, :string
  end
end
