<?Php
  header('Content-type: application/json');
  $output = shell_exec("python /www/labs/overdrive/python/proxy.py");
  //$output = shell_exec("pyhon python/proxy.py ".$_GET["isbn"]);

  $stage = explode("\n",$output);
  $json = json_decode($stage[3]);
  $json->available = intval(str_replace(array("\n","\r","\t"," "),"",$json->available));
  $json->library = intval(str_replace(array("\n","\r","\t"," "),"",$json->library));
  echo json_encode($json);