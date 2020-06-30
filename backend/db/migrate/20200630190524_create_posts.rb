class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :price
      t.string :description
      t.string :image_url
      t.string :contact
      t.string :type
      t.string :zip_code
      t.string :user_id
      t.string :date
      t.timestamps
    end
  end
end
