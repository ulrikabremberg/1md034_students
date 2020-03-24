window.onload = function(){

  'use strict';
  const socket = io();


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


    const wrap = new Vue({
      el: '.wrapper',
      data: {

        food: food,

      },
    });

    const information = new Vue({
      el: '#myButtonID',
      data: {
        fname: "",
        vemail: "",
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

          if (document.getElementById(food[0].name).checked) {
            information.firstBurger = " " + food[0].name + " ordered!";
          }

          if (document.getElementById(food[1].name).checked) {
            information.sndBurger = " " + food[1].name + " ordered!";
          }

          if (document.getElementById(food[2].name).checked) {
            information.thirdBurger = " " + food[2].name + " ordered!";
          }

          if (document.getElementById(food[3].name).checked) {
            information.thirdBurger = " " + food[3].name + " ordered!";
          }

          if (document.getElementById(food[4].name).checked) {
            information.thirdBurger = " " + food[4].name + " ordered!";
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
            customerInfo: [information.fname, information.vemail, information.vgender, information.vpayment],
          });
        },
        getNext: function() {
          this.counter += 1;
          return this.counter;
        },
      },
    });



  }
