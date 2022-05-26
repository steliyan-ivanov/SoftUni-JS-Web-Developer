pause=true;
grecaptcha.ready(function () {
            grecaptcha.execute('6LeCYR8eAAAAADAoCjT9PpTkBdzWA2pBQrqNOMQk', { action: 'homepage' }).then(function (token) {
                jQuery.ajax({
                    type: 'POST', async: false, dataType: 'json',
                    url: '/lbin/v3/btvbg/ajax_stani_bogat.php',
                    data: { 'captcha': token },
                    dataType: 'json',
                    success: function (data) {
                        if (data.success) {
                            hash = data.h
                        } else {
                            // show captcha error and button for new game
                            location.reload();
                        }
                    }
                });
            });
        });
        
function checkAnswer(answer, index) {
    function updateGame(isCorrect) {
        let moneyElement = window.innerWidth > 980 ? '#money' : '#money_mobile';

        marked = false;
        if (isCorrect) {
            var current = jQuery(`${moneyElement} li:eq(${currentQ - 1})`)[0].firstElementChild.innerText;
            if (isCorrect && currentQ == 5) {
                pause = true;
                let modal = jQuery('.happy_modal');
                modal.css('display', 'block');
                jQuery('div#primary_game').css('opacity', '0.4');
                jQuery('.happy_modal .text_phone').text('Р·Р° РІРїРµС‡Р°С‚Р»СЏРІР°С‰РёСЏ СЃС‚Р°СЂС‚ СЃ РїСЉСЂРІР° СЃРёРіСѓСЂРЅР° СЃСѓРјР°! Р—РЅР°РЅРёРµС‚Рѕ Рµ СѓРјРµРЅРёРµ РґР° СЃРµ РґРІРёР¶РёС€ РІ РїСЂР°РІРёР»РЅР°С‚Р° РїРѕСЃРѕРєР°.');
            } else if (isCorrect && currentQ == 10) {
                pause = true;
                let modal = jQuery('.happy_modal');
                modal.css('display', 'block');
                jQuery('div#primary_game').css('opacity', '0.4');
                jQuery('.happy_modal .text_phone').text('РґРѕСЃС‚РёРіРЅР°С…С‚Рµ РІС‚РѕСЂР° СЃРёРіСѓСЂРЅР° СЃСѓРјР°! Р’Р°С€Р°С‚Р° РёРіСЂР° Рµ РґРѕСЃС‚РѕР№РЅР° Р·Р° РІСЉР·С…РёС‰РµРЅРёРµ.');
            } else if (isCorrect && currentQ == 15) {
                jQuery('#canvas1').css('display', 'block');
                let W = window.innerWidth;
                let H = window.innerHeight;
                const canvas = document.getElementById("canvas1");
                const context = canvas.getContext("2d");
                const maxConfettis = 150;
                const particles = [];

                const possibleColors = [
                    "DodgerBlue",
                    "OliveDrab",
                    "Gold",
                    "Pink",
                    "SlateBlue",
                    "LightBlue",
                    "Gold",
                    "Violet",
                    "PaleGreen",
                    "SteelBlue",
                    "SandyBrown",
                    "Chocolate",
                    "Crimson"
                ];

                function randomFromTo(from, to) {
                    return Math.floor(Math.random() * (to - from + 1) + from);
                }

                function confettiParticle() {
                    this.x = Math.random() * W; // x
                    this.y = Math.random() * H - H; // y
                    this.r = randomFromTo(11, 33); // radius
                    this.d = Math.random() * maxConfettis + 11;
                    this.color =
                        possibleColors[Math.floor(Math.random() * possibleColors.length)];
                    this.tilt = Math.floor(Math.random() * 33) - 11;
                    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
                    this.tiltAngle = 0;

                    this.draw = function () {
                        context.beginPath();
                        context.lineWidth = this.r / 1.5;
                        context.strokeStyle = this.color;
                        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
                        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
                        return context.stroke();
                    };
                }

                function Draw() {
                    const results = [];

                    // Magical recursive functional love
                    requestAnimationFrame(Draw);

                    context.clearRect(0, 0, W, window.innerHeight);

                    for (var i = 0; i < maxConfettis; i++) {
                        results.push(particles[i].draw());
                    }

                    let particle = {};
                    let remainingFlakes = 0;
                    for (var i = 0; i < maxConfettis; i++) {
                        particle = particles[i];

                        particle.tiltAngle += particle.tiltAngleIncremental;
                        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
                        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

                        if (particle.y <= H) remainingFlakes++;

                        // If a confetti has fluttered out of view,
                        // bring it back to above the viewport and let if re-fall.
                        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
                            particle.x = Math.random() * W;
                            particle.y = -30;
                            particle.tilt = Math.floor(Math.random() * 10) - 20;
                        }
                    }

                    return results;
                }

                window.addEventListener(
                    "resize",
                    function () {
                        W = window.innerWidth;
                        H = window.innerHeight;
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                    },
                    false
                );

                // Push new confetti objects to `particles[]`
                for (var i = 0; i < maxConfettis; i++) {
                    particles.push(new confettiParticle());
                }

                // Initialize
                canvas.width = W;
                canvas.height = H;
                Draw();

                jQuery('.gold .btn-share').attr("data-level", 4);
                let modal = jQuery('.gold');
                modal.css('display', 'block');
                jQuery('div#primary_game').css('opacity', '0.4');
                jQuery('.badge_modal .btn').on('click', function () {
                    let modal = jQuery('.call_modal');
                    modal.css('display', 'none');
                    location.reload();
                })
            }

            jQuery(`${moneyElement} li:eq(${currentQ})`).addClass('current');
            if (currentQ != 0) jQuery(`${moneyElement} li:eq(${currentQ - 1})`).removeClass('current').addClass('passed');
        } else {
            // restart game
            if (currentQ != 1) jQuery(`${moneyElement} li:eq(${currentQ - 1})`).removeClass('current');
            currentQ = 1;
            jQuery(`${moneyElement} li:eq(${currentQ - 1})`).addClass('current');

            jQuery(`${moneyElement} li.passed`).each(function () {
                jQuery(this).removeClass('passed');
            })

            for (let joker in jokers) {
                jokers[joker] = true;
            }

            jQuery('.joker-image-holder').each(function () {
                jQuery(this).css('filter', 'brightness(1)')
            })
        }

        if (window.innerWidth < 980) {
            mobileMoneyScroll(false, currentQ);
        }

        jQuery('.public_circle_percent').each(function () {
            if (jQuery(this).hasClass('correct')) jQuery(this).removeClass('correct');
            jQuery(this).removeClass('active');
        });

        jQuery('.answ').each(function () {
            if (jQuery(this).hasClass('correct')) jQuery(this).removeClass('correct');

            jQuery(this).height(0);
        })

        setTimeout(
            function () {
                jQuery('#current-question').text(currentQ + 1);
                timeLeft = 600;
        }, 1000);
    }
    jQuery.ajax({
        type: 'POST', async: false, dataType: 'json',
        url: '/lbin/v3/btvbg/ajax_stani_bogat.php',
        data: { 'id': question_data.id, 'answer': answer, 'hash': hash },
        dataType: 'json',
        success: function (data) {
            let moneyElement = window.innerWidth > 980 ? '#money' : '#money_mobile';
            var current = jQuery(`${moneyElement} li:eq(${currentQ - 1})`)[0].firstElementChild.innerText;
            console.log("Answer is: " + data.ans);
            if (data.result == 'true') {
                jQuery(`.answers-text-and-image:eq(${index - 1})`).removeClass('clicked').addClass('correct');
                updateGame(true);
                setTimeout(
                    function () {
                        getQuestionNew(data);
                        timeLeft = 600;
                    }, 1000);
            } 
        }
    });
}

function markQuestion(index, event) {
    checkAnswer(index, mapAnswer[index]);
}

markQuestion('A', event)
