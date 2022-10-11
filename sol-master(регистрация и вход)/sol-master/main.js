import ABI from "./abi.js";
const abi = ABI;

let accountContract = "0xAEc7c39155B5f816E66fD339DcBba8C3a5E10736";

let address = document.querySelector(".account");
let web3, current_account, contractInstance;
let statusSignIn = 0;
let statusSignUp = 0;

function workForm() {
  const modalSignIn = document.querySelector(".modal-sign-in");
  const modalSignUp = document.querySelector(".modal-sign-up");
  if (statusSignIn) {
    modalSignIn.style.display = "flex";
    modalSignUp.style.display = "none";
  } else if (statusSignUp) {
    modalSignUp.style.display = "flex";
    modalSignIn.style.display = "none";
  } else {
    modalSignUp.style.display = "none";
    modalSignIn.style.display = "none";
  }
}

async function eventSignInForm() {
  const closeForm = document.querySelector(".close-sign-in");

  const signInBtn = document.querySelector(".signIn");
  const openSignUp = document.querySelector(".openSignUp");

  const signInAddress = document.querySelector(".signInAddress");
  const signInPassword = document.querySelector(".signInPassword");

  closeForm.addEventListener("click", () => {
    statusSignIn = 0;
    workForm();
  });

  openSignUp.onclick = async function (e) {
    e.preventDefault();
    statusSignIn = 0;
    statusSignUp = 1;
    workForm();
  };
  signInBtn.onclick = async function (e) {
    e.preventDefault();
    if (!signInAddress.value.length) {
      alert("Заполните адрес");
      return;
    } else if (!signInPassword.value.length) {
      alert("Заполните пароль");
      return;
    }
    let password = await web3.utils.soliditySha3({
      t: "string",
      v: signInPassword.value,
    });
    console.log(signInPassword.value, password);
    console.log(signInAddress.value + " " + password);
    console.log(web3.utils.soliditySha3("user1"));

    let result = await contractInstance.methods
      .sing_in(signInAddress.value, password)
      .call({ from: signInAddress.value })
      .catch(function (error) {
        const data = error.data;
        const txHash = Object.keys(data)[0];
        const reason = data[txHash].reason;
        console.log(reason);
      });
    console.log(result);
    if (result) {
      alert("Вы успешно вошли");
      statusSignIn = 0;
    }
    workForm();
  };
}

eventSignInForm();
function eventSignUpForm() {
  const closeForm = document.querySelector(".close-sign-up");

  const signUpBtn = document.querySelector(".signUp");
  const openSignIn = document.querySelector(".openSignIn");

  const signUpAddress = document.querySelector(".signUpAddress");
  const signUpLogin = document.querySelector(".signUpLogin");
  const signUpPassword = document.querySelector(".signUpPassword");

  closeForm.addEventListener("click", () => {
    statusSignUp = 0;
    workForm();
  });

  openSignIn.onclick = async function (e) {
    e.preventDefault();
    statusSignIn = 1;
    statusSignUp = 0;
    workForm();
  };
  signUpBtn.onclick = async function (e) {
    e.preventDefault();
    console.log(signUpAddress.value);
    if (!signUpAddress.value.length) {
      alert("Заполните адрес");
      return;
    } else if (!signUpLogin.value.length) {
      alert("Заполните логин");
      return;
    } else if (!signUpPassword.value.length) {
      alert("Заполните пароль");
      return;
    }
    let password = web3.utils.soliditySha3({
      t: "string",
      v: signUpPassword.value,
    });
    // console.log(password,signUpPassword.value)
    let result = await contractInstance.methods
      .reg(signUpAddress.value, password, signUpLogin.value)
      .send({ from: String(signUpAddress.value) })
      .catch(function (error) {
        const data = error.data;
        const txHash = Object.keys(data)[0];
        const reason = data[txHash].reason;
        console.log(reason);
        alert(reason);
      });
    console.log(result);
    if (result) {
      alert("Вы успешно зарегистрировались");
      statusSignUp = 0;
    }
    workForm();
  };
}
eventSignInForm();
eventSignUpForm();

