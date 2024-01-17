/*
-   website-10 "CyberLaw"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    /*
        ---------------------------------------------------------------------------------
        | looped data set in layout                                                     |
        ---------------------------------------------------------------------------------
    */

    let act_container = document.getElementById('act_container')
    
    CyberLawData.forEach((data) => {
        act_container.insertAdjacentHTML('beforeend',`${detailLayout(data)}`)    
    });


    /*
        =================================================================================
        } Search Bar Function : on key press check detail summary inner data with value
        =================================================================================
    */

    let search = document.getElementById("bar")

    let data_list = document.querySelectorAll("#act_container details")

    search.onkeyup = () =>
    {        
        for(var i = 0; i < data_list.length; i++)
        {
            let data = data_list[i].firstElementChild
            
            data = data.firstElementChild.innerHTML + data.lastElementChild.innerHTML
            
            data = data.toUpperCase() // final data pick
            
            /* if search value inner words match with data than display block else none */
            
            if (data.indexOf(search.value.toUpperCase()) > -1)
            {
                data_list[i].style.display = 'block'             
            }
            else
            {
                data_list[i].style.display = 'none'
            }
        }
    }
    
    /*  ==============================================================================  */ 
}
catch(error)
{
    console.error(`${error}`)
}
