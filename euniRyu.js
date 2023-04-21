const basicData = [
  { number: 1, name: "코카콜라", price: 1500 },
  { number: 2, name: "사이다", price: 1200 },
  { number: 3, name: "포카리스웨트", price: 1000 },
  { number: 4, name: "칸쵸", price: 800 },
  { number: 5, name: "오예스", price: 1000 },
  { number: 6, name: "초코파이", price: 1200 },
  { number: 7, name: "허니버터칩", price: 1500 },
  { number: 8, name: "새우깡", price: 900 },
  { number: 9, name: "치즈볼", price: 1200 },
  { number: 10, name: "신라면", price: 900 }
];

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};

function exampleOne(inputPrice, currency, basicData){
  let buyYes = [];

  for(let i = 0; i < Object.keys(currency).length; i++){
    if(inputPrice === currency[Object.keys(currency)[i]].value){
      console.log(`${currency[Object.keys(currency)[i]].name}을 넣었습니다.`)
    }
  }
  for(let i = 0; i < Object.keys(basicData).length; i++){
    if(inputPrice >= basicData[Object.keys(basicData)[i]].price){
      buyYes.push(basicData[Object.keys(basicData)[i]].name);
    }
  }

  if(buyYes.length === 0){
    console.log(`구매 가능한 물품이 없습니다.`)
    console.log("잔액이 부족합니다.")

  }
  else{
    console.log(`구매 가능한 물품은 ${buyYes}입니다.`)

    if(buyYes.length === Object.keys(basicData).length){
      console.log("당신은 부자입니다.")
    }
  }

}
exampleOne(1000, currency, basicData)