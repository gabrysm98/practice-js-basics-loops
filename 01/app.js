const randomNumber = Math.round(Math.random() * 20);
console.log("Wylosowana liczba to: " + randomNumber);

if(randomNumber > 5){
    for (let i = 5; i < randomNumber + 1; i++) {
        console.log(i);
    }
} else{
    console.log("Wylosowana liczba jest zbyt mała, aby użyć pętli");
}
