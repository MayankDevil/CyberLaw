/*
-   website-10 "CyberLaw"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/detailLayout.js
*/
try
{
    /*
        ---------------------------------------------------------------------------------
        | looped data set in layout                                                     |
        ---------------------------------------------------------------------------------
    */

    let it_law_container = document.querySelector('#it_law_container .container')

    CyberLawData.forEach((data) => {
        it_law_container.insertAdjacentHTML('beforeend',`${detailLayout(data)}`)    
    });


    /*
        =================================================================================
        } Search Bar Function : on key press check detail summary inner data with value
        =================================================================================
    */

    let search = document.getElementById("search_fld")

    let data_list = document.querySelectorAll("#it_law_container details")

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
    
    function detailLayout(data)
    {
        if (data.define == ` `)
        {
            consloe.warning(`Master section ${data.section} is out of service`)
            
            return (`
                <details>

                    <summary>

                        <div class="section"> SECTION-${data.section} </div>

                        <div class="title"> ${data.title} </div>

                    </summary>

                    <div class="define">
                        <a href="https://mayankdevil.github.io/myData/bug.html" target="_self" title="click to check out" class="alert_message"> wait for loading ... </a>
                    </div>

                </details>
            `)
        }
        else
        {
            return (`
                <details>

                    <summary>

                        <div class="section"> SECTION-${data.section} </div>

                        <div class="title"> ${data.title} </div>

                    </summary>

                    <div class="define"> ${data.define} </div>

                </details>
            `)
        }
    }
}
catch (error)
{
    console.error(` Layout error : ${error}`)    
}
// the end