function eventOpenForm() {
  const btnSignIn = document.querySelector(".btnSignIn");
  const btnSignUp = document.querySelector(".btnSignUp");

  btnSignIn.addEventListener("click", () => {
    statusSignIn = 1;
    workForm();
  });
  btnSignUp.addEventListener("click", () => {
    statusSignUp = 1;
    workForm();
  });
}
eventOpenForm();
const ulTransactions = document.createElement("ul");
document.body.append(ulTransactions);

function network() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  contractInstance = new web3.eth.Contract(abi, accountContract);
  workForm();
}
network();
async function getAccounts() {
  let accounts = await web3.eth.getAccounts();

  createInput(accounts);

  current_account = accounts[0];
  registr(current_account);
  getBalance(current_account);
}

getAccounts();
async function getBalance(account) {
  address.textContent = "Аккаунт: " + account;
  let balanceEthP = document.querySelector(".balanceEth");
  let balanceWei = await web3.eth.getBalance(account);
  let balanceEth = await web3.utils.fromWei(balanceWei, "ether");
  balanceEthP.textContent = "Баланс в eth: " + balanceEth + " eth";
}

function createInput(accounts) {
  const container = document.querySelector(".container");
  const myInput = document.createElement("input");
  const datalist = document.createElement("datalist");

  myInput.classList.add("myInput");
  datalist.id = "datalist_id";
  myInput.setAttribute("list", "datalist_id");
  myInput.placeholder = "select an account";
  container.append(datalist);
  for (let i = 0; i < accounts.length; i++) {
    const option = document.createElement("option");
    option.textContent = accounts[i];
    datalist.append(option);
  }
  myInput.addEventListener("input", () => {
    for (let i = 0; i < datalist.options.length; i++) {
      if (
        myInput.value == datalist.options[i].textContent &&
        current_account != myInput.value
      ) {
        console.log("запрос выполняется");
        current_account = myInput.value;
        registr(current_account);
        getBalance(current_account);
        create_transaction_ul();
      }
    }
  });
  container.append(myInput, datalist);
}

async function getApplications() {
  let number = await contractInstance.methods.view_aplications().call();

  // console.log(number);
  return number;
}
async function getUser(address) {
  let user = await contractInstance.methods.view_people(address).call();

  console.log(user);
}
getUser("0x92763b27EAd68afA7E98F81aF41113464d2B1b4B");
// getPassword();
let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");

async function registr(account) {
  let inp = document.querySelector(".inp1");
  let stat = document.querySelector(".stat");
  let btnSignUp = document.querySelector(".btnSignUp");
  let btnSignIn = document.querySelector(".btnSignIn");
  let result = await contractInstance.methods
    .reg_test(account)
    .call()
    .catch(function (error) {
      const data = error.data;
      const txHash = Object.keys(data)[0];
      const reason = data[txHash].reason;
      stat.textContent = reason;
      console.log(reason);
      if (reason == "you registated") {
        inp.style.display = "block";
        // create_transf();
      }
      // else {
      //   inp.style.display = "none";
      // }
    });
  if (result) {
    stat.textContent = "you not registated";
    inp.style.display = "none";
  }
}

async function create_transf() {
  const people = document.querySelector(".why");
  const summa = document.querySelector(".sum");
  const codeword = document.querySelector(".code");
  const button = document.querySelector(".btn");
  //   let inp = document.querySelector(".inp1");

  //   inp.append(people);
  //   inp.append(summa);
  //   inp.append(codeword);
  //   // address login, uint sum, string memory cod_word
  button.addEventListener("click", async () => {
    console.log(summa.value * 10 ** 18);
    let summa1 = web3.utils.fromWei(String(summa.value * 10 ** 18), "ether");
    console.log(summa1);
    let res = await contractInstance.methods
      .translation_formation(
        people.value,
        String(summa.value * 10 ** 18),
        web3.utils.soliditySha3({
          t: "string",
          v: codeword.value,
        })
      )
      .send({
        from: current_account,
        value: String(summa.value * 10 ** 18),
        gas: 3000000,
      });
    console.log(res);
    create_transaction_ul();
    location.reload();
  });
}
create_transf();

