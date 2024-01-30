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
