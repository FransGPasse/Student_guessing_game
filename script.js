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

//Gets the ID for the future image of the student to guess
const student = document.querySelector("#studentimage");

//Gets the header
const headerElement = document.querySelector("h2");

//Sets the number of guesses and correct guesses to the starting amount - zero
let guesses = 0;
let correctGuesses = 0;
let highscore = 0;

//Gets the ID for the paragraph element where we can increment the number of guesses
const numOfGuesses = document.querySelector("#numofguesses");

//Initializes some variables that we're going to user later
let studentOnImage;
let firstFourStudents = [];
let playAgain;
let correctStudent;

//Gets a clone of the original array of all students
let spreadStudents = [...students];

//Using Fisher-Yates to randomize the array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

//Puts most of the functionality in to a function
const guessTheStudent = () => {
  //Calling the function to randomize the student array
  shuffleArray(spreadStudents);

  //Setting the image source to the first student in the new randomized array
  student.setAttribute("src", spreadStudents[0].image);

  //Console logging the first students name
  console.log(spreadStudents[0].name);

  //Creates a new array of the shuffled student names
  const mappedStudentNames = spreadStudents.map((arrayItem) => {
    return arrayItem.name;
  });

  //Creates a new array with the first four students from the randomized array
  firstFourStudents = mappedStudentNames.slice(0, 4);

  //Sets the variable studentOnImage to the first student from the new shorter array
  studentOnImage = firstFourStudents[0];

  //Returns a new array with every student from the
  spreadStudents = spreadStudents.filter(
    (person) => person.name !== firstFourStudents[0]
  );

  //Shuffles the new array so we get a random order for the buttons
  shuffleArray(firstFourStudents);

  //Sets the header element
  headerElement.innerHTML = "Who's that student?! 🧐";

  //Clears the future buttons so the function can be reused
  studentNameButtonWrapper.innerHTML = "";

  //Sets the number of guesses to display the correct amount
  numOfGuesses.innerHTML = `Number of guesses: ${guesses}`;

  //Putting the new shuffled array items on to buttons we create here and...
  firstFourStudents.forEach((item) => {
    //Adds an ID of correctstudent to the button with the right name
    if (item == studentOnImage) {
      studentNameButtonWrapper.innerHTML += `<button class="studentnamebtn" role="button" id="correctstudent">${item}</button>`;
    } else {
      studentNameButtonWrapper.innerHTML += `<button class="studentnamebtn" role="button">${item}</button>`;
    }
  });
};

//Calls the function once so we start the game
guessTheStudent();

//Adds an eventlistener to the wrapper and...
studentNameButtonWrapper.addEventListener("click", (e) => {
  //Checks if the click was registered on the actual button
  if ((e.target.tagName == "BUTTON")) {
    //Alerts if guesses are more than 20 and ends the game
    if (guesses >= 20) {
      alert(`GAME OVER! You got ${correctGuesses} out of 20!`);

      //Checks if the current highscore is better than the current amount of correct guesses
      if (highscore < correctGuesses) {
        //Changes the highscore
        highscore = correctGuesses;

        //Displays the highscore as a header
        headerElement.innerHTML = `New highscore is ${highscore}! 🥳`;
      } else {
        headerElement.innerHTML = `Current highscore is ${highscore}. Keep trying!`;
      }

      //Changes the text string at the bottom of the page to a button to restart the game
      numOfGuesses.innerHTML = `<button id="play-again" role="button">Play again</button>`;
      playAgain = document.querySelector("#play-again");
      playAgain.addEventListener("click", () => {
        spreadStudents = [...students];
        guesses = 0;
        correctGuesses = 0;
        guessTheStudent();
      });

      //Otherwise checks if the name on the button is the same as the name of the student on the image
    } else if (e.target.innerHTML === studentOnImage) {
      //Increases the number of guesses and correctly made guesses
      guesses++;
      correctGuesses++;

      //Console logs
      console.log("Correct!");

      //Finds the button with the correct student name and ID of correctstudent
      correctStudent = document.querySelector("#correctstudent");

      //Adds the green border around the button to show that it's correct to the CSS and displays for a while
      correctStudent.classList.add("correct");

      //Calls the function again
      setTimeout(() => {
        guessTheStudent();
      }, 1200);

      //Finally checks if the name clicked is incorrect and in that case adds 1 to number of made guesses
    } else if (e.target.innerHTML !== studentOnImage) {
      guesses++;
      console.log("Incorrect!");

      correctStudent = document.querySelector("#correctstudent");
      const incorrectStudent = e.target;

      //Adds a green border around the correct button and a red around the one the user clicked to show that the guess is incorrect to the CSS and displays for a while
      correctStudent.classList.add("correct");
      incorrectStudent.classList.add("incorrect");

      //Calls the function again
      setTimeout(() => {
        guessTheStudent();
      }, 1200);
    }
  }
});
