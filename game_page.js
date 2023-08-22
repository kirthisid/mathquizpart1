p1name = localStorage.getItem("player_1_name")
p2name = localStorage.getItem("player_2_name")
p1score = 0
p2score = 0
document.getElementById("p1name").innerHTML = p1name + " : "
document.getElementById("p2name").innerHTML = p2name + " : "
document.getElementById("p1score").innerHTML = p1score
document.getElementById("p2score").innerHTML = p2score
qt = "p1"
at = "p2"
document.getElementById("playerquestion").innerHTML = "Question Turn = " + p1name
document.getElementById("playeranswer").innerHTML = "Answer Turn = " + p2name

function send(){
    n1=document.getElementById("num1").value
    n2=document.getElementById("num2").value
    question = n1+" X "+n2
    questionword = "<h4 id='word_display'> Q. " + question + "</h4>"
    ibox = "<br>Anwswer : <input type='number' id='input_check_box'>"
    btn = "<br> <br><button class='btn btn-primary' onclick='check()'>Check</button>"


    row = questionword + ibox + btn
    document.getElementById("output").innerHTML = row
}
function check(){
    getnumber = document.getElementById("input_check_box").value
    number = Number(getnumber)
    if (number == (n1*n2)) {
        if (at == "p1") {
            p1score += 1
            document.getElementById("p1score").innerHTML = p1score
            at = "p2"
            qt = "p1"
            document.getElementById("playerquestion").innerHTML = "Question Turn = " + p1name
            document.getElementById("playeranswer").innerHTML = "Answer Turn = " + p2name

        } else {
            p2score += 1
            document.getElementById("p2score").innerHTML = p2score
            at = "p1"
            qt = "p2"
            document.getElementById("playerquestion").innerHTML = "Question Turn = " + p2name
            document.getElementById("playeranswer").innerHTML = "Answer Turn = " + p1name
        }

    }
    document.getElementById("output").innerHTML = ""
}