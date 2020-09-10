class CreateElements < ActiveRecord::Migration[6.0]
  def change
    create_table :elements do |t|
      t.string :name
      t.string :symbol
      t.float :atomic_mass
      t.float :percentage
      t.string :image_URL

      t.timestamps
    end
  end
end
