'use strict';

const helper = (() => {
    const daysOfYear = new Array(365).fill(0);

    const IsBookingPossible = (startIndex, endIndex, noOfHotelRooms) => {
        for(let i = startIndex; i <= endIndex; i++){
            if(daysOfYear[i] >= noOfHotelRooms){
                return false;
            }
        }
        return true;
    }

    const BookRooms = (startIndex, endIndex) => {
        for(let j = startIndex; j <= endIndex; j++){
            daysOfYear[j] += 1;
        }
    }

    const ResetDateElementValues = (startDateElement, endDateElement) => {
        startDateElement.value = "";
        endDateElement.value = "";
    }

    const GetIndexFromDate = (date) => {
        const startOfYear = new Date(new Date().getFullYear(),0,0);
        const oneDay = 60*60*1000*24;
        let timeElapsedFromYearStart = date - startOfYear;

        return Math.floor((timeElapsedFromYearStart)/oneDay);
    }
    
    return {
        IsBookingPossible: IsBookingPossible,
        BookRooms: BookRooms,
        ResetDateElementValues: ResetDateElementValues,
        GetIndexFromDate: GetIndexFromDate,
    }
})();
