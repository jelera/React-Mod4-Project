class APICall

  def self.get_data
    url = 'https://opentdb.com/api.php?amount=40&difficulty=medium&type=multiple'
    headers = { 'Accepts' => 'application/json' }
    response_string = RestClient.get(url, headers)
    parsed_data = JSON.parse(response_string)
  end


end
