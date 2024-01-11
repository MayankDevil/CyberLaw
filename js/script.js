/*
-   website-10 "CyberLaw"
-   https://github.com/MayankDevil
-   Designed | Developed by Mayank
-   JavaScript : ./js/script.js
*/
try
{
    /*
        Search Bar:
    */
    // document.write("<input type='search' id='search_bar' placeholder='Search & Read IT Law Of India'>");    
    /*
        Section Details:
    */
    // for(var i=0; i<law_data.length; i++)
    // {
    //     if(i == 0)
    //         document.write("<details open='true'>");
    //     else
    //         document.write("<details>");
    //         document.write("<summary><div>"+law_data[i][0]+"</div><div>"+law_data[i][1]+"</div></summary>");
    //         document.write("<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, est. Earum deserunt fuga nesciunt magnam adipisci accusamus quas inventore eaque enim quam aliquid exercitationem, iusto iste libero dolores voluptatum deleniti suscipit quod, nisi dicta ipsa, obcaecati fugit magni. Voluptas cumque accusantium aliquid labore consequatur nostrum nisi corrupti, quas harum cum eos nam, consectetur, possimus eligendi nesciunt doloribus? Accusantium magnam autem quaerat tempora vel corrupti molestiae placeat reprehenderit aliquid at culpa ullam reiciendis accusamus commodi dicta, qui recusandae, vero esse, odit officia! Libero dolorem qui vel ut quidem consequatur facere magnam, saepe commodi eum? Unde, perspiciatis eveniet saepe pariatur libero consectetur.</p>");
    //         document.write("</details>");
    // }
    /*
        Search Bar code:
    */
    let search = document.getElementById("search_bar");

    let data_list = document.querySelectorAll("details");

    search.onkeyup = () =>
    {
        for(var i=0; i<law_data.length; i++)
        {
			search_Data.toUpperCase(search.value);
			
            var data = data_list[i].innerHTML;
            
            data_list[i].style.display = (data.toUpperCase().indexOf(search.value) > -1)? ' ' : 'none';
            
            if(search.value == '')  data_list[i].style.display = '';
        }
    }

}
catch(error)
{
    console.error(`${error}`)
}