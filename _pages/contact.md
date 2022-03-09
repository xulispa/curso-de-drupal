---
permalink: /contato/
title: "Contato"
author_profile: true
exclude_from_search: true
header:
  image: /assets/images/headers/header-006.jpg
  og_image: /assets/images/level-fbapp.png
---

Os **cursos** são preparados para turmas com **número reduzido de pessoas** e ministrados **exclusivamente online**.

Além dos cursos listados aqui, também **ministramos cursos personalizados**, confeccionados **juntos ao cliente** de acordo a **demanda** e/ou **necessidades específicas**.

<script src="https://www.google.com/recaptcha/api.js?render=6LdaCRYbAAAAACMsfiixvtdnYn_8C7PgYaJa8PcI"></script>

<form id="contato" action="https://formcarry.com/s/ymw_igSfNQ9" method="POST" enctype="multipart/form-data" accept-charset="UTF-8" >
<p><label for="name">Seu nome</label>
<input type="text" id="name" name="name" style="width: 100%"></p>
<p><label for="email">Seu email</label>
<input type="email" id="email" name="email" style="width: 100%"></p>
<p><label for="message">Mensagem</label>
<textarea id="message" name="message" style="width: 100%" rows="5"></textarea></p>
<input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
<p><button class="g-recaptcha btn btn--info btn--x-large" data-sitekey="6LdaCRYbAAAAACMsfiixvtdnYn_8C7PgYaJa8PcI" data-callback='onSubmit' data-action='submit'>Enviar</button></p>
</form>

<script>
  grecaptcha.ready(function() {
    grecaptcha.execute("6LdaCRYbAAAAACMsfiixvtdnYn_8C7PgYaJa8PcI", {action: "homepage"})
    .then(function(token) {
      document.getElementById('captchaResponse').value = token;
    });
  });
</script>
