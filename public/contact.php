<?php
// Receives the consultation form from the site and emails it to the office mailbox.
// Runs on the hosting server (SuperHosting). Returns JSON: {"ok": true|false}.

declare(strict_types=1);

const MAIL_TO = 'office@getnimble.bg';
const MAIL_FROM = 'office@getnimble.bg';

header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');
header('Cache-Control: no-store');

function respond(int $code, bool $ok): void
{
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

function field(string $key, int $max): string
{
    $value = trim((string) ($_POST[$key] ?? ''));
    return function_exists('mb_substr') ? mb_substr($value, 0, $max, 'UTF-8') : substr($value, 0, $max * 2);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, false);
}

// Only accept posts that come from the site itself.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !preg_match('#^https://(www\.)?getnimble\.bg$#', $origin)) {
    respond(403, false);
}

// Spam trap: real visitors never see or fill this field. Pretend it worked.
if (field('website', 200) !== '') {
    respond(200, true);
}

// Name and contact go on one line each, so strip line breaks from them.
$name = preg_replace('/[\r\n]+/', ' ', field('name', 100));
$contact = preg_replace('/[\r\n]+/', ' ', field('contact', 150));
$message = field('message', 3000);

if ($name === '' || $contact === '' || $message === '') {
    respond(422, false);
}

$subject = '=?UTF-8?B?' . base64_encode('Запитване от сайта: ' . $name) . '?=';
$body = "Име: {$name}\nКонтакт: {$contact}\n\nЗапитване:\n{$message}\n\n--\nИзпратено от формата на getnimble.bg\n";

$headers = [
    'From: =?UTF-8?B?' . base64_encode('Nimble сайт') . '?= <' . MAIL_FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
// If the visitor left an email address, "Reply" in the mail client goes to them.
if (filter_var($contact, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $contact;
}

$sent = mail(MAIL_TO, $subject, $body, implode("\r\n", $headers), '-f ' . MAIL_FROM);
respond($sent ? 200 : 500, $sent);
