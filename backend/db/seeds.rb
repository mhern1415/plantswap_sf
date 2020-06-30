# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mark = User.create(
    name: "Mark",
    email: "m.hern1415@gmail.com"
)

firsttest = Post.create(
    title: "Pothos",
    price: "$5",
    description:"Two leaves",
    image_url: "google.com",
    contact: "fake email",
    plant_type: "cutting",
    zip_code: "94110",
    user_id: "1",
    date: "6/30/20"
)