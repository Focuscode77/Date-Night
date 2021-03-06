$(document).ready(function() {

    var location;
    var user;
    var eventsQuery1 = "";
    var eventsQuery2 = "";
    var eventsQuery3 = "";

    $("#search-btn").on("click", function() {

        event.preventDefault();
        $("#events-div-1").empty();
        $("#events-div-2").empty();
        $("#events-div-3").empty();

        location = $("#location-input").val();
        user = $("#event-input").val();

        if (location === null) {
            location = "philadelphia";
        };

        if (user === "athletic") {
            eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3008&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=109&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=108&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        } else if (user === "foodie") {
            eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?categories=110&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=113&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=105&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        } else if (user === "party") {
            eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3006&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=5010&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3008&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        } else if (user === "quirky") {
            eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3009&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?categories=105&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?categories=104&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        } else if (user === "homebody") {
            eventsQuery1 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=3003&location.address=" + location + "&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery2 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=7004&location.address=" + location + "&location.within=10km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
            eventsQuery3 = "https://www.eventbriteapi.com/v3/events/search//?subcategories=4001&location.address=" + location + "&location.within=10km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";
        }


        //sample queryURL = "https://www.eventbriteapi.com/v3/events/search//?categories=103&location.address=philadelphia&location.within=5km&expand=venue&token=DNHTAISTPZBP2YMQRXIP";

        //FIRST ROW OF RESULTS

        $.ajax({
            url: eventsQuery1,
            method: "GET"
        }).then(function(response) {

            $("#events-div-1").empty();

            for (i = 0; i < 6; i++) {
                console.log(response);
                var cardWidth = $("<div>");
                cardWidth.addClass("col s12 m4");

                var card = $("<div>");
                card.addClass("card small");

                var cardImgDiv = $("<div>");
                cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

                var cardImg = $("<img>");
                cardImg.addClass("activator");
                cardImg.attr("src", response.events[i].logo.original.url);

                var cardContent = $("<div>");
                cardContent.addClass("card-content");

                var cardTitle = $("<span>");
                cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
                cardTitle.text(response.events[i].name.text);

                var cardIcon = $("<i>");
                cardIcon.addClass("material-icons right");
                cardIcon.text("more_vert");

                var cardLink = $("<p>");
                cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");

                var cardReveal = $("<div>");
                cardReveal.addClass("card-reveal");

                var cardRevealTitle = $("<span>");
                cardRevealTitle.addClass("card-title grey-text text-darken-4");
                cardRevealTitle.text("Event Info");

                var closeIcon = $("<i>");
                closeIcon.addClass("material-icons right");
                closeIcon.text("close");

                var eventInfo = $("<p>");
                eventInfo.html(response.events[i].description.html);

                $("#events-div-1").append(cardWidth);
                cardWidth.append(card);
                card.append(cardImgDiv);
                cardImgDiv.append(cardImg);
                card.append(cardContent);
                cardContent.append(cardTitle);
                cardTitle.append(cardIcon);
                cardContent.append(cardLink);

                card.append(cardReveal);
                cardReveal.append(cardRevealTitle);
                cardRevealTitle.append(closeIcon);
                cardReveal.append(eventInfo);
            };
        });


        $.ajax({
            url: eventsQuery2,
            method: "GET"
        }).then(function(response) {

            $("#events-div-2").empty();

            for (i = 0; i < 6; i++) {
                var cardWidth = $("<div>");
                cardWidth.addClass("col s12 m4");

                var card = $("<div>");
                card.addClass("card small");

                var cardImgDiv = $("<div>");
                cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

                var cardImg = $("<img>");
                cardImg.addClass("activator");
                cardImg.attr("src", response.events[i].logo.original.url);

                var cardContent = $("<div>");
                cardContent.addClass("card-content");

                var cardTitle = $("<span>");
                cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
                cardTitle.text(response.events[i].name.text);

                var cardIcon = $("<i>");
                cardIcon.addClass("material-icons right");
                cardIcon.text("more_vert");

                var cardLink = $("<p>");
                cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");

                var cardReveal = $("<div>");
                cardReveal.addClass("card-reveal");

                var cardRevealTitle = $("<span>");
                cardRevealTitle.addClass("card-title grey-text text-darken-4");
                cardRevealTitle.text("Event Info");

                var closeIcon = $("<i>");
                closeIcon.addClass("material-icons right");
                closeIcon.text("close");

                var eventInfo = $("<p>");
                eventInfo.html(response.events[i].description.html);

                $("#events-div-2").append(cardWidth);
                cardWidth.append(card);
                card.append(cardImgDiv);
                cardImgDiv.append(cardImg);
                card.append(cardContent);
                cardContent.append(cardTitle);
                cardTitle.append(cardIcon);
                cardContent.append(cardLink);
                card.append(cardReveal);
                cardReveal.append(cardRevealTitle);
                cardRevealTitle.append(closeIcon);
                cardReveal.append(eventInfo);
            };
        });

        $.ajax({
            url: eventsQuery3,
            method: "GET"
        }).then(function(response) {

            $("#events-div-3").empty();

            for (i = 0; i < 6; i++) {
                var cardWidth = $("<div>");
                cardWidth.addClass("col s12 m4");

                var card = $("<div>");
                card.addClass("card small");

                var cardImgDiv = $("<div>");
                cardImgDiv.addClass("card-image waves-effect waves-block waves-light");

                var cardImg = $("<img>");
                cardImg.addClass("activator");
                cardImg.attr("src", response.events[i].logo.original.url);

                var cardContent = $("<div>");
                cardContent.addClass("card-content");

                var cardTitle = $("<span>");
                cardTitle.addClass("card-title activator grey-text text-darken-4 truncate");
                cardTitle.text(response.events[i].name.text);

                var cardIcon = $("<i>");
                cardIcon.addClass("material-icons right");
                cardIcon.text("more_vert");

                var cardLink = $("<p>");
                cardLink.html("<a href= '" + response.events[i].url + "' target='_blank'>" + "See Event Details" + "</a>");

                var cardReveal = $("<div>");
                cardReveal.addClass("card-reveal");

                var cardRevealTitle = $("<span>");
                cardRevealTitle.addClass("card-title grey-text text-darken-4");
                cardRevealTitle.text("Event Info");

                var closeIcon = $("<i>");
                closeIcon.addClass("material-icons right");
                closeIcon.text("close");

                var eventInfo = $("<p>");
                eventInfo.html(response.events[i].description.html);

                $("#events-div-3").append(cardWidth);
                cardWidth.append(card);
                card.append(cardImgDiv);
                cardImgDiv.append(cardImg);
                card.append(cardContent);
                cardContent.append(cardTitle);
                cardTitle.append(cardIcon);
                cardContent.append(cardLink);

                card.append(cardReveal);
                cardReveal.append(cardRevealTitle);
                cardRevealTitle.append(closeIcon);
                cardReveal.append(eventInfo);
            };
        });

    });


});