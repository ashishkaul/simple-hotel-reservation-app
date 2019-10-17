'use strict';

const HOTEL_SIZE = 'hotel-size';
const START_DATE = 'start-date';
const END_DATE = 'end-date';
const CHECK_RESERVATIONS_BUTTON = 'check-reservations-button';
const SUCCESS_MESSAGE = 'Congratulations! Your booking was successful.';
const ERROR_MESSAGE = 'Unfortunately, rooms are not available for the mentioned dates.';
const CLICK_EVENT = 'click';
const MIN_ATTRIBUTE = 'min';

const noOfHotelRooms = document.getElementById(HOTEL_SIZE);
const startDate = document.getElementById(START_DATE);
const endDate = document.getElementById(END_DATE);
const checkReservations = document.getElementById(CHECK_RESERVATIONS_BUTTON);

const setHtmlAttribute = (attributeName, attributeValue, element) => {
    element.setAttribute(attributeName, attributeValue);
}

(() => {
    setHtmlAttribute(MIN_ATTRIBUTE, new Date().toISOString().split("T")[0], startDate)
    setHtmlAttribute(MIN_ATTRIBUTE, new Date().toISOString().split("T")[0], endDate)
})();

checkReservations.addEventListener(CLICK_EVENT, () =>{
    let startIndex = helper.GetIndexFromDate(new Date(startDate.value));
    let endIndex = helper.GetIndexFromDate(new Date(endDate.value));

    console.log(startIndex);
    
    if(helper.IsBookingPossible(startIndex, endIndex, noOfHotelRooms.value)){
        helper.BookRooms(startIndex, endIndex);
        alert(SUCCESS_MESSAGE);
        helper.ResetDateElementValues(startDate, endDate);
    }else{
        alert(ERROR_MESSAGE);
        helper.ResetDateElementValues(startDate, endDate);
    }
});