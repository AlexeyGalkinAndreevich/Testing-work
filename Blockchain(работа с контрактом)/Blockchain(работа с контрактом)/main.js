let accountContract = "0xF6AdE2dF5034797D0125f4C37294F9035d648a4D";
const abi = [
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
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

  createSelect(accounts);
  createInput(accounts);
  eventInputSelect(accounts);

  let current_account = accounts[0];
  getBalance(current_account);
}

getAccounts();
async function getBalance(account) {
  address.textContent = "Аккаунт: " + account;
  let balanceWeiP = document.querySelector(".balanceWei");
  let balanceEthP = document.querySelector(".balanceEth");
  let balanceWei = await web3.eth.getBalance(account);
  let balanceEth = await web3.utils.fromWei(balanceWei, "ether");
  balanceWeiP.textContent = "Баланс в wei: " + balanceWei + " wei";
  balanceEthP.textContent = "Баланс в eth: " + balanceEth + " eth";
}

function createSelect(accounts) {
  const mySelect = document.createElement("select");
  mySelect.classList.add("mySelect");
  for (let i = 0; i < accounts.length; i++) {
    const option = document.createElement("option");
    option.classList.add("myOp");
    option.textContent = accounts[i];
    mySelect.append(option);
  }
  current_account =
    mySelect.options[mySelect.options.selectedIndex].textContent;
  console.log(current_account);

  document.body.append(mySelect);
}

function createInput(accounts) {
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

  document.body.append(myInput);
  document.body.append(datalist);
}
function eventInputSelect(accounts) {
  const myInput = document.querySelector(".myInput");
  const mySelect = document.querySelector(".mySelect");
  const datalist = myInput.list.options;
  myInput.addEventListener("input", () => {
    for (let i = 0; i < datalist.length; i++) {
      if (
        myInput.value == datalist[i].textContent &&
        current_account != myInput.value
      ) {
        console.log("запрос выполняется");
        current_account = myInput.value;
        mySelect.value = current_account;
        getBalance(current_account);
      }
    }

    // console.log(1)
  });
  mySelect.addEventListener("click", () => {
    let index = mySelect.options.selectedIndex;
    if (current_account != accounts[index]) {
      console.log("тест пройден");
      current_account = accounts[index];
      myInput.value = current_account;
      getBalance(current_account);
    }
  });
}

// Получение данных из контракта

async function getNumber() {
  const getNumBtn = document.querySelector(".getNumber");
  const p = document.querySelector(".myNumber");
  let number = await contractInstance.methods.retrieve().call();
  //   let sendNumber = contractInstance.methods
  //     .retrieve()
  //     .send({ from: "0xF6AdE2dF5034797D0125f4C37294F9035d648a4D" });
  //   console.log(sendNumber);
  getNumBtn.addEventListener("click", () => {
    p.textContent = number;
  });

  console.log(number);
  return number;
}
console.log(getNumber());

async function sendNumber() {
  const btn = document.querySelector(".sendNumber");
  console.log(btn);
  console.log(document.querySelector(".inputNumber"));
  btn.addEventListener("click", async () => {
    const value = document.querySelector(".inputNumber").value;
    console.log(value, current_account);
    let result = await contractInstance.methods
      .store(value)
      .send({ from: current_account});
    console.log(result);
	getBalance(current_account)
  });
}
sendNumber();
