function cardDistribution(personArray){
    const giftCardArr=[]
    let cardSerial = 1
    
    personArray.map(({district, currentYear, postNo, birthYear,  priority})=> {
        const gift = getRose(cardSerial)
        const cardNumber = getFirstTwoChar(district)+getLastTwoNum(currentYear) + getFirstTwoNum(postNo) + birthYear.toString() + zeroPad(cardSerial)
       

        giftCardArr.push({
            cardNumber,
            gift,
            priority
        })

        cardSerial ++
    })

    sortedCardNumber(giftCardArr);
    return giftCardArr
}

  // sort by priority
const sortedCardNumber = (cardArr) => {
    cardArr.sort((a, b) => {
        return a.priority - b.priority;
      });

    return cardArr
}

const getFirstTwoChar = (str) => {
    return  str.slice(0, 2).toUpperCase()
}


const getFirstTwoNum = (num) => {
    return  num.toString().slice(0, 2)
}


const getLastTwoNum = (year) =>  {
    return year.toString().slice(-2).toUpperCase()
}

const zeroPad = (num) => {
    return num.toString().padStart(6, '0')
}

const getRose= (serialNum) =>{
    return serialNum % 2 ?  "W" : "R"
}

// const result = cardDistribution([
//     {name: "Mr Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2},
//     {name: "Mr Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1},
// ])

// console.log(result);