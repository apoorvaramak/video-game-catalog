class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :age
      t.string :username
      t.string :password_digest
      t.string :pfp
      t.text :bio
      t.boolean :showBirthday

      t.timestamps
    end
  end
end
