# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

if Brand.all.empty?
  [
    {
      id: 1,
      name: 'Apple'
    },
    {
      id: 2,
      name: 'Samsung'
    },
    {
      id: 3,
      name: 'LG'
    },
    {
      id: 4,
      name: 'Motorola'
    }
  ].each{ |data| Brand.create(data) }
end

apple = Brand.find_by_name('Apple')
samsung = Brand.find_by_name('Samsung')
lg = Brand.find_by_name('LG')
motorola = Brand.find_by_name('Motorola')

[
  {
    brand: lg,
    model: 'G5 SE',
    compatibility: :full
  },
  {
    brand: motorola,
    model: 'Moto G 2da gen LTE',
    compatibility: :good
  },
  {
    brand: motorola,
    model: 'Moto X Play',
    compatibility: :poor,
    photo: 'https://entel.modyocdn.com/uploads/44216152-ff33-4250-9a37-f642824ba89b/R320x240/01-Motorola-MotoXPlay_Black.png'
  },
  {
    brand: samsung,
    model: 'Galaxy J1 Ace LTE',
    compatibility: :full,
    photo: 'https://entel.modyocdn.com/uploads/5c20eb25-fcc4-4546-9d0c-ca424a439f86/R320x240/01-Samsung-GalaxyJ1Ace_Black.png'
  },
  {
    brand: samsung,
    model: 'Galaxy J5',
    compatibility: :medium
  },
  {
    brand: apple,
    model: 'S6',
    compatibility: :full,
    photo: 'https://entel.modyocdn.com/uploads/a7e508cb-a61a-4f6f-9703-13a0df40fd82/R320x240/01-Apple-iPhone6s_SpaceGray.png'
  }
].each do |data|
  phone = Phone.where(brand_id: data[:brand].id, model: data[:model]).first
  if phone.nil?
    Phone.create(data)
  end
end
