/*
-   website-10 "CyberLaw"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/detailLayout.js
*/
try
{
    function detailLayout(data)
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
catch (error)
{
    console.error(` Layout error : ${error}`)    
}
// the end