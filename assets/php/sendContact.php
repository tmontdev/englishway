<?php
if($_SERVER['REQUEST_METHOD'] !== "POST")
  die();
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_SPECIAL_CHARS);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
if(empty($name) || empty($email) || empty($phone) || empty($message)){
  echo json_encode(array("message" => 0, "error" => "Preencha todos os campos!"));
  die();
}
if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
  echo json_encode(array("message" => 0, "error" => "Digite um email válido"));
  die();
}
$emailMessage = "Contato do site English Way\n\n Nome: ".$name."\nEmail: ".$email."\nTelefone: ".$phone."\nMensagem: ".$message;
$emailHeaders = 'To: contato@englishwayschool.com.br'."\r\n" .
  'From: contato_site@englishwayschool.com.b'."\r\n" .
  'Reply-To: contato@englishwayschool.com.b'."\r\n" .
  'X-Mailer: PHP/'.phpversion();
mail("contato@englishwayschool.com.br", "[*** Site ***] - Contato", $emailMessage, $emailHeaders);
echo json_encode(array("message" => 1));