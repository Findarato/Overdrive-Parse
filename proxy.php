<?Php
  //$output = shell_exec("python /www/labs/overdrive/python/proxy.py");
  $command = 'python /www/labs/overdrive/python/proxy.py "'.$_GET["isbn"].'"';
  $output = shell_exec($command);
  $stage = explode("\n",$output);
  foreach ($stage as $st){
    if(json_decode($st)){
      $json = json_decode($st);
    }
  }
  $json->available = intval(str_replace(array("\n","\r","\t"," "),"",$json->available));
  $json->library = intval(str_replace(array("\n","\r","\t"," "),"",$json->library));
  echo "There are ".$json->available." of ".$json->library." copies available. <a href='".$_GET["isbn"]."' target=_blank>Continue to Overdrive</a> for more information"
  
?>

