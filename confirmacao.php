<?php

// header cross-origin
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
// header para saída json
header('Content-Type: application/json; charset=utf-8');

$input = file_get_contents("php://input");
$post = json_decode($input);

if (isset($post->email, $post->nome, $post->userid)) {
    $to = $post->email;
    $subject = "Confirmando o evento GDG/LFDev 2017";

    $html = '<div style="width: 100%; margin: 0; padding: 1.5em 0; text-align: center;">
    <h2 style="color: #666; font-size: 2.3em;">Sua inscrição foi concluída!</h2>
    <p style="font-size: 1.2em; margin: 1em 0;"><strong>'.$post->nome.'</strong>, sua incrição foi realizada com sucesso, agora é só aguardar o dia e aproveitar as palestras.</p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data='.$post->userid.'" alt="QR-Code de confirmação">
    <p style="font-size: 1.2em; margin: 1em 0;">Este <strong>QR-Code</strong> é sua garantia de inscrição, leve-o impresso ou apresente-o em seu celular no dia do evento, é ele quem garantirá sua presença.</p>
    <p style="font-size: 1.2em; margin: 1em 0;">Qualquer dúvida não deixe de nos contactar através do email <a href="mailto:contato.lfdev@gmail.com">contato.lfdev@gmail.com</a></p>
    <p style="font-size: 1.2em; margin: 1em 0;">&nbsp;</p>
    <p style="font-size: 1.2em; margin: 1em 0; font-style: italic; color: #666;">LFDev - Grupo de Desenvolvedores de Lauro de Freitas</p>
    </div>';
    $headers = "From: contato@wgbn.com.br\r\n" . "Reply-To: 'LFDev' <contato.lfdev@gmail.com>\r\nContent-type: text/html; charset=UTF-8\r\n";

    if(mail($to, $subject, $html, $headers))
        echo json_encode(array('success'=>1));
    else
        echo json_encode(array('success'=>0));
} else {
    echo json_encode(array('success'=>0));
}

?>