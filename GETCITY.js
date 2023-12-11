            $.ajax({
                url: "https://ir-appointment.visametric.com/ir/appointment-form/getcity",
                method: 'POST',
                data: {
                    'applicationType': '3'
                },
                async: false,
                success: function (response) {
                    $('#ajaxcity').html(response);
                    $(".city").prop("selectedIndex", 0);
                    $(".office").prop("selectedIndex", 0);
                    $(".officetype").prop("selectedIndex", 0);
                    $(".service_type").prop("selectedIndex", 0);
                    $(".totalPerson").prop("selectedIndex", 0);
                    // $('html, body').animate({
                    //     scrollTop: 350
                    // }, 750);
                },
                error: function () {

                }
            });