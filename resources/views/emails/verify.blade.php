Hello <?= $username; ?>!
<br><br>

Here is your email verification link
<br>
<a href="<?= $url; ?>">Verify email</a>
<br><br>

<div style="<?= $ip; ?>">
</div>

<br><br>
Thanks,<br>
{{ config('app.name') }}