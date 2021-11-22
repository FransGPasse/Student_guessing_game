//Array som innehåller objekt med namn och bild på alla studenter
const students = [
  {
    name: "Adi Dzocaj",
    image: "assets/images/students/adi-dzocaj.jpg",
  },
  {
    name: "Alexander Bergquist",
    image: "assets/images/students/alexander-bergquist.jpg",
  },
  {
    name: "Alexander Kocman",
    image: "assets/images/students/alexander-kocman.jpg",
  },
  {
    name: "Benjamin Benson",
    image: "assets/images/students/benjamin-benson.jpg",
  },
  {
    name: "Benjamin Tsubarah",
    image: "assets/images/students/benjamin-tsubarah.jpg",
  },
  {
    name: "Calle Nilsson",
    image: "assets/images/students/calle-nilsson.jpg",
  },
  {
    name: "Chikage Takahashi Molander",
    image: "assets/images/students/chikage-takahashi-molander.jpg",
  },
  {
    name: "Daniel Be",
    image: "assets/images/students/daniel-be.jpg",
  },
  {
    name: "Daniel Carlsson",
    image: "assets/images/students/daniel-carlsson.jpg",
  },
  {
    name: "Elin Ahlgren",
    image: "assets/images/students/elin-ahlgren.jpg",
  },
  {
    name: "Emma Käck",
    image: "assets/images/students/emma-kack.jpg",
  },
  {
    name: "Eric Ståhl",
    image: "assets/images/students/eric-stahl.jpg",
  },
  {
    name: "Frans Gustavson Påsse",
    image: "assets/images/students/frans-gustavson-passe.jpg",
  },
  {
    name: "Glafira Veretennikova",
    image: "assets/images/students/glafira-veretennikova.jpg",
  },
  {
    name: "Gustaf Grönlund",
    image: "assets/images/students/gustaf-gronlund.jpg",
  },
  {
    name: "Hanna Håkanson",
    image: "assets/images/students/hanna-hakanson.jpg",
  },
  {
    name: "Heidi Sjöberg",
    image: "assets/images/students/heidi-sjoberg.jpg",
  },
  {
    name: "Hugo Carzborn",
    image: "assets/images/students/hugo-carzborn.jpg",
  },
  {
    name: "Jesper Kling",
    image: "assets/images/students/jesper-kling.jpg",
  },
  {
    name: "Johan Ranestam",
    image: "assets/images/students/johan-ranestam.jpg",
  },
  {
    name: "Johanna Bäckström",
    image: "assets/images/students/johanna-backstrom.jpg",
  },
  {
    name: "Johanna Jönsson",
    image: "assets/images/students/johanna-jonsson.jpg",
  },
  {
    name: "Jona Torsson",
    image: "assets/images/students/jona-torsson.jpg",
  },
  {
    name: "Josefine Ahlstedt",
    image: "assets/images/students/josefine-ahlstedt.jpg",
  },
  {
    name: "Julia Jespersdotter Högman",
    image: "assets/images/students/julia-jespersdotter-hogman.jpg",
  },
  {
    name: "Julia Nemell",
    image: "assets/images/students/julia-nemell.jpg",
  },
  {
    name: "Linus Lindberg",
    image: "assets/images/students/linus-lindberg.jpg",
  },
  {
    name: "Malin Olsson",
    image: "assets/images/students/malin-olsson.jpg",
  },
  {
    name: "Maria Haara-Lundhammar",
    image: "assets/images/students/maria-haara-lundhammar.jpg",
  },
  {
    name: "Maria Lövgren",
    image: "assets/images/students/maria-lovgren.jpg",
  },
  {
    name: "Nikola Dimitrijoski",
    image: "assets/images/students/nikola-dimitrijoski.jpg",
  },
  {
    name: "Paulina Kiendys",
    image: "assets/images/students/paulina-kiendys.jpg",
  },
  {
    name: "Raymond Lam",
    image: "assets/images/students/raymond-lam.jpg",
  },
  {
    name: "Robin Karlsson",
    image: "assets/images/students/robin-karlsson.jpg",
  },
  {
    name: "Sara Almqvist",
    image: "assets/images/students/sara-almqvist.jpg",
  },
  {
    name: "Tim Nilsson",
    image: "assets/images/students/tim-nilsson.jpg",
  },
  {
    name: "Tirapat Sukjit",
    image: "assets/images/students/tirapat-sukjit.jpg",
  },
  {
    name: "Tobias Silfverberg",
    image: "assets/images/students/tobias-silfverberg.jpg",
  },
  {
    name: "Wiktoria Dobrzewinska",
    image: "assets/images/students/wiktoria-dobrzewinska.jpg",
  },
];

//Array som innehåller objekt med namn på de elever som inte angett en bild
const missing_students = [
  {
    name: "Andjela Saponjic",
    image: null,
  },
  {
    name: "Cazpian Levén",
    image: null,
  },
  {
    name: "Frida Lam",
    image: null,
  },
  {
    name: "Maxim Khnykin",
    image: null,
  },
  {
    name: "Philip Le",
    image: null,
  },
];

//Finds the wrapper containing all the buttons
const studentNameButtonWrapper = document.querySelector("#button-wrapper");

//Finding ID for the buttons with the name of the students
const studentBtn1 = document.querySelector("#studentbtn1");
const studentBtn2 = document.querySelector("#studentbtn2");
const studentBtn3 = document.querySelector("#studentbtn3");
const studentBtn4 = document.querySelector("#studentbtn4");

//Gets the ID for the future image of the student to guess
const student = document.querySelector("#studentimage");

//Sets the number of guesses and correct guesses to the starting amount - zero
let guesses = 0;
let correctGuesses = 0;

//Gets the ID for the paragraph element where we can increment the number of guesses
const numOfGuesses = document.querySelector("#numofguesses");

let correctStudentName;

let firstFourStudents = [];

//Puts most of the functionality in to a function
const guessTheStudent = function () {
  //Using Fisher-Yates to randomize the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  //Calling the function to randomize the student array
  shuffleArray(students);

  //Setting the image source to the first student in the new randomized array
  student.setAttribute("src", students[0].image);

  //Console logging the first students name
  console.log(students[0].name);

  //Creates a new array with the first four students from the randomized array
  firstFourStudents = [students[0], students[1], students[2], students[3]];

  //Tar rätt namn på studenten på bilden
  correctStudentName = firstFourStudents[0].name;

  //Shuffles the new array so we get a random order for the buttons
  shuffleArray(firstFourStudents);

  //Putting the new shuffled array on to the buttons
  studentBtn1.innerHTML = firstFourStudents[0].name;
  studentBtn2.innerHTML = firstFourStudents[1].name;
  studentBtn3.innerHTML = firstFourStudents[2].name;
  studentBtn4.innerHTML = firstFourStudents[3].name;
};

//Calls the function once 
guessTheStudent();

//Lägger till en eventlistener på wrappern och kollar så att klicket skedde på knappen
studentNameButtonWrapper.addEventListener("click", (e) => {
  if (guesses >= 20) {
    alert("Game over");
  } else if (e.target.innerHTML === correctStudentName && guesses <= 20) {
    guesses++;
    correctGuesses++;
    numOfGuesses.innerHTML = `Number of guesses: ${guesses}`;
    console.log("Correct!");
    console.log(correctGuesses)
    guessTheStudent();
  } else if (e.target.innerHTML !== correctStudentName && guesses <= 20)
  {
    guesses++;
    numOfGuesses.innerHTML = `Number of guesses: ${guesses}`;
    console.log("Incorrect!");
    guessTheStudent();
  }
});
