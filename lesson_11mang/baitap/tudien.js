function transcript() {
    let arr_eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
    let arr_vie = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
    let string = document.getElementById("string").value;
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < arr_eng.length; i++) {
        if (string == arr_eng[i]) {
            index_eng = i;
            for (let j = 0; j < arr_vie.length; j++) {
                if (index_eng == j) {
                    result = arr_vie[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}