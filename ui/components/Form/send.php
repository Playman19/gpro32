<?php
if (array_key_exists('send-form', $_POST)) {
    if (array_key_exists('phone', $_POST)) {
        $send_name = 'Не указано';
        if (array_key_exists('name', $_POST)) $send_name = $_POST['name'];
        $send_phone = $_POST['phone'];

        $send_form = mail("7bearsgrrr@mail.ru", "G_PRO","
        Имя клиента: " . $send_name . '
        Телефон: ' . $send_phone, "From: info@mydomain.ru\r\n");
    }
}
?>