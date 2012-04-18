<?Php
extract($_POST);

//set POST variables
$url = 'http://incolsa.lib.overdrive.com/BANGSearch.dll?Type=FullText';
$agent= 'Mozilla/5.0 (X11; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0';

//url-ify the data for the POST
//foreach($_POST as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
//rtrim($fields_string,'&');

//open connection
$ch = curl_init();
$fields = array(
	$_POST["FullTextCriteria"],
	$_POST["FullTextField"]
);

//set the url, number of POST vars, POST data
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_POST,TRUE);
curl_setopt($ch,CURLOPT_POSTFIELDS,$fields);

//curl_setopt($ch, CURLOPT_HEADER, false); 	       // Don't return HTTP headers
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);   // Do return the contents of the call
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_VERBOSE, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, $agent);

//execute post
$result = curl_exec($ch);
print_r($_POST);
$info = curl_getinfo($ch);

print_r($info);
print_r($result);
//close connection
curl_close($ch);