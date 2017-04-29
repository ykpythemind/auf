class CreateAudios < ActiveRecord::Migration[5.1]
  def change
    create_table :audios do |t|
      t.integer :user_id
      t.time :update_time
      t.string :title
      t.text :description
      t.string :filename
      t.integer :length

      t.timestamps
    end
  end
end
