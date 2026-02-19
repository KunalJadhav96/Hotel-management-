function selectRoom(room){
    document.getElementById("roomType").value = room;
    window.location.href = "#booking";
}

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let room = document.getElementById("roomType").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    let details = `
        Name: ${name} <br>
        Email: ${email} <br>
        Room: ${room} <br>
        Check-in: ${checkin} <br>
        Check-out: ${checkout}
    `;

    document.getElementById("details").innerHTML = details;
    document.getElementById("dashboard").style.display = "block";
    alert("Booking Confirmed!");
});
