                        $.ajax({
                            url: "https://ir-appointment.visametric.com/ir/appointment-form/controldate",
                            type: "POST",
                            async: false,
                            data: {
                                dateall: qtallvertval,
                                personCountTotal: personCount,
                                mailConfirmCode: $('#mailConfirmCodeControl').val()
                            },
                            success: function (response) {
                                if (response == "1") {
                                    $('#btnAppCalendarNext').css("display", "none");
                                    passiveTab('appServicesLi', 'appServices');
                                } else {
                                    ct = 0;
                                    qtallvertval = 0;
                                    $('.xt5dk3ce').hide('slow');
                                    $('#btnAppCalendarNext').css("display", "block");
                                    swal({
                                        title: "خطار",
                                        text: "!لطفا تاریخ ملاقات دیگری انت",
                                        confirmButtonColor: '#3085d6',
                                        confirmButtonText: "تایید",
                                        type: 'warning'
                                    });
                                    return false;
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                // console.log(textStatus, errorThrown);
                            }
                        });

                        $('#btnAppCalendarNext').css("display", "block");

                        $('#datepicker').css("display", "table");
