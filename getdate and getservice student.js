

$.ajax({
        url: "https://ir-appointment.visametric.com/ir/appointment-form/personal/getdate",
                                type: "POST",
                                async: false,
                                data: {
                                    consularid: '1',
                                    exitid: '1',
                                    servicetypeid: '1',
                                    calendarType: '2',
                                    totalperson: '1',
                                    mailConfirmCode: $('#mailConfirmCodeControl').val()
                                },
                                success: function (getvaliddates) {

                                    var enableDays = getvaliddates;
                                    $("#datepicker").datepicker({
                                        maxViewMode: 2,
                                        weekStart: 1,
                                        beforeShowDay: function (date) {
                                            if (enableDays.indexOf(formatDate(date)) < 0)
                                                return {
                                                    enabled: false
                                                }
                                            else
                                                return {
                                                    enabled: true
                                                }
                                        },
                                        startDate: "+1d",
                                        endDate: "+2m",
                                        todayHighlight: true,
                                        format: "dd-mm-yyyy",
                                        clearBtn: true,
                                        autoclose: true
                                    });

                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    console.log(textStatus, errorThrown);
                                }
    });


    
var country_id_service = '1';
var office_id_service = $('.office').val();
var service_type_id_service = $('.officetype').v
$.ajax({
                        url: "https://ir-appointment.visametric.com/ir/appointment-form/personal/getservices",
                        type: "POST",
                        async: false,
                        data: {
                            country_id: country_id_service,
                            service_type_id: service_type_id_service,
                            office_id: office_id_service,
                            languageID: '1'
                        },
                        success: function (response) {
                            if (response) {
                                $('.getajaxservice').html(response);
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            // console.log(textStatus, errorThrown);
                        }
});