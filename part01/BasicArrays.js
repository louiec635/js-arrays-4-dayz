class BasicArrays{
    /**
     * @param stringArray an array of String objects
     * @return the first element in the array
     */
    getFirstElement(stringArray) {
        return stringArray[0];
    }
    
    /**
     * @param stringArray an array of String objects
     * @return the second element in the array
     */
    getSecondElement(stringArray) {
        return stringArray[1];
    }

    /**
     * @param stringArray an array of String objects
     * @return stringArray with the elements in reverse order
     */
    reverse(stringArray) {
        
        return stringArray.splice(" ").reverse();
    }
    
    /**
     * @param stringArray an array of String objects
     * @return String made up of the first character in each element of stringArray
     */
   getFirstLetterOfEachElement(stringArray) {
        let firstLetter = "";
        for (let i = 0; i < stringArray.length; i++) {
            firstLetter += stringArray[i][0];
        }
        return firstLetter;
    }   
}

module.exports = BasicArrays;