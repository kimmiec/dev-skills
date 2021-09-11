// console.log('hi');

// $(document).ready(function() {
//     // alert('hi');
// });


// clear li's when page loads 

//input field takes in text input and stores in variable
    // use jQuery method to get element
    let $input;
    // console.log($input);
    //create event to add text input to variable
    $('#add-skill').on('click', function() {
        $input = $('#input-skill').val();
        
        //add input from input field to list with add skill button
        // create li element with input info
        // attach box to list item
        const $newList = $(`<li><button class='tiny-box'>X</button> ${$input}</li>`);
        // add input from input field 
        $('ul').append($newList);
        //clear input field
        $('#input-skill').val('');
        // remove skill from list
        //when item box is clicked
        //remove item from list 
        
        $('.tiny-box').on('click', function() {
            $(this).closest('li').remove();
        });
        
    });
    
   
    

