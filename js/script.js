let data = [
  {
    id: 1,
    img: "./img/Avatar.png",
    name: "Jacobsurname",
    surname: "surname",
    email: "jackson.graham@example.com",
    city: "Dushanbe",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 2,
    img: "./img/Avatar(1).png",
    name: "Jenny",
    surname: "Wilson",
    email: "jessica.hanson@example.com",
    city: "Kulob",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 3,
    img: "./img/Avatar(2).png",
    name: "Guy",
    surname: "Hawkins",
    email: "bill.sanders@example.com",
    city: "Dushanbe",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 4,
    img: "./img/Avatar(3).png",
    name: "Cody",
    surname: "Fisher",
    email: "michael.mitc@example.com",
    city: "Bokhtar",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 5,
    img: "./img/Avatar(4).png",
    name: "Esther",
    surname: "Howard",
    email: "felicia.reid@example.com",
    city: "Dushanbe",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 6,
    img: "./img/Avatar(5).png",
    name: "Kristin",
    surname: "Watson",
    email: "kenzi.lawson@example.com",
    city: "Khujand",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 7,
    img: "./img/Avatar(6).png",
    name: "Dianne",
    surname: "Russell",
    email: "deanna.curtis@example.com",
    city: "Dushanbe",
    status: "INACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
  {
    id: 8,
    img: "./img/Avatar(7).png",
    name: "Ronald",
    surname: "Richards",
    email: "tim.jennings@example.com",
    city: "Hisor",
    status: "ACTIVE",
    mobile_phone: 888880090,
    complete: false,
  },
];

let root = document.querySelector("#root");

let delModal = document.querySelector(".delModal");
let btnYes = document.querySelector(".btnYes");
let btnNo = document.querySelector(".btnNo");

let tableSec = document.createElement("div");
tableSec.classList.add("tableSec");

let table = document.querySelector(".table");

let thImg = document.createElement("th");
thImg.innerHTML = "Img";

let thEmail = document.createElement("th");
thEmail.innerHTML = "Email";

let thCity = document.createElement("th");
thCity.innerHTML = "City";

let thStatus = document.createElement("th");
thStatus.innerHTML = "Status";

let thPhone = document.createElement("th");
thPhone.innerHTML = "Phone";

let thOpt = document.createElement("th");
thOpt.innerHTML = "Options";

//OPEN DEL MODAL

let idxDel = null;
function openDelModal(id) {
  idxDel = id;
  delModal.showModal();
}

//BTN YES

btnYes.onclick = () => {
  data = data.filter((e) => {
    return e.id !== idxDel;
  });
  getData(data);
  delModal.close();
};

//BTN NO

btnNo.onclick = () => {
  delModal.close();
};

//GET DATA

function getData(data) {
  table.innerHTML = "";

  let th = document.createElement("tr");
  th.append(thImg, thCity, thEmail, thOpt, thPhone, thStatus);
  table.appendChild(th);
  data.forEach((e) => {
    let tr = document.createElement("tr");

    //NAME & SURNAME & EMAIL

    let n_s = document.createElement("td");
    n_s.classList.add("name_surname");

    //IMG

    let tdImg = document.createElement("td");
    tdImg.classList.add("tdImg");

    //CITY

    let location = document.createElement("td");
    location.classList.add("city");

    //status

    let tdStatus = document.createElement("td");
    tdStatus.classList.add("status");

    //phone numbers

    let tdNum = document.createElement("td");
    tdNum.classList.add("tdNum");

    //BTN DELETE

    let tdDel = document.createElement("td");
    tdDel.classList.add("tdDel");

    ////////////////////////////////////////////////////////////////

    let img = document.createElement("img");
    img.src = e.img;

    let name = document.createElement("h4");
    name.innerHTML = e.name + " " + e.surname;
    let email = document.createElement("p");
    email.innerHTML = e.email;

    let cityName = document.createElement("h3");
    cityName.innerHTML = e.city;

    let statusName = document.createElement("span");
    statusName.innerHTML = e.status;
    if (e.status == "ACTIVE") {
      statusName.style.background = "blue";
    } else if (e.status == "INACTIVE") {
      statusName.style.background = "gray";
    }

    let num = document.createElement("p");
    num.innerHTML = e.mobile_phone;

    let btnDel = document.createElement("button");
    btnDel.innerHTML = "DEL";
    btnDel.onclick = () => {
      openDelModal(e.id);
    };

    tdDel.append(btnDel);
    tdNum.append(num);
    tdStatus.append(statusName);
    location.append(cityName);
    n_s.append(name, email);
    tdImg.append(img);
    tr.append(tdImg, n_s, location, tdStatus, tdNum, tdDel);
    table.append(tr);
    tableSec.append(table);
  });
  root.append(tableSec);
}
getData(data);
