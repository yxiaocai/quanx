var body = $response.body;
let obj = JSON.parse(body);
obj["modules"] = null;
obj["auditionDuration"] = null;
body = JSON.stringify(obj);
$done(body);
// Made by Yxiaocai

// 英语流利说
// hostname = vira.llsapp.com
// https?://vira.llsapp.com/api/v2/readings/limitation 
