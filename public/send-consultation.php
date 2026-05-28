<?php
// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

// Honeypot check — must be empty
if (!empty($_POST['website_url'])) {
    header('Location: /thank-you');
    exit;
}

// Sanitize helper
function clean(string $key): string {
    return htmlspecialchars(trim($_POST[$key] ?? ''), ENT_QUOTES, 'UTF-8');
}

// Required fields
$name  = clean('name');
$email = clean('email');

// Accept either 'goals' or 'message' — whichever the form sends
$goals = clean('goals');
if ($goals === '') {
    $goals = clean('message');
}

if ($name === '' || $email === '' || $goals === '') {
    http_response_code(400);
    exit('Required fields missing.');
}

if (!filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Invalid email address.');
}

// Optional fields
$interest   = clean('interest');
$needs      = clean('operational_needs');
$company    = clean('company');
$website    = clean('website_current');
$industry   = clean('industry');
$challenges = clean('challenges');
$timeline   = clean('timeline');
$phone      = clean('phone');
$contact    = clean('contact_method');
$notes      = clean('notes');

// Build email body
$body  = "New HPS Free Consultation Request\n";
$body .= str_repeat('=', 48) . "\n\n";
$body .= "Area of Interest:  {$interest}\n";
$body .= "Operational Needs: {$needs}\n\n";
$body .= "Name:    {$name}\n";
$body .= "Email:   {$email}\n";
$body .= "Phone:   {$phone}\n";
$body .= "Contact: {$contact}\n\n";
$body .= "Company:  {$company}\n";
$body .= "Website:  {$website}\n";
$body .= "Industry: {$industry}\n";
$body .= "Timeline: {$timeline}\n\n";
$body .= "Project Goals\n" . str_repeat('-', 32) . "\n{$goals}\n\n";
if ($challenges !== '') {
    $body .= "Current Challenges\n" . str_repeat('-', 32) . "\n{$challenges}\n\n";
}
if ($notes !== '') {
    $body .= "Additional Notes\n" . str_repeat('-', 32) . "\n{$notes}\n\n";
}
$body .= str_repeat('-', 48) . "\nSubmitted: " . date('Y-m-d H:i:s T');

// Postmark API payload
$payload = json_encode([
    'From'          => 'Happy Path Studios <hello@mail.happypathstudios.com>', // must be a verified Sender Signature in Postmark
    'To'            => 'ron@happypathstudios.com',
    'Cc'            => 'deb@happypathstudios.com',
    'ReplyTo'       => $email,
    'Subject'       => 'New HPS Free Consultation Request - ' . $name,
    'TextBody'      => $body,
    'MessageStream' => 'outbound',
]);

$ch = curl_init('https://api.postmarkapp.com/email');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        'Accept: application/json',
        'Content-Type: application/json',
        'X-Postmark-Server-Token: 9b5d993e-d6fe-49a8-9552-ee3705c38bd0',
    ],
    CURLOPT_TIMEOUT        => 10,
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

// Debug logging — remove once delivery is confirmed stable
error_log('[send-consultation] HTTP ' . $httpCode);
error_log('[send-consultation] Response: ' . $response);
if ($curlError !== '') {
    error_log('[send-consultation] cURL error: ' . $curlError);
}

if ($httpCode !== 200) {
    http_response_code(500);
    exit('Email delivery failed. Please contact us directly at hello@happypathstudios.com.');
}

header('Location: /thank-you');
exit;
