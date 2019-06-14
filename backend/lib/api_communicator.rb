class APICall

  def self.get_data
    url = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple'
    headers = { 'Accepts' => 'application/json' }
    response_string = RestClient.get(url, headers)
  end


end
