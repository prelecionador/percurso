$(document).ready(function () {
  $('#titulo').click(function () {
    $('#circulo').slideUp(500, function () {
      $(this).addClass('expandido').slideDown(500);
    });
    setTimeout(() => $('#imagem').fadeIn(), 3000);
    setTimeout(() => $('#botao-comecar').fadeIn(), 6000);
  });

  $('#botao-comecar').click(function () {
    $('#circulo, #imagem, #botao-comecar').fadeOut(1000);
    setTimeout(() => $('body').addClass('fase2'), 1000);
    setTimeout(() => $('#fase2').fadeIn(), 1500);
    setTimeout(() => $('#titulo-fase2, #iframe-fase2').fadeIn(), 3500);
    setTimeout(() => $('#subtitulo-fase2').fadeIn(), 5500);
    setTimeout(() => $('#frase1-fase2').fadeIn(), 7500);
    setTimeout(() => $('#frase2-fase2').fadeIn(), 9500);
    setTimeout(() => $('#input-fase2, #botao-avancar2').fadeIn(), 11500);
  });

  $('#botao-avancar2').click(function () {
    if ($('#input-fase2').val().trim() === '1495') {
      $('#fase2').slideUp();
      $('body').removeClass().addClass('fase3');
      setTimeout(() => $('#fase3').fadeIn(), 1000);
      setTimeout(() => $('#titulo-fase3, #iframe-fase3').fadeIn(), 3000);
      setTimeout(() => $('#subtitulo-fase3').fadeIn(), 5000);
      setTimeout(() => $('#frase1-fase3').fadeIn(), 7000);
      setTimeout(() => $('#frase2-fase3').fadeIn(), 9000);
      setTimeout(() => $('#input-fase3, #botao-avancar3').fadeIn(), 11000);
    }
  });

  $('#botao-avancar3').click(function () {
    if ($('#input-fase3').val().trim() === '1961') {
      $('#fase3').slideUp();
      $('body').removeClass().addClass('fase4');
      setTimeout(() => $('#fase4').fadeIn(), 1000);
      setTimeout(() => $('#titulo-fase4, #iframe-fase4').fadeIn(), 3000);
      setTimeout(() => $('#subtitulo-fase4').fadeIn(), 5000);
      setTimeout(() => $('#frase1-fase4').fadeIn(), 7000);
      setTimeout(() => $('#frase2-fase4').fadeIn(), 9000);
      setTimeout(() => $('#input-fase4, #botao-avancar4').fadeIn(), 11000);
    }
  });

  $('#botao-avancar4').click(function () {
    if ($('#input-fase4').val().trim() === '2025') {
      $('#fase4').slideUp();
      $('body').removeClass().addClass('fase5');
      setTimeout(() => $('#fase5').fadeIn(), 1000);
      setTimeout(() => $('#titulo-fase5, #iframe-fase5').fadeIn(), 3000);
      setTimeout(() => $('#subtitulo-fase5').fadeIn(), 5000);
      setTimeout(() => $('#frase1-fase5').fadeIn(), 7000);
      setTimeout(() => $('#frase2-fase5').fadeIn(), 9000);
      setTimeout(() => $('#input-fase5, #botao-avancar5').fadeIn(), 11000);
    }
  });

  $('#botao-avancar5').click(function () {
    if ($('#input-fase5').val().trim() === '5025') {
      $('#fase5').slideUp();
      $('body').removeClass().addClass('fase6');
      setTimeout(() => $('#fase6').fadeIn(), 1000);
      setTimeout(() => $('#titulo-fase6, #iframe-fase6').fadeIn(), 3000);
      setTimeout(() => $('#subtitulo-fase6').fadeIn(), 5000);
      setTimeout(() => $('#frase1-fase6').fadeIn(), 7000);
      setTimeout(() => $('#frase2-fase6').fadeIn(), 9000);
      setTimeout(() => $('#input-fase6, #botao-avancar6').fadeIn(), 11000);
    }
  });

  $('#botao-avancar6').click(function () {
    const resposta = $('#input-fase6').val().trim();
    if (resposta === '0') {
      $('#fase6').slideUp();
      $('body').removeClass().addClass('fase7');
      setTimeout(() => $('#fase7').fadeIn(), 1000);
      setTimeout(() => $('#titulo-fase7').fadeIn(), 2000);
      setTimeout(() => $('#subtitulo-fase7').fadeIn(), 4000);
      setTimeout(() => $('#frase1-fase7').fadeIn(), 6000);
      setTimeout(() => $('#frase2-fase7').fadeIn(), 8000);
      setTimeout(() => $('#botao-reinicio').fadeIn(), 10000);
    }
  });

  $('#botao-reinicio').click(function () {
    location.reload();
  });
});
