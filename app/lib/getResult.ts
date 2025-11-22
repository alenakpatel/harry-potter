

export default function getResult(finalResult:number):string{
    console.log(finalResult);
    let house = "";
    if (finalResult >= 9) {
        house = "Gryffindor"
    } else if (finalResult > 0 && finalResult <= 4) {
        house ="Hufflepuff"
    } else if (finalResult > 4 && finalResult <= 8) {
        house ="Ravenclaw"
    } else if (finalResult <= 0) {
        house ="Slytherin"
    }


    return house;
}