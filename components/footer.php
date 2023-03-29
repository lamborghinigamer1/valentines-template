<?php

$messages = ["I hope you're liking this", "How's your day?", "Happy valentines! :)", "Surprise!", "You're amazing!"];
$kaas = rand(0, count($messages) - 1);

echo ("<footer>
<h1>Happy valentines <3</h1>
<p></p>
<h2>
$messages[$kaas]
</h2>
<p></p>
<h2>If you refresh a new message appears for you :)</h2>
</footer>
");