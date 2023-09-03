//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyCbt4Rz58OjEKkNC50wGTpW7l7nHWCuU9s",
    authDomain: "qtintern-1af39.firebaseapp.com",
    projectId: "qtintern-1af39",
    storageBucket: "qtintern-1af39.appspot.com",
    messagingSenderId: "1039833666610",
    appId: "1:1039833666610:web:82aea927e27fbbe085982b",
    measurementId: "G-BLT42LX1KZ"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const form = document.getElementById("myForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");

    try {
        // Add data to Firestore
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email
        });


        alert("Your Form Has Been Submitted Successfully");
        console.log("Document written with ID: ", docRef.id);

        // Clear the form
        form.reset();
    } catch (error) {
        alert("Unsuccessful", error);
        console.error("Error adding document: ", error);
    }
});


//Create Event Listener To Allow Form Submission
form.addEventListener("submit", async (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();

    //Get Form Values
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("fphonenumber").value;
    let country = document.getElementById("fmail").value;
    console.log({
        name: firstName,
        phoneNo: lastName,
        eMail: country,
    });
    db.doc()
        .set({
            name: firstName,
            phoneNo: lastName,
            eMail: country,
        })
        .then(() => { })
        .catch((error) => {
            console.log(error);
        });

    alert("Your Form Has Been Submitted Successfully");
});
