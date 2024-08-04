/*
-   website-10 "CyberLaw"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    window.addEventListener('scroll',() => {

        let searchIcon =document.getElementById('search_icon')

        let afterSpan = document.getElementsByClassName('after')[0]
        
        let beforeSpan = document.getElementsByClassName('before')[0]

        let image = document.getElementsByClassName('image')

        let headerLead = document.querySelectorAll('header .lead')[0]

        let amendment = document.getElementById('amendment')

        let amendmentPosition = amendment.getBoundingClientRect().top

        let headerLeadPosition = headerLead.getBoundingClientRect().top

        let borderLeftPosition = document.getElementsByClassName('border-left')[0].getBoundingClientRect().top
        
        let screenPosition = window.innerHeight;

        if (100 < screenPosition)
        {
            searchIcon.classList.add('activeSearch')
            searchIcon.innerText = null
        }

        if (headerLeadPosition < screenPosition)
        {        
            headerLead.classList.add('zooming')
        }
        else
        {
            headerLead.classList.remove('zooming')
        }

        if (amendmentPosition < screenPosition)
        {
            amendment.lastElementChild.classList.add('zooming')
        }
        else
        {
            amendment.lastElementChild.classList.remove('zooming')
        }

        if (borderLeftPosition < screenPosition)
        {
            beforeSpan.classList.add('active_btn')
            afterSpan.classList.add('active_btn')
        }
        else
        {
            beforeSpan.classList.remove('active_btn')
            afterSpan.classList.remove('active_btn')
        }

        if (10 < screenPosition)
        {
            for (let i = 0; i < image.length; i++)
                image[i].classList.add(`active_image${i+1}`)
        }
        else
        {
            for (let i = 0; i < image.length; i++)
                image[i].classList.remove(`active_image${i+1}`)
        }

    });


    
    console.log(`\n----------- readme -----------\n
    \n\tLEAVE ME HERE\n
    \n------------------------------
    \nDesigned | Developed by Mayank`)
}
catch(error)
{
    console.error(`${error}`)
}
