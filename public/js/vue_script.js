window.onload = function(){


  const vm = new Vue({
    el: '.wrapper',
    data: {
      name1: food[0].name,
      img1: food[0].img,
      kcal1: food[0].kcal,
      allergy1: food[0].allergy,

      name2: food[1].name,
      img2: food[1].img,
      kcal2: food[1].kcal,
      allergy2: food[1].allergy,

      name3: food[2].name,
      img3: food[2].img,
      kcal3: food[2].kcal,
      allergy3: food[2].allergy,

    }
  });

  const information = new Vue({
    el: '#customer',
    data: {
      fname: "",
      vemail: "",
      vstreet: "",
      housenr: "",
      vgender: "",
      vpayment: "",
      inputArray: "",
      firstBurger: "",
      sndBurger: "",
      thirdBurger: "",

    },
    methods: {
      markDone: function() {
        console.log("Button clicked");
        information.fname = " Full name: " + document.getElementById("fullname").value;
        information.vemail = " Email: " + document.getElementById("email").value;
        information.vstreet = " Street name: " + document.getElementById("street").value;
        information.housenr = " Street number: " + document.getElementById("nr").value;

        if (document.getElementById("female").checked){
          information.vgender = " Gender: " + document.getElementById("female").value;
        }
        else if (document.getElementById("male").checked){
          information.vgender = " Gender: "+ document.getElementById("male").value;
        }
        else{
          information.vgender = " Gender: " + document.getElementById("other").value;
        }

        information.vpayment= " Payment method: " + document.getElementById("payment").value;

        if (document.getElementById("vhallo").checked) {
          information.firstBurger = " " + food[0].name + " ordered!";
        }

        if (document.getElementById("vchick").checked) {
          information.sndBurger = " " + food[1].name + " ordered!";
        }

        if (document.getElementById("vbean").checked) {
          information.thirdBurger = " " + food[2].name + " ordered!";
        }


        information.inputArray = " Customer information: " + [information.fname, information.vemail, information.vstreet, information.housenr, information.vpayment, information.vgender, information.firstBurger, information.sndBurger, information.thirdBurger] ;
        console.log(information.inputArray);


      }
    }
  });
}

/* Html för detta är : <script src="https://vuejs.org/js/vue.js"></script>
<div id="myID" style="white-space:pre-wrap">
<h1>{{arbitraryVariableName}}</h1>
<h4 v-for = "burgers in menu">{{burgers}}
</h4>
</div> */
