window.onload = function () {

    // store document
    var d = document;
    /*
    > Storing two nodeElements and replacing the old with the new
    > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
    */
    //
    // PART 1
    //
    // store total number of messages
    var numberCards = d.getElementsByClassName('cards')[0].childElementCount;

    // creating new <strong class="messages_count messages_count--total">     
    var newElement = d.createElement('strong');
    // adding multiple classes newElement to node
    newElement.classList.add('messages_count', 'messages_count--total');
    // creating textNode for new total
    var newTotal = d.createTextNode(numberCards);
    // storing textNode newTotal (the number as textNode) in newElement
    newElement.appendChild(newTotal);
    //
    // PART 2
    //
    // storing the elements, new and old
    var oldElement = d.getElementsByClassName('messages__count')[0];
    // preparing the DOM position PARENT in order to msodify its' child
    var parentElement = oldElement.parentElement;
    parentElement.replaceChild(newElement, oldElement);

    /*
    > when clicked on trash, delete the corresponding CARD - yes
    > add a callback for the newTotal number of messages - yes
    > EXTRA add personnalized <title>-message according to user on hover - no
    > EXTRA add mouseover/mouseout - yes
    > EXTRA add some animation for some TOP CLASS interaction - yes
    > EXTRA if possible, PROMPT the user before deleting - yes
    */
    //
    // PART 3
    //
    // storing the card node . detecting the class . 
    // var target = d.getElementsByClassName("card")[0].getElementsByClassName('card__item--delete')[0].classList[1];
    // storing a click-event in a FOR loop, asynchron

    for (var i = 0; i < numberCards; i++) {
        // store target tag to be clicked in DOM
        var cTarg = d.getElementsByClassName('card__item--delete')[i];
        // store user target message on hover
        //        var hTarg = d.getElementsByClassName('card__item--delete')[i];
        //        console.log(hTarg);
        // mouseoverEvent
        cTarg.addEventListener('mouseover', function () {
            //             console.log('"you hovered in" on the class ' + this.classList[1]);
        });
        // mouseoutEvent
        cTarg.addEventListener('mouseout', function () {
            //             console.log('"you hovered out" of the class ' + this.classList[1]);
        });
        // clickEvent
        cTarg.addEventListener('click', function () {
            //            console.log('"you clicked" on the class ' + this.classList[1]);
            if (window.confirm('Voulez vous vraiement supprimer ce message?')) {
                alert('Message N° ' + i + ' est supprimé');
                this.closest('.card').remove();
                i--;
                newElement.textContent = i;
            }
        });
    }

    //
    // PART 4 - Storing the added input on button click
    //
    // variables 
    var gPrenom;
    var gNom;
    var cButton;
    var input1 = d.getElementById('nom');
    var input2 = d.getElementById('prenom');
    // store DOM travel
    cButton = d.getElementsByClassName('form__item--button')[0];
    // auto-closing tags doesn't have a html-list to chose from
    gPrenom = d.getElementById('prenom');
    gNom = d.getElementById('nom');
    // 
    // list events DOM > https://developer.mozilla.org/fr/docs/Web/Events
    gNom.addEventListener('blur', function () {
        // console.log('next-1');
    });
    gPrenom.addEventListener('blur', function () {
        // console.log('next-2');
    });


    cButton.addEventListener('click', function (event) {
        event.preventDefault();
        //  console.log('mousedown');
        // console.log('clicked'); 
        // > if the inputs have got text, store it, if not alert > "No text stored" via a span in the form 
        // > Opération logiques JS > https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques
        // Expressions et opérateurs > https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs
        // IF ([input 1 does not have a value])
        if (input1 && !input1.value && input2 && !input2.value) {
            console.log('It\'s all empty!');
        } else if (input1 && !input1.value) {
            console.log('Nothing is written in the NAME field');
            // IF ([input 1 has a value] OR [input2 has a value])
        } else if (input2 && !input2.value) {
            console.log('Nothing is written in the FIRST NAME field');
            // IF ([input 1 has a value] AND [input2 has a value])
        } else if (input1 && input1.value && input2 && input2.value) {
            // finding the card
//            var newCard = d.getElementsByClassName('card')[0];
            d.getElementsByClassName('cards').appendChild('newCard');   
//            console.log(newCard);
        }
    });






}; // window onload
