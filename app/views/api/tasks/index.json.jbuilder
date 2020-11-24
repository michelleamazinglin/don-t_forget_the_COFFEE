@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :list_id, :body, :completed
end