function create_transaction_li(
  id,
  from,
  to,
  summa,
  statusClose,
  statusCloseOwner,
  statusCloseRecipient
) {
  const div = document.createElement("div");

  const transactionId = document.createElement("p");
  const pFrom = document.createElement("p");
  const pTo = document.createElement("p");
  const pSumma = document.createElement("p");
  const Pstatus = document.createElement("p");

  transactionId.textContent = "Transaction id: " + id;
  pFrom.textContent = "from: " + from;
  pTo.textContent = "to: " + to;
  pSumma.textContent = "sum: " + summa;
  Pstatus.textContent = "Статус: ";
  if (statusClose) {
    Pstatus.textContent += "Перевод завершен";
  } else {
    Pstatus.textContent += "Перевод незавершен";
  }
  if (statusCloseOwner) {
    Pstatus.textContent += " отправителем";
  }
  if (statusCloseRecipient) {
    Pstatus.textContent += " получателем";
  }
  if (!statusCloseOwner && !statusCloseRecipient) {
    Pstatus.textContent += "(деньги переведены)";
  }
  // document.body.append(div);
  div.append(transactionId);
  div.append(pFrom);
  div.append(pTo);
  div.append(pSumma);
  div.append(Pstatus);

  if (from == current_account && statusClose == false) {
    const buttonCancelFrom = document.createElement("button");
    buttonCancelFrom.textContent = "Отменить перевод";
    buttonCancelFrom.classList.add("buttonCancelFrom");

    buttonCancelFrom.addEventListener("click", async () => {
      let res = await contractInstance.methods
        .canceling_owner_transfer(id)
        .send({
          from: current_account,
          gas: 3000000,
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(res);
      console.log(await contractInstance.methods.view_aplications().call());
    });

    div.append(buttonCancelFrom);
  } else if (to == current_account && statusClose == false) {
    const divBtnTo = document.createElement("div");

    const inputAcceptCodWord = document.createElement("input");
    const buttonAcceptTo = document.createElement("button");
    const buttonCancelTo = document.createElement("button");

    buttonAcceptTo.textContent = "Принять";
    buttonAcceptTo.classList.add("buttonAcceptTo");

    buttonCancelTo.textContent = "Отказаться от перевода";
    buttonCancelTo.classList.add("buttonCancelTo");

    buttonAcceptTo.addEventListener("click", async () => {
      let res = await contractInstance.methods
        .acceptance_of_translation(
          id,
          web3.utils.soliditySha3({
            t: "string",
            v: inputAcceptCodWord.value,
          })
        )
        .send({
          from: current_account,
          gas: 3000000,
        })
        .catch(function (error) {
          console.log(error);
        });
      location.reload();
      console.log(res);
    });

    buttonCancelTo.addEventListener("click", async () => {
      console.log("click");
      let res = await contractInstance.methods
        .canceling_recipient_transfer(id)
        .send({
          from: current_account,
          gas: 3000000,
        })
        .catch(function (error) {
          console.log(error);
        });
      location.reload();
    });

    div.append(inputAcceptCodWord);
    divBtnTo.append(buttonAcceptTo, buttonCancelTo);
    div.append(divBtnTo);
  }
  return div;
}

async function create_transaction_ul() {
  let applications = await contractInstance.methods.view_aplications().call();
  console.log(applications);
  ulTransactions.innerHTML = "";
  console.log(ulTransactions);
  for (let i = 0; i < applications.length; i++) {
    let from = applications[i]["owner"];
    let to = applications[i]["recipient"];
    let summa = applications[i]["sum"];
    let statusClose = applications[i]["status"];
    let statusCloseOwner = applications[i]["statusOwner"];
    let statusCloseRecipient = applications[i]["statusRecipient"];

    console.log(from);
    console.log(current_account);
    console.log(from == current_account || to == current_account);
    if (from == current_account || to == current_account) {
      const li = document.createElement("li");
      li.append(
        create_transaction_li(
          i,
          from,
          to,
          summa,
          statusClose,
          statusCloseOwner,
          statusCloseRecipient
        )
      );
      ulTransactions.append(li);
    }
  }
  console.log(ulTransactions);
}

create_transaction_ul();
