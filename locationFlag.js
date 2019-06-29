if ($response.statusCode !=200){
    $done(Null);
}
var body = $response.body;
var obj = JSON.parse(body);
// var country = obj["country"]
var title = obj["country"];
var flagDict = {"Hong Kong": "🇭🇰", "Japan": "🇯🇵", "South Korea": "🇰🇷", "Taiwan": "🇹🇼", "United States": "🇺🇸", "Singapore": "🇸🇬", "Australia": "🇦🇺", "Germany": "🇩🇪", "United Kingdom": "🇬🇧", "France": "🇫🇷", "Thailand": "🇹🇭"};
var subtitle = flagDict[title];
var ip = obj["query"];
var description = "description";

$done({title, subtitle, ip, description});

