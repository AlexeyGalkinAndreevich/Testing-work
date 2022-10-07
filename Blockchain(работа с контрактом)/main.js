import ABI from "./abi.js";
const abi = ABI();
console.log(abi);
let accountContract = "0x09AB35aC5c809ef0c49147d74Ba9998991c41B82";

let address = document.querySelector(".account");
let web3, current_account, contractInstance;

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  contractInstance = new web3.eth.Contract(abi, accountContract);
  // web3.eth.getAccounts()
  // .then(console.log);
}
network();
async function getAccounts() {
  let accounts = await web3.eth.getAccounts();

  createInput(accounts);

  let current_account = accounts[0];
  // getBalance(current_account);
}

getAccounts();
// async function getBalance(account) {
//   address.textContent = "Аккаунт: " + account;
//   let balanceWeiP = document.querySelector(".balanceWei");
//   let balanceEthP = document.querySelector(".balanceEth");
//   let balanceWei = await web3.eth.getBalance(account);
//   let balanceEth = await web3.utils.fromWei(balanceWei, "ether");
//   balanceWeiP.textContent = "Баланс в wei: " + balanceWei + " wei";
//   balanceEthP.textContent = "Баланс в eth: " + balanceEth + " eth";
// }

function createInput(accounts) {
  const container = document.querySelector(".container");
  const myInput = document.createElement("input");
  const datalist = document.createElement("datalist");
  myInput.classList.add("myInput");
  datalist.id = "datalist_id";
  myInput.setAttribute("list", "datalist_id");
  for (let i = 0; i < accounts.length; i++) {
    const option = document.createElement("option");
    option.textContent = accounts[i];
    datalist.append(option);
  }
  console.log(datalist.options.length);
  myInput.addEventListener("input", () => {
    for (let i = 0; i < datalist.length; i++) {
      if (
        myInput.value == datalist[i].textContent &&
        current_account != myInput.value
      ) {
        console.log("запрос выполняется");
        current_account = myInput.value;
        getBalance(current_account);
      }
    }
  });
  container.append(myInput, datalist);

  // document.body.append(myInput);
  // document.body.append(datalist);
}
async function getData() {
  let value = "0x5b38da6a701c568545dcfcb03fcb875f56beddc4";

  // let result = await contractInstance.methods.voices.call();
  // // .store(value)
  // // .send({ from: current_account });
  // console.log(value);
  //     console.log(value, current_account);
  // console.log(view_people());
  //  console.log(contractInstance.methods.view_people(value).call());

  let result = await contractInstance.methods.view_people(value).call();

  //.send({ from: current_account });

  console.log(result);
}
getData();
// Получение данных из контракта

// async function getNumber() {
//   const getNumBtn = document.querySelector(".getNumber");
//   const p = document.querySelector(".myNumber");
//   let number = await contractInstance.methods.retrieve().call();
//   //   let sendNumber = contractInstance.methods
//   //     .retrieve()
//   //     .send({ from: "0xF6AdE2dF5034797D0125f4C37294F9035d648a4D" });
//   //   console.log(sendNumber);
//   getNumBtn.addEventListener("click", () => {
//     p.textContent = number;
//   });

//   console.log(number);
//   return number;
// }
// console.log(getNumber());

// async function sendNumber() {
//   const btn = document.querySelector(".sendNumber");
//   console.log(btn);
//   console.log(document.querySelector(".inputNumber"));
//   btn.addEventListener("click", async () => {
//     const value = document.querySelector(".inputNumber").value;
//     console.log(value, current_account);
//     let result = await contractInstance.methods
//       .store(value)
//       .send({ from: current_account });
//     console.log(result);
//     getBalance(current_account);
//   });
// }
// sendNumber();
let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
btn.addEventListener("click", async () => {
  let value = "0x3Fb9484C50532527e7cF9A35082427b6F54d5873";
  let inp = document.querySelector(".inp");
  let inpL = document.querySelector(".inpL").value;
  console.log(inpL, Number(inp.value));
  let result = await contractInstance.methods
    .reg(inpL, Number(inp.value))
    .call({
      from: inpL,
    });
  console.log(result);
});
