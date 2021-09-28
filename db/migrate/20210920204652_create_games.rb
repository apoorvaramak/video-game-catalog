class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :released
      t.string :background_img
      t.string :rating
      t.string :platforms

      t.timestamps
    end
  end
end
