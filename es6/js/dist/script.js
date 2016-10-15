'use strict';

$(function () {

   var data = {
      testTitle: 'Тест по программированию',

      task: [{
         question: 'Что такое Javascript?',
         cases: [{
            answer: 'Язык программирования.',
            rigth: true
         }, {
            answer: 'Приложение Android.',
            rigth: false
         }, {
            answer: 'Это полное название языка программирования Java.',
            rigth: false
         }],
         inputId: ['1.1', '1.2', '1.3']
      }, {
         question: 'Что такое JQuery?',
         cases: [{
            answer: 'Javascript библиотека.',
            rigth: true
         }, {
            answer: 'Плагин для стилизации чекбоксов.',
            rigth: false
         }, {
            answer: 'Селектор Javascript.',
            rigth: false
         }],
         inputId: ['2.1', '2.2', '2.3']
      }, {
         question: 'Для чего используется ключевое слово let?',

         cases: [{
            answer: 'Для вывода модального окна.',
            rigth: false
         }, {
            answer: 'Для округления числа в большую сторону.',
            rigth: false
         }, {
            answer: 'Для объявления переменной.',
            rigth: true
         }],
         inputId: ['3.1', '3.2', '3.3']
      }],
      result: "Проверить результаты"
   };
   localStorage.setItem('data', JSON.stringify(data));
   var page = localStorage.getItem('data');
   var myData = JSON.parse(page);

   var html = $('#test').html();
   var $body = $('body');

   var content = tmpl(html, {
      data: myData
   });

   $body.append(content);

   var $overlay = void 0;
   var $modal = $('.js-modal');
   var $result = $('.js-result');
   var $close = $('.js-close');

   $('.cases1 input[type=checkbox]').change(function () {
      if ($('.cases1 input[type=checkbox]:checked').length >= 1) {
         $('.cases1 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
      } else {
         $('.cases1 input[type=checkbox]:disabled').removeAttr('disabled');
      }
   });

   $('.cases2 input[type=checkbox]').change(function () {
      if ($('.cases2 input[type=checkbox]:checked').length >= 1) {
         $('.cases2 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
      } else {
         $('.cases2 input[type=checkbox]:disabled').removeAttr('disabled');
      }
   });

   $('.cases3 input[type=checkbox]').change(function () {
      if ($('.cases3 input[type=checkbox]:checked').length >= 1) {
         $('.cases3 input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
      } else {
         $('.cases3 input[type=checkbox]:disabled').removeAttr('disabled');
      }
   });
   //============================================================

   function showModal(e) {
      e.preventDefault();
      $close.one('click', hideModal);

      $overlay = $('<div class="overlay"></div>');
      $body.append($overlay);
      $modal.addClass('show');

      $('.block').each(function () {
         var $that = $(this);
         $that.find('input[type="checkbox"]');
      });

      var rightAnswers = [];
      for (var i = 0; i < myData.task.length; i++) {
         for (var j = 0; j < myData.task[i].cases.length; j++) {
            var currentAnswer = myData.task[i].cases[j].rigth;
            rightAnswers.push(currentAnswer);
         }
      }

      var givenAnswers = [];
      $('input[type="checkbox"]').each(function () {
         if ($(this).prop('checked')) {
            givenAnswers.push(true);
         } else {
            givenAnswers.push(false);
         }
      });

      var result = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
      if (result) {
         $result.text('Good job!!!');
      } else {
         $result.text('You lose');
      }

      $("input[type='checkbox']").each(function () {
         $(this).removeAttr('checked');
         $(this).removeAttr('disabled');
      });
   };

   function hideModal() {
      $overlay.remove();
      $modal.removeClass('show');
   }

   $('.js-verify').on('click', showModal);
});
