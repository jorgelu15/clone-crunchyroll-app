const useText = () => {

    const subStringText = (text, numScape) => {

        return text?.length > numScape ? text.substring(0, numScape).concat("...") : text.substring(0, numScape);
    }

    return {
        subStringText
    }
}

export default useText;