window.onload = function(){

  'use strict';
  const socket = io();

  /* eslint-disable-next-line no-unused-vars */
  /* eslint-disable-next-line no-unused-vars */
  const vm = new Vue({
    el: '#dots',
    data: {
      orders: {},
      orderObject: {x:0, y:0},
    },
    methods: {

      displayOrder: function(event) {
        let offset = {
          x: event.currentTarget.getBoundingClientRect().left,
          y: event.currentTarget.getBoundingClientRect().top,
        };
        this.orderObject = {x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y};
        },
      },
    });
    /* eslint-disable-next-line no-unused-vars */


    const wrap = new Vue({
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
      el: '#myButtonID',
      data: {
        fname: "",
        vemail: "",
        //  vstreet: "",
        //  housenr: "",
        vgender: "",
        vpayment: "",
        inputArray: "",
        firstBurger: "",
        sndBurger: "",
        thirdBurger: "",
        counter: 0,

      },
      methods: {
        markDone: function() {
          console.log("Button clicked");
          information.fname = " Full name: " + document.getElementById("fullname").value;
          information.vemail = " Email: " + document.getElementById("email").value;
          // information.vstreet = " Street name: " + document.getElementById("street").value;
          //information.housenr = " Street number: " + document.getElementById("nr").value;

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

          information.inputArray = "" + [information.fname, information.vemail,/* information.vstreet, information.housenr, */information.vpayment, information.vgender, information.firstBurger, information.sndBurger, information.thirdBurger] ;
          console.log(information.inputArray);



      },
      addOrder: function() {

        socket.emit('addOrder', {
          orderId: this.getNext(),
          details: {
            x: vm.orderObject.x,
            y: vm.orderObject.y,
          },
          orderItems: [information.firstBurger, information.sndBurger, information.thirdBurger],
        });
      },
      getNext: function() {
        this.counter += 1;
        return this.counter;
      },
    },
    });



  }

  /* Html för detta är : <script src="https://vuejs.org/js/vue.js"></script>
  <div id="myID" style="white-space:pre-wrap">
  <h1>{{arbitraryVariableName}}</h1>
  <h4 v-for = "burgers in menu">{{burgers}}
  </h4>
  </div> */
