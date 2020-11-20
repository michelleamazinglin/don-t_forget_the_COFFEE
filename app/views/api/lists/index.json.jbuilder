@lists.each do |list|
  json.set! list.id do
    json.extract! list, :id, :user_id, :title
  end
end

# 
# list: {
#   1(list id): {
#     id: 1,
#     title: "code"
#   },
#   2: {
#     id: 2,
#     titile: "life"
#   }
# }