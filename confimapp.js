let strQty = sessionStorage.getItem("qty");
let qtyArray = JSON.parse(strQty);
let show = () => {
    // alert("show");
    if (sessionStorage.getItem("items") != null) {
        let jstr = sessionStorage.getItem("items");
        let arr = JSON.parse(jstr);
        // ans.innerHTML = arr.length;
        let str = "<table>";

        // ပထမဆုံး ့table headerအတွက် 

        str += "<tr>";
        str += "<th>No</th>";
        str += "<th>Image</th>";
        str += "<th>Name</th>";
        str += "<th>Price</th>";
        str += "<th>Qty</th>";
        str += "<th>Total</th>";
        str += "<th></th>";
        str += "</tr>";

        let no = 1,
            total = 0,
            tamount = 0;

        //အလယ်ကကျ ရွေးထားတဲ့ item တွေကို ဖော်ပြမယ်။ 
        for (i = 0; i < arr.length; i++) {
            str += "<tr>";

            str += "<td>" + no + "</td>";
            no++;
            str += "<td><img src='" + arr[i].iImage + "' class='itemimg'></td>";
            str += "<td>" + arr[i].iname + "</td>";
            str += "<td>" + arr[i].iprice + "</td>";
            str += "<td><input  type='number' value='1' min='1' onchange='calBalance(this);'></td>";

            str += "<td>" + arr[i].iprice + "</td>";
            str += "<td onclick='del(this);'><button class='delete'><i class='bi bi-trash3-fill'></i></button></td>";
            total += parseInt(arr[i].iprice);
            str += "</tr>";
        }
        str += "<th colspan='5'>Balance</th>";
        str += "<th id='balance'>" + total + "</th><th><a href='continue.html' class='continue'>Continue</a></th>";
        str += "</table>";
        ans.innerHTML = str;
    } else {
        ans.innerHTML = "<h2>No Item in your cart ! </h2>"
    }
}
let del = (deltde) => {

    let tre = deltde.parentNode; // သူက ကိုယ်del ကိုနှိပ်လိုက်တဲ့ကောင်ရဲ့ row ကို ရှာတာပေါ့
    let name = tre.children[2].innerHTML; // သူက အပေါ်က ကိုယ်ယူလိုက်တဲ့ row မှာ ပါတဲ့ 
    //မုန့်နာမည်ကိုယူတာ တကယ်က codeနံပါတ်ယူသင့်တာ  အစက မထည့်မိလို့ အခုname နဲ့စစ်ရတာ
    let jstr = sessionStorage.getItem("items");
    let arr = JSON.parse(jstr);
    let jqty = sessionStorage.getItem("qty"); //qty အတွက်
    let qtyarr = JSON.parse(jqty); //qty အတွက်
    let arr2 = new Array();
    let arr3 = new Array();
    let j = 0;
    alert(jstr);
    alert(jqty);
    for (i = 0; i < arr.length; i++) {
        if (arr[i].iname != name) {
            arr2[j++] = arr[i];
            arr3[j++] = qtyarr[i];
            sessionStorage.qty = qtyarr[i];

        }
    }
    jstr = JSON.stringify(arr2);
    jqty = JSON.stringify(arr3);
    sessionStorage.setItem("items", jstr);
    // sessionStorage.setItem("qty", jqty);


    ans.innerHTML = "";
    //show();

    //show ကဟာ ကူးတာ


    // alert("show");
    if (sessionStorage.getItem("items") != null) {
        let jstr = sessionStorage.getItem("items");
        let arr = JSON.parse(jstr);
        let jqty = sessionStorage.getItem("qty"); //qty အတွက်
        let qtyarr = JSON.parse(jqty); //qty အတွက်
        // ans.innerHTML = arr.length;
        let str = "<table>";

        // ပထမဆုံး ့table headerအတွက် 

        str += "<tr>";
        str += "<th>No</th>";
        str += "<th>Image</th>";
        str += "<th>Name</th>";
        str += "<th>Price</th>";
        str += "<th>Qty</th>";
        str += "<th>Total</th>";
        str += "<th></th>";
        str += "</tr>";

        let no = 1,
            total = 0,
            tamount = 0;

        //အလယ်ကကျ ရွေးထားတဲ့ item တွေကို ဖော်ပြမယ်။ 
        for (i = 0; i < arr.length; i++) {
            str += "<tr>";
            // alert(qtyarr[i]);
            str += "<td>" + no + "</td>";
            no++;
            str += "<td><img src='" + arr[i].iImage + "' class='itemimg'></td>";
            str += "<td>" + arr[i].iname + "</td>";
            str += "<td>" + arr[i].iprice + "</td>";
            str += "<td><input type='number' value='" + qtyarr[i] + "' min='1' id='" + i + " onchange='calBalance(this);'></td>";

            str += "<td>" + arr[i].iprice + "</td>";
            str += "<td onclick='del(this);'><button class='delete'><i class='bi bi-trash3-fill'></i></button></td>";
            total += parseInt(arr[i].iprice);
            str += "</tr>";
        }
        str += "<th colspan='5'>Balance</th>";
        str += "<th id='balance'>" + total + "</th><th><a href='continue.html' class='continue'>Continue</a></th>";
        str += "</table>";
        ans.innerHTML = str;
    } else {
        ans.innerHTML = "<h2>No Item in your cart ! </h2>"
    }
    //ဒီထိက show () ထဲကဟာ

}


let back = () => {}

let calBalance = (qtye) => {
    let qty = parseInt(qtye.value);
    // sessionStorage.setItem("qty", qty);

    // alert(sessionStorage.getItem("qty"));
    let tre = qtye.parentNode.parentNode;
    let carr = tre.children;
    // alert(carr.length);
    let price = parseInt(carr[3].innerHTML);
    let oldtotal = parseInt(carr[5].innerHTML);
    let total = price * qty;
    carr[5].innerHTML = total;
    let b = parseInt(balance.innerHTML);
    b -= oldtotal;
    b += total;
    balance.innerHTML = b;
}