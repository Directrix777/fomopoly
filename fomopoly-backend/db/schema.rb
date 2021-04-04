# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_04_04_154921) do

  create_table "games", force: :cascade do |t|
    t.string "host_name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "spaces", force: :cascade do |t|
    t.string "color"
    t.string "name"
    t.integer "flat_rent"
    t.integer "one_house_rent"
    t.integer "two_house_rent"
    t.integer "three_house_rent"
    t.integer "four_house_rent"
    t.integer "hotel_rent"
    t.integer "mortgage_value"
    t.integer "house_price"
    t.integer "price"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "houses", default: 0, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "token"
    t.integer "cash"
    t.integer "current_location"
    t.integer "game_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "in_jail"
    t.integer "doubles_rolled"
  end

end
