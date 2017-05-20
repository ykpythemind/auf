class AddColumnToAudio < ActiveRecord::Migration[5.1]
  def change
    add_column :audios, :frag_data, :text
  end
end
