let twitter_text_box=document.getElementById("twitter_tag")
let email_text_box=document.getElementById("email_tag")
let github_text_box=document.getElementById("github_tag")
let name_text_box=document.getElementById("name_tag")
let create_button=document.getElementById("create_button")
let clear_button=document.getElementById("clear_button")
//let output_table=document.getElementById("output_table")
let error_var_track=0
let error_message=true;
//let output_table=document.querySelector(".hide")
//document.getElementById("output_table").style.display="none"

function email_check()
{
    let s=email_text_box.value
    let check_var=0
    let check_var_domain=0
    for (let i=0;i<s.length;i++)
    {
        if (s[i]=='@')
        {
            check_var+=1
        }
        else if (s[i]=='.')
        {
            check_var_domain+=1
        }
    }
    if (check_var==1)
    {
        if (check_var_domain!=1)
        {
            //alert("Invalid Email")
            return false
        }
    }
    else
    {
        // alert("Invalid Email")
        return false
    }
    return true
}

function twitter_check()
{
    let s=twitter_text_box.value
    if (s.lenght>0)
    {
        if (s[0]!='@')
        {
            s='@'+s
            return true
        }
    }
    return true
}

function name_check()
{
    let s=name_text_box.value
    if (s=="" || s==" ")
    {
        //alert("Invalid Name")
        return false
    }
    return true
}

// function output()
// {
//     //code to show the pop up div    
//     preventDefault()
//     document.querySelector(".overlay").style.display="flex"   
// }

document.querySelector('#closeBtn').addEventListener("click",function(){
    document.getElementById("overlay").style.display='none'
})

// function input_validity(e)
// {
//     e.preventDefault()
//     if (name_check() && twitter_check() && email_check())
//     {
//         output()
//     }
//     else    
//     {
//         // alert("Invalid input(s)")
//     }
// }

create_button.addEventListener("click",function(e)
{
    e.preventDefault()
    if (name_check())
    {
        if (twitter_check())
        {
            if (email_check())
            {
                document.getElementById("name_display").textContent=name_text_box.value
                document.getElementById("email_display").textContent=email_text_box.value
                document.getElementById("twitter_display").textContent=twitter_text_box.value
                document.getElementById("github_display").textContent=github_text_box.value
                document.getElementById("overlay").style.display='flex'
                var typeNumber = 4;
                var errorCorrectionLevel = 'L';
                var qr = qrcode(typeNumber, errorCorrectionLevel);
                qr.addData('Hi!');
                qr.make();
                console.log(qr.make())
                document.getElementById('placeHolder').innerHTML = qr.createImgTag();
            }
        }
    }
})

function clear_text_box(e)
{
    e.preventDefault()
    twitter_text_box.value=''
    name_text_box.value=''
    email_text_box.value=''
    github_text_box.value=''
    document.getElementById("name_display").textContent='NAME : '
    document.getElementById("email_display").textContent='EMAIL ID : '
    document.getElementById("twitter_display").textContent='TWITTER ID : '
    document.getElementById("github_display").textContent='GITHUB : '
}

