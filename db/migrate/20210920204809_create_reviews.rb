class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :game, null: false, foreign_key: true
      t.text :content
      t.integer :user_rating
      t.boolean :played

      t.timestamps
    end
  end
end
