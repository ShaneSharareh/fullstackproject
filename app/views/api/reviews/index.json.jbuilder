@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :product_id, :reviewer_id, :body
  end
end

