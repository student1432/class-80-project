numeberofguests = [];

function sb()
{
    
    var guest = document.getElementById("input1").value
    numeberofguests.push(guest);
    console.log(numeberofguests);

    document.getElementById("list").innerHTML = numeberofguests;
}

function sortb()
{
    var sortedlist = numeberofguests.sort();
    console.log(sortedlist);
    document.getElementById("sorted_list").innerHTML = sortedlist;
}