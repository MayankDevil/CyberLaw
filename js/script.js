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

    let search = document.getElementById("bar");

    let data_list = document.querySelectorAll("details");

    search.onkeyup = () =>
    {
        for(var i=0; i < CyberLawData.length; i++)
        {
			search_Data.toUpperCase(search.value);
			
            var data = data_list[i].innerHTML;
            
            data_list[i].style.display = (data.toUpperCase().indexOf(search.value) > -1)? 1 : 0;
            
            if(search.value == 1)  data_list[i].style.display = '';
        }
    }
    
    /*  ==============================================================================  */ 
}
catch(error)
{
    console.error(`${error}`)
}