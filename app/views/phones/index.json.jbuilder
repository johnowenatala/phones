json.phones @phones do |phone|
  json.uid phone.id
  json.brand phone.brand.name
  json.model phone.model
  json.photo phone.photo
  json.compatibility phone.compatibility
  json.comments phone.comments
end